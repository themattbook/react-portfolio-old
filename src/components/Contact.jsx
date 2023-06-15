import React, { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import db from '../firebase';

const Contact = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [status, setStatus] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!email || !message) {
            setStatus('Please provide an email address and message.');
            return;
        } else {
            try {
                await addDoc(collection(db, 'contact'), {
                    email,
                    message,
                    createdAt: new Date(),
                });

                // Clear form fields
                setEmail('');
                setMessage('');
                setStatus('Message sent successfully. Thank you.');
            } catch (error) {
                console.error('Error adding contact entry:', error);
                setStatus('There was an issue sending your message', error);
            }
        }
    };

    return (
        <div>
            <div className="flex items-center justify-center w-full sm:w-[40vw] h-screen select-none">
                <div>
                    <h1 className="text-2xl sm:text-4xl tracking-tight px-4 py-2">
                        Do you want to <strong>work with me</strong>? Let&apos;s get in touch. I answer{' '}
                        <strong>all</strong> inquiries within <strong>24-48 hours</strong>.
                    </h1>
                    <form onSubmit={handleSubmit} className="mt-5 px-4 py-2">
                        <input
                            className="p-3 outline-none border-b border-b-gray-800 w-full"
                            type="text"
                            placeholder="Your email address"
                            value={email}
                            required
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <textarea
                            className="p-3 outline-none border-b border-b-gray-800 w-full"
                            placeholder="Your message"
                            value={message}
                            required
                            onChange={(e) => setMessage(e.target.value)}
                        ></textarea>
                        <button className="border-gray-700 border p-2 rounded-lg mt-3" type="submit">
                            Send message
                        </button>
                    </form>
                    <p className="px-4 py-2">{status}</p>
                </div>
            </div>
        </div>
    );
};

export default Contact;

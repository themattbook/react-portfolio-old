import React, { useEffect, useState } from 'react';
import { collection, addDoc, onSnapshot } from 'firebase/firestore';
import db from '../firebase';

const Guestbook = () => {
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const [entries, setEntries] = useState([]);

    const sortedEntires = entries
        .sort((a, b) => {
            return new Date(a.createdAt.seconds).getTime() - new Date(b.createdAt.seconds).getTime();
        })
        .reverse();

    useEffect(() => {
        const unsubscribe = onSnapshot(collection(db, 'guestbook'), (snapshot) => {
            const entryList = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
            setEntries(entryList);
        });

        // Unsubscribe from the snapshot listener when component unmounts
        return () => unsubscribe();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!name || !message) {
            return;
        } else {
            try {
                await addDoc(collection(db, 'guestbook'), {
                    name,
                    message,
                    createdAt: new Date(),
                });

                // Clear form fields
                setName('');
                setMessage('');
            } catch (error) {
                console.error('Error adding guestbook entry:', error);
            }
        }
    };

    return (
        <div>
            <div className="w-full sm:w-[40vw]">
                <h1 className="text-4xl sm:text-5xl tracking-tight px-4 py-2">Guestbook</h1>
                <h1 className="hidden sm:block sm:text-4xl tracking-tight px-4 py-2">
                    I'm a product of the <strong>90's</strong>. When I saw other devs incorporating the{' '}
                    <strong>classic Guestbook</strong> into their site, I thought it was a great use of{' '}
                    <strong>Firebase</strong>. Feel free to sign if you'd like :)
                </h1>
                <form onSubmit={handleSubmit} className="mt-5 px-4 py-2">
                    <input
                        className="p-3 outline-none border-b border-b-gray-800 w-full"
                        type="text"
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <textarea
                        className="p-3 outline-none border-b border-b-gray-800 w-full"
                        placeholder="Message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    ></textarea>
                    <button className="border-gray-700 border p-2 rounded-lg mt-3" type="submit">
                        Sign Guestbook
                    </button>
                </form>
                <div className="flex max-h-[70vh] overflow-y-auto overflow-x-hidden mt-5">
                    <ul className="w-full px-4">
                        {sortedEntires.map((entry) => (
                            <li key={entry.id} className="border-b border-b-gray-500 font-medium">
                                <p className="py-4">
                                    {entry.name} on{' '}
                                    <span className="text-blue-700">
                                        {new Date(entry.createdAt.seconds * 1000).toLocaleString()}
                                    </span>
                                </p>
                                <p className="font-mono">
                                    <td className="py-2">{entry.message}</td>
                                </p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Guestbook;

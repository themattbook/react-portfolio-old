import React, { useEffect, useState } from 'react';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, onSnapshot } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,
    measurementId: process.env.REACT_APP_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

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
            <div className="w-[40vw]">
                <h1 className="text-5xl font-bold px-4 py-2">Guestbook</h1>
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
                                <pre>
                                    <td className="py-2">{entry.message}</td>
                                </pre>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Guestbook;

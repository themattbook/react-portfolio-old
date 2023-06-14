import React from 'react';
import { Link } from 'react-router-dom';

const GuestBook = () => {
    return (
        <div className="max-w-[90vw] sm:max-w-[40vw] select-none">
            <h2 className="text-3xl sm:text-7xl tracking-tight">This is where my guestbook lives.</h2>
            <h2 className="text-3xl sm:text-3xl tracking-tight">
                <Link to="/">Return Home</Link>
            </h2>
        </div>
    );
};

export default GuestBook;

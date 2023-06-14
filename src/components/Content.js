import React from 'react';
import avatar from '../avatar.jpg';

const Content = () => {
    return (
        <div className="max-w-[90vw] sm:max-w-[40vw] select-none">
            <img src={avatar} className="h-32 w-32 rounded-full hidden sm:block" alt="Me" />
            <h1 className="text-3xl sm:text-7xl tracking-tight">
                I'm <strong>Matthew</strong>. I'm a <strong>Fullstack Developer</strong> who specializes in UI/UX. I
                love <strong>React</strong> and <strong>Vue</strong> paired with <strong>TypeScript</strong>.
            </h1>
        </div>
    );
};

export default Content;

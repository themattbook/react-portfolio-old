import React from 'react';
import avatar from '../avatar.jpg';

const Content = () => {
    return (
        <div className="max-w-[90vw] sm:max-w-[40vw] select-none">
            <img src={avatar} className="w-24 h-24 mx-auto sm:mx-0 sm:h-32 sm:w-32 rounded-full" alt="Me" />
            <h1 className="text-center sm:text-left text-3xl sm:text-6xl tracking-tight">
                I'm <strong>Matthew</strong>. I'm a <strong>FullStack Developer</strong> who specializes in UI/UX. I
                love <strong>React</strong> and <strong>Vue</strong> paired with <strong>TypeScript</strong>.
            </h1>
        </div>
    );
};

export default Content;

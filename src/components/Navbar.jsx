import React from 'react';
import Resume from '../data/matthew_sweet_resume.docx';
import { BsLinkedin, BsGithub, BsTwitter, BsInstagram, BsFillFileTextFill } from 'react-icons/bs';

const Navbar = () => {
    return (
        <div className="flex items-center justify-center p-2">
            <ul className="list-none flex justify-evenly sm:justify-between w-[100vw] sm:w-[40vw] text-sm sm:text-2xl hover:cursor-pointer">
                <li className="hover:text-4xl opacity-50 hover:opacity-100 ease-in duration-100">
                    <a href="https://www.linkedin.com/in/meetmattsweet/" target="_blank" rel="noreferrer">
                        <BsLinkedin />
                    </a>
                </li>
                <li className="hover:text-4xl opacity-50 hover:opacity-100 ease-in duration-100">
                    <a href="https://www.github.com/themattbook" target="_blank" rel="noreferrer">
                        <BsGithub />
                    </a>
                </li>
                <li className="hover:text-4xl opacity-50 hover:opacity-100 ease-in duration-100">
                    <a href="https://www.twitter.com/meetmattsweet" target="_blank" rel="noreferrer">
                        <BsTwitter />
                    </a>
                </li>
                <li className="hover:text-4xl opacity-50 hover:opacity-100 ease-in duration-100">
                    <a href="https://www.instagram.com/javascript_matt" target="_blank" rel="noreferrer">
                        <BsInstagram />
                    </a>
                </li>
                <li className="hover:text-4xl opacity-50 hover:opacity-100 ease-in duration-100">
                    <a href={Resume} download target="_blank" rel="noreferrer">
                        <BsFillFileTextFill />
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default Navbar;

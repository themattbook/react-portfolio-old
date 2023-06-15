import React from 'react';
import Resume from '../data/matthew_sweet_resume.docx';
import {
    BsLinkedin,
    BsGithub,
    BsTwitter,
    BsInstagram,
    BsFillFileTextFill,
    BsHouseFill,
    BsBookHalf,
} from 'react-icons/bs';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <footer className="fixed bottom-0 w-full">
            <div className="flex flex-wrap items-center justify-center p-5 mt-12">
                <ul className="list-none flex justify-evenly sm:justify-between w-[100vw] sm:w-[40vw] text-sm sm:text-2xl hover:cursor-pointer">
                    <li className="hover:text-blue-600 ease-in duration-100">
                        <Link to="/">
                            <BsHouseFill />
                        </Link>
                    </li>
                    <li className="hover:text-blue-600 ease-in duration-100">
                        <Link to="/guestbook">
                            <BsBookHalf />
                        </Link>
                    </li>
                    <li className="hover:text-blue-600 ease-in duration-100">
                        <a href="https://www.linkedin.com/in/meetmattsweet/" target="_blank" rel="noreferrer">
                            <BsLinkedin />
                        </a>
                    </li>
                    <li className="hover:text-blue-600 ease-in duration-100">
                        <a href="https://www.github.com/themattbook" target="_blank" rel="noreferrer">
                            <BsGithub />
                        </a>
                    </li>
                    <li className="hover:text-blue-600 ease-in duration-100">
                        <a href="https://www.twitter.com/meetmattsweet" target="_blank" rel="noreferrer">
                            <BsTwitter />
                        </a>
                    </li>
                    <li className="hover:text-blue-600 ease-in duration-100">
                        <a href="https://www.instagram.com/javascript_matt" target="_blank" rel="noreferrer">
                            <BsInstagram />
                        </a>
                    </li>
                    <li className="hover:text-blue-600 ease-in duration-100">
                        <a href={Resume} download target="_blank" rel="noreferrer">
                            <BsFillFileTextFill />
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    );
};

export default Navbar;

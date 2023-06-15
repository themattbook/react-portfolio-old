import { Routes, Route, Outlet } from 'react-router-dom';
// import './style.min.css';
import './App.css';
import Content from './components/Content';
import Navbar from './components/Navbar';
import GuestBook from './components/GuestBook';
import Contact from './components/Contact';

function App() {
    return (
        <>
            <div className="min-h-screen">
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Home />} />
                        <Route path="guestbook" element={<Guestbook />} />
                        <Route path="contact" element={<ContactMe />} />
                        <Route path="*" element={<Home />} />
                    </Route>
                </Routes>
            </div>
            <Navbar />
        </>
    );
}

function Layout() {
    return <Outlet />;
}

function Home() {
    return (
        <div className="flex min-h-screen items-center justify-center">
            <Content />
        </div>
    );
}

function Guestbook() {
    return (
        <div className="flex justify-center min-h-screen">
            <GuestBook />
        </div>
    );
}

function ContactMe() {
    return (
        <div className="flex justify-center min-h-screen">
            <Contact />
        </div>
    );
}

export default App;

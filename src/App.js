import { Routes, Route, Outlet } from 'react-router-dom';
import './style.min.css';
import Content from './components/Content';
import Navbar from './components/Navbar';
import GuestBook from './components/GuestBook';

function App() {
    return (
        <>
            <div className="flex items-center justify-center min-h-[calc(100vh-64px)]">
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Home />} />
                        <Route path="guestbook" element={<Guestbook />} />
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
    return <Content />;
}

function Guestbook() {
    return <GuestBook />;
}

export default App;

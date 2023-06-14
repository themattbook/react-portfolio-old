import './style.min.css';
import Content from './components/Content';
import Navbar from './components/Navbar';

function App() {
    return (
        <>
            <div className="flex items-center justify-center min-h-[calc(100vh-64px)]">
                <Content />
            </div>
            <Navbar />
        </>
    );
}

export default App;

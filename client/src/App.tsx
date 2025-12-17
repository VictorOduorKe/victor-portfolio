import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Experience from './sections/Experience';
import Contact from './sections/Contact';
import NotFound from './sections/NotFound';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MainLayout = () => (
    <>
        <Navbar />
        <main>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Experience />
            <Contact />
        </main>
        <footer className="bg-dark py-8 text-center text-gray-500 text-sm border-t border-gray-800">
            <p>© {new Date().getFullYear()} Victor Oduor. All rights reserved.</p>
            <p className="mt-2">Built with React, Node.js & Tailwind CSS</p>
        </footer>
    </>
);

function App() {
    return (
        <Router>
            <div className="bg-dark min-h-screen text-white font-sans selection:bg-primary selection:text-white">
                <Routes>
                    <Route path="/" element={<MainLayout />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
                <ToastContainer position="bottom-right" theme="dark" />
            </div>
        </Router>
    );
}

export default App;

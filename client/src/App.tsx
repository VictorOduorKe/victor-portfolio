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
        <footer className="bg-slate-50 py-8 text-center text-slate-500 text-sm border-t border-slate-200">
            <p>© {new Date().getFullYear()} Victor Oduor. All rights reserved.</p>
            <p className="mt-2">Built with React, Node.js & Tailwind CSS</p>
        </footer>
    </>
);

function App() {
    return (
        <Router>
            <div className="bg-white min-h-screen text-slate-800 font-sans selection:bg-primary selection:text-white">
                <Routes>
                    <Route path="/" element={<MainLayout />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
                <ToastContainer position="bottom-right" theme="light" />
            </div>
        </Router>
    );
}

export default App;

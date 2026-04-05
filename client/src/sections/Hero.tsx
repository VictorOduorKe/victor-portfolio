import { motion } from 'framer-motion';
import profileImage from '../assets/profile.jpeg';
const Hero = () => {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center pt-16 bg-white overflow-hidden relative">
            {/* Subtle background decoration similar to image dot-lines if needed, omitting for strict white */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center relative z-10">

                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="md:w-1/2 text-center md:text-left"
                >
                    <h2 className="text-slate-500 font-semibold tracking-wide uppercase mb-2">Full-Stack Developer</h2>
                    <h1 className="text-5xl md:text-7xl font-bold text-slate-800 mb-6">
                        Hi, I'm <br className="hidden md:block"/><span className="text-primary">Victor Oduor</span>
                    </h1>
                    <p className="text-slate-600 text-lg md:text-xl mb-8 max-w-lg mx-auto md:mx-0">
                        Building secure, intelligent, and scalable web systems. Passionate about AI integrations, automation, and network security.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                        <a href="#projects" className="px-8 py-3 bg-primary text-white rounded-full font-medium hover:bg-blue-600 transition-colors shadow-md">
                            View Projects
                        </a>
                        <a href="#contact" className="px-8 py-3 border border-slate-300 text-slate-700 bg-white rounded-full font-medium hover:border-slate-400 hover:bg-slate-50 transition-colors shadow-sm">
                            Contact Me
                        </a>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="md:w-1/2 mt-12 md:mt-0 flex justify-center relative"
                >
                    <div className="relative w-64 h-64 md:w-96 md:h-96">
                        {/* Remove gradient circle, add simple drop shadow instead */}
                        <div className="absolute inset-0 bg-blue-100 rounded-full blur-3xl opacity-50"></div>
                        <img
                            src={profileImage}
                            alt="Victor Oduor"
                            className="relative w-full h-full object-cover rounded-full border-4 border-white shadow-2xl"
                        />
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default Hero;

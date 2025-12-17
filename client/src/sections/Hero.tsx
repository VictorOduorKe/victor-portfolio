import { motion } from 'framer-motion';
import profileImage from '../assets/profile.jpeg';
const Hero = () => {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center pt-16 bg-gradient-to-b from-dark to-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center">

                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="md:w-1/2 text-center md:text-left"
                >
                    <h2 className="text-primary font-semibold tracking-wide uppercase mb-2">Full-Stack Developer</h2>
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                        Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Victor Oduor</span>
                    </h1>
                    <p className="text-gray-400 text-lg md:text-xl mb-8 max-w-lg mx-auto md:mx-0">
                        Building secure, intelligent, and scalable web systems. Passionate about AI integrations, automation, and network security.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                        <a href="#projects" className="px-8 py-3 bg-primary text-white rounded-full font-medium hover:bg-sky-600 transition-colors">
                            View Projects
                        </a>
                        <a href="#contact" className="px-8 py-3 border border-gray-600 text-gray-300 rounded-full font-medium hover:border-white hover:text-white transition-colors">
                            Contact Me
                        </a>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="md:w-1/2 mt-12 md:mt-0 flex justify-center"
                >
                    <div className="relative w-64 h-64 md:w-80 md:h-80">
                        <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full blur-2xl opacity-20 animate-pulse"></div>
                        <img
                            src={profileImage}
                            alt="Victor Oduor"
                            className="relative w-full h-full object-cover rounded-full border-4 border-gray-800 shadow-2xl"
                        />
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default Hero;

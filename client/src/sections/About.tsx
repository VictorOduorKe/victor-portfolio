import { motion } from 'framer-motion';
import { FaServer, FaCode, FaShieldAlt } from 'react-icons/fa';

const About = () => {
    return (
        <>
        <section id="about" className="py-20 bg-dark text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
                    <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <p className="text-gray-300 text-lg leading-relaxed mb-6">
                            I am a <span className="text-primary font-semibold">Full-Stack Web Developer</span> and <span className="text-secondary font-semibold">Network Security Enthusiast</span> with a passion for building robust, scalable applications.
                        </p>
                        <p className="text-gray-300 text-lg leading-relaxed mb-6">
                            With a solid foundation in both frontend and backend technologies, I specialize in creating seamless digital experiences. My journey involves not just writing code, but solving real-world problems through automation and intelligent systems.
                        </p>
                        <p className="text-gray-300 text-lg leading-relaxed">
                            Currently, I'm expanding my expertise in <span className="text-primary">AI integrations</span> and <span className="text-secondary">Cybersecurity</span>, aiming to bridge the gap between secure infrastructure and innovative software solutions.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="grid grid-cols-1 gap-6"
                    >
                        <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-primary transition-colors">
                            <FaCode className="text-3xl text-primary mb-4" />
                            <h3 className="text-xl font-bold mb-2">Full-Stack Dev</h3>
                            <p className="text-gray-400">Building end-to-end solutions using React, Node.js, and PHP.</p>
                        </div>
                        <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-secondary transition-colors">
                            <FaShieldAlt className="text-3xl text-secondary mb-4" />
                            <h3 className="text-xl font-bold mb-2">Security Focused</h3>
                            <p className="text-gray-400">Implementing secure authentication and role-based access controls.</p>
                        </div>
                        <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-primary transition-colors">
                            <FaServer className="text-3xl text-primary mb-4" />
                            <h3 className="text-xl font-bold mb-2">Automation & AI</h3>
                            <p className="text-gray-400">Leveraging Puppeteer and AI APIs to automate workflows.</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
        </>
    );
};

export default About;

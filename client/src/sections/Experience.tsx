import { motion } from 'framer-motion';

const Experience = () => {
    // Placeholder experience data derived from generic dev path or user info if available.
    // User info: "Victor is a hands-on developer with solid experience... currently exploring AI... aiming to grow into Network Security Engineer"
    // I will mock some experience based on this profile.
    const timeline = [
        {
            year: 'Present',
            title: 'Full-Stack Developer & Security Enthusiast',
            company: 'Freelance / Personal Projects',
            description: 'Building AI-powered applications and secure web systems. Integrating payment gateways like M-PESA and Paystack.'
        },
        {
            year: '2023 - 2024',
            title: 'Web Developer',
            company: 'Various Clients',
            description: 'Developed dynamic web applications using React, PHP, and Node.js. Optimized database performance and ensured mobile responsiveness.'
        }
    ];

    return (
        <section id="experience" className="py-20 bg-gray-900 border-t border-gray-800">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Experience & Roadmap</h2>
                    <div className="w-20 h-1 bg-secondary mx-auto rounded-full"></div>
                </motion.div>

                <div className="space-y-12">
                    {timeline.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className="flex gap-4 md:gap-8"
                        >
                            <div className="flex flex-col items-center">
                                <div className="w-4 h-4 bg-primary rounded-full ring-4 ring-primary/20"></div>
                                <div className="w-0.5 h-full bg-gray-800 my-2"></div>
                            </div>
                            <div className="pb-8">
                                <span className="text-secondary font-mono text-sm">{item.year}</span>
                                <h3 className="text-xl font-bold text-white mt-1">{item.title}</h3>
                                <p className="text-gray-400 font-medium">{item.company}</p>
                                <p className="text-gray-400 mt-2 max-w-lg">{item.description}</p>
                            </div>
                        </motion.div>
                    ))}

                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="flex gap-4 md:gap-8"
                    >
                        <div className="flex flex-col items-center">
                            <div className="w-4 h-4 bg-green-500 rounded-full ring-4 ring-green-500/20"></div>
                        </div>
                        <div className="pb-0">
                            <span className="text-green-400 font-mono text-sm">Future Goal</span>
                            <h3 className="text-xl font-bold text-white mt-1">Network Security Engineer</h3>
                            <p className="text-gray-400 mt-2 max-w-lg">
                                Focusing on Huawei ecosystem, cybersecurity concepts, and advanced network defense strategies.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Experience;

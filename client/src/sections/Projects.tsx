import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
    {
        title: 'AI-Powered Study Planner',
        description: 'An intelligent system that generates adaptive study plans from course outlines using AI. Features raw content storage and weekly mood analysis for dynamic adjustments.',
        tags: ['React', 'Node.js', 'OpenAI API', 'PostgreSQL'],
        github: '#',
        demo: '#',
        image: 'https://via.placeholder.com/600x400'
    },
    {
        title: 'Online OB Generator',
        description: 'PHP-based system for remote Occurrence Book reporting. Includes police post search and PDF generation for unique OB numbers.',
        tags: ['PHP', 'MySQL', 'Bootstrap', 'FPDF'],
        github: '#',
        demo: '#',
        image: 'https://via.placeholder.com/600x400'
    },
    {
        title: 'Telecom Offer Automation',
        description: 'Automated purchase system integrating M-PESA/Paystack payments with Puppeteer for telecom offer fulfillment.',
        tags: ['Node.js', 'Puppeteer', 'M-PESA', 'Express'],
        github: '#',
        demo: '#',
        image: 'https://via.placeholder.com/600x400'
    }
];

const Projects = () => {
    return (
        <section id="projects" className="py-20 bg-dark text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
                    <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className="bg-gray-900 rounded-xl overflow-hidden shadow-xl border border-gray-800 hover:border-gray-600 transition-all group"
                        >
                            <div className="relative overflow-hidden h-48">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                                    <a href={project.github} className="p-2 bg-white text-dark rounded-full hover:bg-gray-200 transition-colors" title="View Code">
                                        <FaGithub size={20} />
                                    </a>
                                    <a href={project.demo} className="p-2 bg-primary text-white rounded-full hover:bg-sky-600 transition-colors" title="Live Demo">
                                        <FaExternalLinkAlt size={18} />
                                    </a>
                                </div>
                            </div>

                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                                <p className="text-gray-400 text-sm mb-4 line-clamp-3">{project.description}</p>
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="px-3 py-1 bg-gray-800 text-xs text-secondary rounded-full border border-gray-700">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;

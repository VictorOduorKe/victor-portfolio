import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaPhp, FaGitAlt, FaLinux } from 'react-icons/fa';
import { SiPostgresql, SiMysql, SiFirebase, SiTailwindcss, SiTypescript } from 'react-icons/si';

const skills = [
    { name: 'HTML5', icon: FaHtml5, color: '#E34F26' },
    { name: 'CSS3', icon: FaCss3Alt, color: '#1572B6' },
    { name: 'JavaScript', icon: FaJs, color: '#F7DF1E' },
    { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
    { name: 'React', icon: FaReact, color: '#61DAFB' },
    { name: 'Tailwind', icon: SiTailwindcss, color: '#06B6D4' },
    { name: 'Node.js', icon: FaNodeJs, color: '#339933' },
    { name: 'PHP', icon: FaPhp, color: '#777BB4' },
    { name: 'PostgreSQL', icon: SiPostgresql, color: '#336791' },
    { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
    { name: 'Firebase', icon: SiFirebase, color: '#FFCA28' },
    { name: 'Git', icon: FaGitAlt, color: '#F05032' },
    { name: 'Linux', icon: FaLinux, color: '#FCC624' },
];

const Skills = () => {
    return (
        <section id="skills" className="py-20 bg-gray-900 border-t border-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Core Skills</h2>
                    <div className="w-20 h-1 bg-secondary mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={skill.name}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.05 }}
                            className="bg-dark p-6 rounded-xl flex flex-col items-center justify-center border border-gray-800 hover:border-gray-600 hover:shadow-lg transition-all"
                        >
                            <skill.icon className="text-4xl mb-3" style={{ color: skill.color }} />
                            <span className="text-gray-300 font-medium">{skill.name}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;

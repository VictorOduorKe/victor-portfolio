import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { motion } from 'framer-motion';
import { toast } from 'react-toastify';
import { FaPaperPlane, FaSpinner } from 'react-icons/fa';

// Validation Schema
const contactSchema = z.object({
    name: z.string().min(2, 'Name must be at least 2 characters'),
    email: z.string().email('Invalid email address'),
    message: z.string().min(10, 'Message must be at least 10 characters').max(500, 'Message cannot exceed 500 characters'),
});

type ContactFormData = z.infer<typeof contactSchema>;

const Contact = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactFormData>({
        resolver: zodResolver(contactSchema),
    });

    const onSubmit = async (data: ContactFormData) => {
        setIsSubmitting(true);
        try {
            // In production, use the actual API URL. For now, we assume same-domain proxy or CORS allowed
            const response = await fetch(`${import.meta.env.VITE_API_URL}/api/contact`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            const result = await response.json();

            if (!response.ok) {
                throw new Error(result.errors ? result.errors[0].msg : 'Failed to send message');
            }

            toast.success('Message sent successfully! I will get back to you soon.');
            reset();
        } catch (error: any) {
            toast.error(error.message || 'Something went wrong. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="py-20 bg-dark text-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
                    <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
                    <p className="mt-4 text-gray-400">
                        Have a project in mind or want to discuss network security? Drop me a message!
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="bg-gray-900 p-8 rounded-2xl shadow-2xl border border-gray-800"
                >
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Name</label>
                                <input
                                    {...register('name')}
                                    type="text"
                                    className={`w-full px-4 py-3 bg-dark border ${errors.name ? 'border-red-500' : 'border-gray-700'} rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors text-white`}
                                    placeholder="Your Name"
                                />
                                {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>}
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                                <input
                                    {...register('email')}
                                    type="email"
                                    className={`w-full px-4 py-3 bg-dark border ${errors.email ? 'border-red-500' : 'border-gray-700'} rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors text-white`}
                                    placeholder="Your Email"
                                />
                                {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>}
                            </div>
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                            <textarea
                                {...register('message')}
                                rows={5}
                                className={`w-full px-4 py-3 bg-dark border ${errors.message ? 'border-red-500' : 'border-gray-700'} rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors text-white resize-none`}
                                placeholder="Your Message"
                            ></textarea>
                            {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>}
                        </div>

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full md:w-auto px-8 py-3 bg-primary text-white font-medium rounded-lg hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-2 mx-auto"
                        >
                            {isSubmitting ? (
                                <>
                                    <FaSpinner className="animate-spin" /> Sending...
                                </>
                            ) : (
                                <>
                                    <FaPaperPlane /> Send Message
                                </>
                            )}
                        </button>
                    </form>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;

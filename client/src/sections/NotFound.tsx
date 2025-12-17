import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const NotFound = () => {
    return (
        <div className="min-h-screen bg-dark flex flex-col items-center justify-center text-white px-4">
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="text-center"
            >
                <h1 className="text-9xl font-bold text-primary mb-4">404</h1>
                <h2 className="text-3xl font-semibold mb-6">Page Not Found</h2>
                <p className="text-gray-400 mb-8 max-w-md mx-auto">
                    The page you are looking for doesn't exist or has been moved.
                    Let's get you back on track.
                </p>
                <Link
                    to="/"
                    className="px-8 py-3 bg-primary text-white rounded-full font-medium hover:bg-sky-600 transition-colors inline-block"
                >
                    Go Home
                </Link>
            </motion.div>
        </div>
    );
};

export default NotFound;

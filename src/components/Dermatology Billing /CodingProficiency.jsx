import React from 'react';
import { motion } from 'framer-motion';
import img8 from '../../assets/img8.png';


const CodingProficiency = () => {
    // Animation Variants
    const textVariant = {
        hidden: { opacity: 0, x: -100 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
    };

    const imageVariant = {
        hidden: { opacity: 0, x: 100 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
    };

    return (
        <div className='bg-gray-100'>
            <motion.div
                className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8 "
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
            >
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Text Section with Animation */}
                    <motion.div className="space-y-6" variants={textVariant}>
                        <h2 className="text-xl md:text-4xl font-bold text-[#1B3B5A] leading-tight">
                        Coding Proficiency for Dermatology Services
                        </h2>
                        <p className="text-gray-700  leading-relaxed">
                            Our internal medicine medical billing services offer long-term financial benefits for medical practices. With a team of industry experts, cutting-edge technology, and the best infrastructure, we manage the revenue cycle efficiently while reducing claim denials and speeding up reimbursements. We ensure accurate coding and compliance, eliminating costly errors that impact revenue.
                            We work for mutual success goals and align your healthcare practice perfectly with sustainable growth, achieving long-term financial goals and stability.
                        </p>
                    </motion.div>
                    {/* Image Section with Animation */}
                    <motion.div className="relative" variants={imageVariant}>
                        <img
                            src={img8}
                            alt="Financial Benefits Illustration"
                            className="w-full"
                        />
                    </motion.div>
                </div>
            </motion.div>
        </div>
    );
};

export default CodingProficiency;
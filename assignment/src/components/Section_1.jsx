import React from 'react';
import { motion } from 'framer-motion';
import Image from '../assets/Early.jpg';

function Section_1() {
return (
    <motion.div 
    initial={{ opacity: 0, y: 50 }} 
    animate={{ opacity: 1, y: 0 }} 
    transition={{ duration: 1 }}
    className="flex flex-col md:flex-row items-center justify-between min-h-screen bg-gray-900 text-white p-6 md:p-12"
    >
    <div className="max-w-2xl w-full md:w-2/3 text-center md:text-left">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 md:ml-10">Early Mechanical Computers (1800s - 1940s)</h1>
        <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="bg-gray-800 p-6 rounded-lg shadow-lg mx-auto md:ml-10"
        >
        <ul className="space-y-4 text-lg">
            <li>
            <span className="font-semibold">Charles Babbage’s Analytical Engine (1837):</span> Considered the first concept of a programmable computer.
            </li>
            <li>
            <span className="font-semibold">Alan Turing’s Turing Machine (1936):</span> A theoretical model that laid the foundation for modern computing.
            </li>
            <li>
            <span className="font-semibold">ENIAC (1945):</span> The first general-purpose electronic computer, massive in size but limited in power.
            </li>
        </ul>
        </motion.div>
    </div>
    <div className="w-full md:w-1/3 mt-6 md:mt-0 md:mr-10 flex justify-center">
        <img 
        src={Image}
        alt="Early Mechanical Computers" 
        className="rounded-lg shadow-lg w-full max-w-xs sm:max-w-sm md:max-w-md"
        />
    </div>
    </motion.div>
);
}

export default Section_1;

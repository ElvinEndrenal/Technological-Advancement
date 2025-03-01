import React from 'react';
import { motion } from 'framer-motion';
import Image from '../assets/Digital.png';

function Section_2() {
return (
    <motion.div 
    initial={{ opacity: 0, y: 50 }} 
    animate={{ opacity: 1, y: 0 }} 
    transition={{ duration: 1 }}
    className="flex flex-col md:flex-row items-center justify-between min-h-screen bg-gray-900 text-white p-6"
    >

    <div className="w-full md:w-1/3 flex justify-center md:justify-start order-2 md:order-1 md:ml-10">
        <img 
        src={Image} 
        alt="Digital Era Computers" 
        className="rounded-lg shadow-lg w-full max-w-xs sm:max-w-sm md:max-w-md"
        />
    </div>

    <div className="max-w-2xl w-full text-center md:text-left order-1 md:order-2 md:mr-10">
        <h1 className="text-3xl md:text-4xl font-bold mb-6">Transistors and Early Digital Computers (1950s - 1970s)</h1>
        <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="bg-gray-800 p-6 rounded-lg shadow-lg"
        >
        <ul className="space-y-4 text-lg">
            <li>
            <span className="font-semibold">Transistor Invention (1947):</span> Replaced bulky vacuum tubes, making computers smaller and more efficient.
            </li>
            <li>
            <span className="font-semibold">IBM 360 (1964):</span> One of the first computers designed for both business and scientific applications.
            </li>
            <li>
            <span className="font-semibold">Microprocessors (1971, Intel 4004):</span> Allowed computers to become more compact and powerful.
            </li>
        </ul>
        </motion.div>
    </div>
    </motion.div>
);
}

export default Section_2;

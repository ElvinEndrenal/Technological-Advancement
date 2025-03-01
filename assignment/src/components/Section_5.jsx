import React from 'react';
import { motion } from 'framer-motion';
import Image from '../assets/future.png';

function Section_5() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 1 }}
      className="flex flex-col md:flex-row items-center justify-between min-h-screen bg-gray-900 text-white p-6 md:p-12"
    >

      <div className="max-w-2xl w-full text-center md:text-left">
        <h1 className="text-3xl md:text-4xl font-bold mb-6">AI, Quantum Computing & the Future (2020s - Present)</h1>
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="bg-gray-800 p-6 rounded-lg shadow-lg"
        >
          <ul className="space-y-4 text-lg">
            <li>
              <span className="font-semibold">Artificial Intelligence (AI & Machine Learning):</span> Used in automation, virtual assistants, and decision-making.
            </li>
            <li>
              <span className="font-semibold">Quantum Computing:</span> Still in development but has the potential to solve complex problems beyond classical computers.
            </li>
            <li>
              <span className="font-semibold">5G & Edge Computing:</span> Providing faster data transfer and reducing latency for IoT and real-time applications.
            </li>
          </ul>
        </motion.div>
      </div>

      <div className="w-full md:w-1/3 flex justify-center md:justify-end mt-6 md:mt-0">
        <img 
          src={Image} 
          alt="AI and Quantum Computing" 
          className="rounded-lg shadow-lg w-full max-w-xs sm:max-w-sm md:max-w-md"
        />
      </div>
    </motion.div>
  );
}

export default Section_5;

import React from 'react';
import { motion } from 'framer-motion';
import Image from '../assets/Mac.avif';

function Section_3() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 1 }}
      className="flex flex-col md:flex-row items-center justify-between min-h-screen bg-gray-900 text-white p-6 md:p-12"
    >

      <div className="max-w-2xl w-full text-center md:text-left">
        <h1 className="text-3xl md:text-4xl font-bold mb-6">Personal Computers and the Internet (1980s - 1990s)</h1>
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="bg-gray-800 p-6 rounded-lg shadow-lg"
        >
          <ul className="space-y-4 text-lg">
            <li>
              <span className="font-semibold">Apple Macintosh (1984):</span> Brought user-friendly graphical interfaces to the masses.
            </li>
            <li>
              <span className="font-semibold">Windows OS (1985):</span> Revolutionized personal computing with an accessible operating system.
            </li>
            <li>
              <span className="font-semibold">World Wide Web (1991):</span> Made global communication and information access easy.
            </li>
          </ul>
        </motion.div>
      </div>

      <div className="w-full md:w-1/3 flex justify-center md:justify-end mt-6 md:mt-0">
        <img 
          src={Image}
          alt="Personal Computers and the Internet" 
          className="rounded-lg shadow-lg w-full max-w-xs sm:max-w-sm md:max-w-md"
        />
      </div>
    </motion.div>
  );
}

export default Section_3;

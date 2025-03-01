import React from 'react';
import { motion } from 'framer-motion';
import Image from '../assets/Clous.jpg';

function Section_4() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 1 }}
      className="flex flex-col md:flex-row items-center justify-between min-h-screen bg-gray-900 text-white p-6"
    >
      {/* Image - Left on Desktop, Bottom on Mobile */}
      <div className="w-full md:w-1/3 flex justify-center md:justify-start order-2 md:order-1 md:ml-10">
        <img 
          src={Image} 
          alt="Cloud Computing" 
          className="rounded-lg shadow-lg w-full max-w-xs sm:max-w-sm md:max-w-md"
        />
      </div>

      {/* Text Content - On Top for Mobile, Right for Desktop */}
      <div className="max-w-2xl w-full text-center md:text-left order-1 md:order-2 md:mr-10">
        <h1 className="text-3xl md:text-4xl font-bold mb-6">Mobile & Cloud Computing (2000s - 2010s)</h1>
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="bg-gray-800 p-6 rounded-lg shadow-lg"
        >
          <ul className="space-y-4 text-lg">
            <li>
              <span className="font-semibold">Smartphones (2007, iPhone):</span> Combined computing with mobility, changing how people interact with technology.
            </li>
            <li>
              <span className="font-semibold">Cloud Computing (2010s):</span> Enabled data storage and processing over the internet, reducing dependency on physical hardware.
            </li>
          </ul>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Section_4;

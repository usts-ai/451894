import React from 'react';
import { motion } from 'framer-motion';

interface WinnerTestimonialProps {
  name: string;
  location: string;
  avatar: string;
  watchWon: string;
  testimonial: string;
  date: string;
}

const WinnerTestimonial: React.FC<WinnerTestimonialProps> = ({
  name,
  location,
  avatar,
  watchWon,
  testimonial,
  date
}) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-lg p-6 shadow-lg"
    >
      <div className="flex items-start">
        <img 
          src={avatar} 
          alt={name} 
          className="w-14 h-14 rounded-full object-cover border-2 border-amber-400"
        />
        <div className="ml-4">
          <h3 className="text-white font-bold text-lg">{name}</h3>
          <p className="text-gray-400 text-sm">{location}</p>
          <div className="mt-1 inline-block bg-amber-400/20 text-amber-400 text-xs px-2 py-1 rounded-full">
            {watchWon}
          </div>
        </div>
      </div>
      
      <div className="mt-4">
        <p className="text-gray-300 italic relative">
          <span className="text-amber-400 text-3xl absolute -top-3 -left-2">"</span>
          <span className="ml-4">{testimonial}</span>
          <span className="text-amber-400 text-3xl absolute -bottom-6 right-0">"</span>
        </p>
      </div>
      
      <div className="mt-6 text-right">
        <p className="text-gray-500 text-xs">{date}</p>
      </div>
    </motion.div>
  );
};

export default WinnerTestimonial;

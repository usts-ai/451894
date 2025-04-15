import React from 'react';
import { motion } from 'framer-motion';
import Countdown from './Countdown';

interface ContestCardProps {
  id: number;
  title: string;
  brand: string;
  model: string;
  image: string;
  price: number;
  endDate: Date;
  totalTickets: number;
  remainingTickets: number;
  ticketPrice: number;
}

const ContestCard: React.FC<ContestCardProps> = ({
  id,
  title,
  brand,
  model,
  image,
  price,
  endDate,
  totalTickets,
  remainingTickets,
  ticketPrice
}) => {
  const progress = ((totalTickets - remainingTickets) / totalTickets) * 100;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      whileHover={{ y: -5, boxShadow: '0 10px 25px rgba(0, 0, 0, 0.2)' }}
      className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-lg overflow-hidden flex flex-col"
    >
      <div className="relative">
        <img 
          src={image} 
          alt={`${brand} ${model}`} 
          className="w-full h-64 object-cover object-center" 
        />
        <div className="absolute top-0 left-0 bg-amber-500 text-black font-semibold text-xs py-1 px-3 rounded-br-lg">
          {brand}
        </div>
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
          <h3 className="text-white text-lg font-bold">{title}</h3>
          <p className="text-amber-300 text-sm">{model}</p>
        </div>
      </div>
      
      <div className="p-4 flex-grow flex flex-col">
        <div className="flex justify-between items-center mb-3">
          <div>
            <span className="text-gray-400 text-xs">Valeur</span>
            <p className="text-white font-semibold">{price.toLocaleString('fr-FR')} €</p>
          </div>
          <div>
            <span className="text-gray-400 text-xs">Prix du ticket</span>
            <p className="text-amber-400 font-semibold">{ticketPrice.toLocaleString('fr-FR')} €</p>
          </div>
        </div>
        
        <div className="mb-4">
          <div className="flex justify-between text-xs text-gray-400 mb-1">
            <span>Progression</span>
            <span>{totalTickets - remainingTickets} / {totalTickets} tickets</span>
          </div>
          <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-amber-500 to-amber-300"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
        
        <div className="mb-4">
          <p className="text-gray-400 text-xs mb-2">Fin du concours dans</p>
          <Countdown targetDate={endDate} />
        </div>
        
        <motion.button 
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          className="bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-black font-semibold py-2 px-4 rounded-md w-full mt-auto transition-colors"
        >
          Participer
        </motion.button>
      </div>
    </motion.div>
  );
};

export default ContestCard;

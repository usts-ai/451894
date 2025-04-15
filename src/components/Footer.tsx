import React from 'react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-serif font-bold text-amber-400 mb-4">LuckyHour</h3>
            <p className="text-gray-400 text-sm">
              Tentez votre chance et gagnez des montres de luxe exclusives grâce à notre système de loterie innovant.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-md font-semibold text-amber-200 mb-4">Liens Rapides</h4>
            <ul className="space-y-2 text-sm">
              {['Concours en cours', 'Anciens gagnants', 'Comment ça marche', 'FAQ'].map(item => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-md font-semibold text-amber-200 mb-4">Informations Légales</h4>
            <ul className="space-y-2 text-sm">
              {['Conditions générales', 'Politique de confidentialité', 'Mentions légales', 'Nous contacter'].map(item => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-md font-semibold text-amber-200 mb-4">Newsletter</h4>
            <p className="text-gray-400 text-sm mb-4">
              Inscrivez-vous pour être informé des nouveaux concours et offres exclusives.
            </p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Votre email" 
                className="bg-gray-800 text-sm px-4 py-2 rounded-l-md focus:outline-none focus:ring-1 focus:ring-amber-400 w-full"
              />
              <button className="bg-amber-500 hover:bg-amber-600 transition-colors px-4 py-2 rounded-r-md text-sm">
                S'inscrire
              </button>
            </div>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 pt-6 border-t border-gray-800 text-center text-gray-500 text-xs"
        >
          <p>© {new Date().getFullYear()} LuckyHour. Tous droits réservés. Site à but démonstratif uniquement.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;

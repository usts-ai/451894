import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ContestCard from '../components/ContestCard';
import { contestsMock } from '../data/mockData';

const ContestsPage: React.FC = () => {
  const [filterBrand, setFilterBrand] = useState<string>('');
  const [sortOption, setSortOption] = useState<string>('date');
  
  // Toutes les marques uniques pour le filtre
  const uniqueBrands = Array.from(new Set(contestsMock.map(contest => contest.brand)));
  
  // Filtrer et trier les concours
  const filteredContests = contestsMock.filter(contest => 
    filterBrand === '' || contest.brand === filterBrand
  );
  
  const sortedContests = [...filteredContests].sort((a, b) => {
    switch(sortOption) {
      case 'price-asc':
        return a.price - b.price;
      case 'price-desc':
        return b.price - a.price;
      case 'popular':
        return (b.totalTickets - b.remainingTickets) - (a.totalTickets - a.remainingTickets);
      case 'date':
      default:
        return a.endDate.getTime() - b.endDate.getTime();
    }
  });

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <Navbar />
      
      <section className="pt-28 pb-4 bg-gray-900">
        <div className="container mx-auto px-6">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-serif font-bold mb-2"
          >
            Nos <span className="text-amber-400">concours</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-gray-400"
          >
            Découvrez nos concours en cours et tentez votre chance de gagner une montre de luxe
          </motion.p>
        </div>
      </section>
      
      <section className="py-8 bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-black/50 backdrop-blur-md p-3 rounded-lg"
            >
              <span className="text-gray-400 mr-3">Filtrer par marque:</span>
              <select 
                value={filterBrand}
                onChange={(e) => setFilterBrand(e.target.value)}
                className="bg-gray-800 text-white border border-gray-700 rounded-md px-3 py-1 focus:outline-none focus:ring-1 focus:ring-amber-400"
              >
                <option value="">Toutes les marques</option>
                {uniqueBrands.map(brand => (
                  <option key={brand} value={brand}>{brand}</option>
                ))}
              </select>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-black/50 backdrop-blur-md p-3 rounded-lg"
            >
              <span className="text-gray-400 mr-3">Trier par:</span>
              <select 
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)}
                className="bg-gray-800 text-white border border-gray-700 rounded-md px-3 py-1 focus:outline-none focus:ring-1 focus:ring-amber-400"
              >
                <option value="date">Date (plus proche)</option>
                <option value="price-asc">Prix (croissant)</option>
                <option value="price-desc">Prix (décroissant)</option>
                <option value="popular">Popularité</option>
              </select>
            </motion.div>
          </div>
          
          {sortedContests.length > 0 ? (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {sortedContests.map((contest, index) => (
                <motion.div
                  key={contest.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <ContestCard {...contest} />
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-center py-16"
            >
              <p className="text-gray-400 text-xl">Aucun concours ne correspond à vos critères de recherche.</p>
            </motion.div>
          )}
        </div>
      </section>
      
      <section className="py-16 bg-black">
        <div className="container mx-auto px-6">
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-xl p-8 md:p-12 shadow-xl">
            <div className="flex flex-col md:flex-row items-center">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="md:w-2/3 mb-8 md:mb-0 md:pr-8"
              >
                <h2 className="text-2xl md:text-3xl font-serif font-bold mb-4">
                  <span className="text-amber-400">Nouvelle</span> collection bientôt disponible
                </h2>
                <p className="text-gray-300 mb-6">
                  Nous préparons une nouvelle collection exceptionnelle de montres pour nos prochains concours.
                  Inscrivez-vous à notre newsletter pour être informé dès leur mise en ligne.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <input 
                    type="email" 
                    placeholder="Votre adresse email" 
                    className="bg-gray-800/80 px-4 py-3 rounded-md border border-gray-700 focus:outline-none focus:ring-1 focus:ring-amber-400 w-full sm:w-auto flex-grow"
                  />
                  <motion.button 
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    className="bg-amber-500 hover:bg-amber-600 transition-colors text-black font-semibold px-6 py-3 rounded-md"
                  >
                    S'inscrire
                  </motion.button>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="md:w-1/3"
              >
                <div className="relative">
                  <div className="absolute -top-5 -right-5 bg-amber-400 text-black font-bold text-sm py-1 px-3 rounded-full z-10 shadow-lg">
                    Bientôt
                  </div>
                  <img 
                    src="https://images.unsplash.com/photo-1612917159156-11de681f5b25?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" 
                    alt="Nouvelle collection" 
                    className="rounded-lg shadow-2xl w-full"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-2xl md:text-3xl font-serif font-bold mb-4"
            >
              Questions <span className="text-amber-400">fréquentes</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-gray-400 max-w-3xl mx-auto"
            >
              Tout ce que vous devez savoir sur notre fonctionnement et nos concours.
            </motion.p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            {[
              {
                question: "Comment fonctionne le système de tickets ?",
                answer: "Chaque concours dispose d'un nombre limité de tickets. Vous pouvez acheter autant de tickets que vous le souhaitez pour augmenter vos chances de gagner. Un ticket = une chance de gagner."
              },
              {
                question: "Quelles sont les chances de gagner ?",
                answer: "Vos chances de gagner dépendent du nombre de tickets que vous achetez par rapport au nombre total de tickets disponibles. Par exemple, si vous achetez 10 tickets sur un total de 1000, vos chances sont de 1%."
              },
              {
                question: "Comment êtes-vous sûrs que le tirage est équitable ?",
                answer: "Nous utilisons un générateur de nombres aléatoires certifié et contrôlé par un tiers indépendant. Le processus est entièrement transparent et le tirage est réalisé en direct sur nos réseaux sociaux."
              }
            ].map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="mb-6"
              >
                <details className="group bg-gray-800 rounded-lg">
                  <summary className="flex justify-between items-center font-semibold p-5 cursor-pointer">
                    <span>{item.question}</span>
                    <span className="transition group-open:rotate-180">
                      <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24">
                        <path d="M6 9l6 6 6-6"></path>
                      </svg>
                    </span>
                  </summary>
                  <p className="text-gray-400 px-5 py-3 border-t border-gray-700">
                    {item.answer}
                  </p>
                </details>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default ContestsPage;

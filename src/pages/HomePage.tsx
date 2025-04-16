import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ContestCard from '../components/ContestCard';
import WinnerTestimonial from '../components/WinnerTestimonial';
import { contestsMock, winnersMock, featuresInfo } from '../data/mockData';

const HomePage: React.FC = () => {
  // Afficher les 3 premiers concours seulement
  const featuredContests = contestsMock.slice(0, 3);
  // Sélectionner le premier témoignage pour le mettre en avant
  const featuredWinner = winnersMock[0];

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-32 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60 z-0"></div>
        <div 
          className="absolute top-0 left-0 w-full h-full bg-cover bg-center z-[-1]"
          style={{ 
            backgroundImage: 'url(https://images.unsplash.com/photo-1523170335258-f5ed11844a49?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80)',
            backgroundAttachment: 'fixed'
          }}
        ></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">
              <span className="text-amber-400">La chance</span> au poignet
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Tentez votre chance et gagnez des montres de luxe exceptionnelles pour quelques euros seulement.
            </p>
            <motion.div 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block"
            >
              <Link 
                to="/concours" 
                className="bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-black font-bold py-3 px-8 rounded-full text-lg transition-colors shadow-lg"
              >
                Voir les concours
              </Link>
            </motion.div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
          </motion.div>
        </div>
      </section>
      
      {/* Featured Contests Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl font-serif font-bold mb-4"
            >
              Concours <span className="text-amber-400">en cours</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-gray-400 max-w-2xl mx-auto"
            >
              Parcourez nos concours actuels et tentez votre chance pour gagner la montre de vos rêves. 
              De nouvelles opportunités chaque semaine !
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredContests.map((contest) => (
              <ContestCard key={contest.id} {...contest} />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block"
            >
              <Link 
                to="/concours" 
                className="border-2 border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-black font-semibold py-2 px-6 rounded-full transition-colors"
              >
                Voir tous les concours
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* How It Works Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl font-serif font-bold mb-4"
            >
              Comment ça <span className="text-amber-400">marche</span> ?
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-gray-400 max-w-2xl mx-auto"
            >
              Un processus simple et transparent de l'achat de votre ticket jusqu'à la réception de votre montre en cas de victoire.
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: 1, title: "Choisissez un concours", description: "Parcourez les concours disponibles et sélectionnez celui qui vous intéresse." },
              { step: 2, title: "Achetez des tickets", description: "Plus vous achetez de tickets, plus vous augmentez vos chances de gagner." },
              { step: 3, title: "Attendez le tirage", description: "À la date indiquée, le gagnant est tiré au sort parmi tous les participants." },
              { step: 4, title: "Recevez votre prix", description: "Si vous gagnez, nous vous contactons et organisons la livraison de votre montre." }
            ].map((item, index) => (
              <motion.div 
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-900 p-6 rounded-lg text-center relative"
              >
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-amber-500 text-black font-bold w-8 h-8 rounded-full flex items-center justify-center">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold mt-4 mb-3">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Testimonial Section */}
      <section className="py-20 bg-gray-900 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30 z-0"></div>
        <div 
          className="absolute top-0 left-0 w-full h-full bg-cover bg-center z-[-1] blur-sm"
          style={{ 
            backgroundImage: 'url(https://images.unsplash.com/photo-1511370235399-1802cae1d32f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80)',
            opacity: 0.2
          }}
        ></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl font-serif font-bold mb-4"
            >
              Nos <span className="text-amber-400">gagnants</span> témoignent
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-gray-400 max-w-2xl mx-auto"
            >
              Découvrez l'expérience de nos heureux gagnants et rejoignez la communauté des chanceux de LuckyHour.
            </motion.p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <WinnerTestimonial {...featuredWinner} />
          </div>
          
          <div className="text-center mt-12">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block"
            >
              <Link 
                to="/gagnants" 
                className="border-2 border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-black font-semibold py-2 px-6 rounded-full transition-colors"
              >
                Voir tous les gagnants
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl font-serif font-bold mb-4"
            >
              Pourquoi nous <span className="text-amber-400">choisir</span> ?
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-gray-400 max-w-2xl mx-auto"
            >
              LuckyHour s'engage à offrir une expérience de jeu exceptionnelle avec des standards élevés.
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuresInfo.map((feature, index) => (
              <motion.div 
                key={feature.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-900 p-6 rounded-lg text-center"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-amber-600 to-amber-500">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl text-black font-serif font-bold mb-4"
            >
              Prêt à tenter votre chance ?
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-black/80 max-w-2xl mx-auto mb-8"
            >
              Inscrivez-vous maintenant et participez à nos concours pour avoir une chance de gagner une montre de luxe !
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block"
            >
              <Link 
                to="/inscription" 
                className="bg-black text-white hover:bg-gray-900 font-bold py-3 px-8 rounded-full text-lg transition-colors shadow-lg"
              >
                S'inscrire gratuitement
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default HomePage;

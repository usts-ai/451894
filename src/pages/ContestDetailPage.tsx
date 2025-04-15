import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Countdown from '../components/Countdown';
import { contestsMock } from '../data/mockData';

const ContestDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [ticketQuantity, setTicketQuantity] = useState<number>(1);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  
  // Trouver le concours correspondant à l'ID
  const contest = contestsMock.find(c => c.id === Number(id)) || contestsMock[0]; // Utilise le premier concours par défaut si l'ID n'existe pas
  
  const progress = ((contest.totalTickets - contest.remainingTickets) / contest.totalTickets) * 100;
  
  const handleBuyTickets = () => {
    setIsModalOpen(true);
  };
  
  const handleConfirmPurchase = () => {
    // Simuler un achat réussi
    setTimeout(() => {
      setIsModalOpen(false);
      // Afficher une notification de succès
      alert('Félicitations ! Vos tickets ont été achetés avec succès.');
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <Navbar />
      
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <Link to="/concours" className="text-amber-400 hover:text-amber-300 transition-colors flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
              </svg>
              Retour aux concours
            </Link>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Image et galerie */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-gradient-to-br from-gray-900 to-black rounded-lg overflow-hidden shadow-xl">
                <div className="relative">
                  <img 
                    src={contest.image} 
                    alt={`${contest.brand} ${contest.model}`} 
                    className="w-full h-[400px] object-cover object-center" 
                  />
                  <div className="absolute top-0 left-0 bg-amber-500 text-black font-semibold py-1 px-3 rounded-br-lg">
                    {contest.brand}
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="grid grid-cols-3 gap-3">
                    {/* Images supplémentaires (mockées) */}
                    {[1, 2, 3].map((item) => (
                      <div 
                        key={item} 
                        className="bg-gray-800 rounded-md overflow-hidden cursor-pointer hover:opacity-80 transition-opacity"
                      >
                        <img 
                          src={contest.image} 
                          alt={`Vue ${item}`} 
                          className="w-full h-24 object-cover object-center" 
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Informations détaillées */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-3xl font-serif font-bold mb-2">{contest.title}</h1>
              <p className="text-amber-400 text-xl mb-6">{contest.model}</p>
              
              <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-lg p-6 mb-8">
                <div className="flex justify-between items-center mb-6">
                  <div>
                    <span className="text-gray-400 text-sm">Valeur de la montre</span>
                    <p className="text-white text-2xl font-bold">{contest.price.toLocaleString('fr-FR')} €</p>
                  </div>
                  <div>
                    <span className="text-gray-400 text-sm">Prix du ticket</span>
                    <p className="text-amber-400 text-2xl font-bold">{contest.ticketPrice.toLocaleString('fr-FR')} €</p>
                  </div>
                </div>
                
                <div className="mb-6">
                  <div className="flex justify-between text-sm text-gray-400 mb-2">
                    <span>Progression</span>
                    <span>{contest.totalTickets - contest.remainingTickets} / {contest.totalTickets} tickets</span>
                  </div>
                  <div className="h-3 bg-gray-800 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-amber-600 to-amber-400"
                      style={{ width: `${progress}%` }}
                    ></div>
                  </div>
                  <p className="text-gray-400 text-sm mt-2">
                    {contest.remainingTickets} tickets restants
                  </p>
                </div>
                
                <div className="mb-6">
                  <p className="text-gray-400 text-sm mb-2">Fin du concours dans</p>
                  <Countdown targetDate={contest.endDate} />
                </div>
                
                <div className="mt-8">
                  <div className="flex items-center justify-between mb-4">
                    <label htmlFor="quantity" className="text-gray-300">Nombre de tickets</label>
                    <div className="flex items-center">
                      <motion.button 
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setTicketQuantity(Math.max(1, ticketQuantity - 1))}
                        className="bg-gray-800 hover:bg-gray-700 text-white w-8 h-8 flex items-center justify-center rounded-l-md"
                      >
                        -
                      </motion.button>
                      <input 
                        type="number" 
                        id="quantity"
                        min="1" 
                        max={contest.remainingTickets}
                        value={ticketQuantity} 
                        onChange={(e) => setTicketQuantity(Math.min(contest.remainingTickets, Math.max(1, parseInt(e.target.value) || 1)))}
                        className="bg-gray-800 text-white text-center w-16 h-8 border-x-0 border-y border-gray-700 focus:outline-none"
                      />
                      <motion.button 
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setTicketQuantity(Math.min(contest.remainingTickets, ticketQuantity + 1))}
                        className="bg-gray-800 hover:bg-gray-700 text-white w-8 h-8 flex items-center justify-center rounded-r-md"
                      >
                        +
                      </motion.button>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-gray-300">Total</span>
                    <span className="text-2xl font-bold text-amber-400">
                      {(ticketQuantity * contest.ticketPrice).toLocaleString('fr-FR')} €
                    </span>
                  </div>
                  
                  <motion.button 
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleBuyTickets}
                    className="bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-black font-bold py-3 px-6 rounded-md w-full transition-colors flex items-center justify-center"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                    </svg>
                    Acheter des tickets
                  </motion.button>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-lg p-6">
                <h2 className="text-xl font-semibold mb-4">Détails de la montre</h2>
                <div className="space-y-3 text-gray-300">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Marque</span>
                    <span>{contest.brand}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Modèle</span>
                    <span>{contest.model}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Mouvement</span>
                    <span>Automatique</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Diamètre</span>
                    <span>41mm</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Matériau</span>
                    <span>Acier inoxydable</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Étanchéité</span>
                    <span>100m</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Garantie</span>
                    <span>5 ans</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-16"
          >
            <h2 className="text-2xl font-serif font-semibold mb-6">Description détaillée</h2>
            <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-lg p-6">
              <p className="text-gray-300 leading-relaxed mb-6">
                Découvrez l'élégance et la précision de la {contest.brand} {contest.model}. 
                Cette montre emblématique incarne l'excellence de l'horlogerie suisse, 
                combinant un design intemporel avec une technologie de pointe.
              </p>
              <p className="text-gray-300 leading-relaxed mb-6">
                Dotée d'un mouvement automatique de haute précision, la {contest.model} 
                offre une réserve de marche exceptionnelle et une fiabilité à toute épreuve. 
                Son boîtier en acier inoxydable de qualité supérieure assure durabilité et élégance, 
                tandis que son verre saphir résistant aux rayures protège le cadran finement travaillé.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Que ce soit pour une occasion spéciale ou pour le quotidien, 
                cette montre de luxe est conçue pour impressionner. 
                Livrée dans son écrin d'origine avec tous les documents d'authenticité, 
                elle représente non seulement un accessoire de style mais aussi un investissement durable.
              </p>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-16"
          >
            <h2 className="text-2xl font-serif font-semibold mb-6">Comment participer</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { 
                  step: 1, 
                  title: "Achetez des tickets", 
                  description: "Sélectionnez le nombre de tickets que vous souhaitez acheter. Plus vous achetez de tickets, plus vous augmentez vos chances de gagner.",
                  icon: "🎟️"
                },
                { 
                  step: 2, 
                  title: "Entrez vos informations", 
                  description: "Renseignez vos coordonnées et procédez au paiement sécurisé via notre passerelle de paiement Checkout.com.",
                  icon: "🔒"
                },
                { 
                  step: 3, 
                  title: "Croisez les doigts", 
                  description: "Attendez le tirage au sort. Si vous gagnez, nous vous contacterons immédiatement pour organiser la livraison de votre montre.",
                  icon: "🤞"
                }
              ].map((item) => (
                <div 
                  key={item.step}
                  className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-lg p-6 text-center"
                >
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-400">{item.description}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Modal d'achat de tickets */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="bg-gray-900 rounded-lg max-w-md w-full p-6"
          >
            <h2 className="text-2xl font-semibold mb-4">Confirmer votre achat</h2>
            <div className="mb-6">
              <p className="text-gray-300 mb-4">Vous êtes sur le point d'acheter {ticketQuantity} ticket{ticketQuantity > 1 ? 's' : ''} pour le concours :</p>
              <div className="bg-gray-800 p-4 rounded-lg mb-4">
                <div className="flex items-center">
                  <img 
                    src={contest.image} 
                    alt={contest.title} 
                    className="w-16 h-16 object-cover rounded-md mr-4" 
                  />
                  <div>
                    <h3 className="font-semibold">{contest.title}</h3>
                    <p className="text-amber-400 text-sm">{contest.model}</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-800 p-4 rounded-lg">
                <div className="flex justify-between mb-2">
                  <span className="text-gray-400">{ticketQuantity} ticket{ticketQuantity > 1 ? 's' : ''} x {contest.ticketPrice.toLocaleString('fr-FR')} €</span>
                  <span>{(ticketQuantity * contest.ticketPrice).toLocaleString('fr-FR')} €</span>
                </div>
                <div className="flex justify-between font-semibold">
                  <span>Total</span>
                  <span className="text-amber-400">{(ticketQuantity * contest.ticketPrice).toLocaleString('fr-FR')} €</span>
                </div>
              </div>
            </div>
            
            <div className="flex gap-4">
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setIsModalOpen(false)}
                className="bg-gray-800 hover:bg-gray-700 text-white py-2 px-4 rounded-md w-1/2 transition-colors"
              >
                Annuler
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleConfirmPurchase}
                className="bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-black font-bold py-2 px-4 rounded-md w-1/2 transition-colors"
              >
                Confirmer
              </motion.button>
            </div>
          </motion.div>
        </div>
      )}
      
      <Footer />
    </div>
  );
};

export default ContestDetailPage;

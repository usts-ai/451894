export const contestsMock = [
  {
    id: 1,
    title: "Rolex Submariner Date",
    brand: "Rolex",
    model: "Submariner Date 126610LN",
    image: "https://images.unsplash.com/photo-1547996160-81dfa63595aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600",
    price: 11600,
    endDate: new Date("2025-06-15T23:59:59"),
    totalTickets: 1000,
    remainingTickets: 245,
    ticketPrice: 15.99
  },
  {
    id: 2,
    title: "Omega Speedmaster Moonwatch",
    brand: "Omega",
    model: "Speedmaster Professional",
    image: "https://images.unsplash.com/photo-1615387000571-bdcfe92eb67c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600",
    price: 7200,
    endDate: new Date("2025-05-30T23:59:59"),
    totalTickets: 800,
    remainingTickets: 92,
    ticketPrice: 12.49
  },
  {
    id: 3,
    title: "Patek Philippe Nautilus",
    brand: "Patek Philippe",
    model: "Nautilus 5711/1A-010",
    image: "https://images.unsplash.com/photo-1623998021761-498b72cc42ed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600",
    price: 35000,
    endDate: new Date("2025-07-10T23:59:59"),
    totalTickets: 1500,
    remainingTickets: 980,
    ticketPrice: 29.99
  },
  {
    id: 4,
    title: "Audemars Piguet Royal Oak",
    brand: "Audemars Piguet",
    model: "Royal Oak 15500ST",
    image: "https://images.unsplash.com/photo-1620625515032-6ed0c1790c75?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600",
    price: 28000,
    endDate: new Date("2025-06-05T23:59:59"),
    totalTickets: 1200,
    remainingTickets: 536,
    ticketPrice: 25.99
  },
  {
    id: 5,
    title: "TAG Heuer Carrera",
    brand: "TAG Heuer",
    model: "Carrera Calibre Heuer 02",
    image: "https://images.unsplash.com/photo-1623998021782-85cd95f91361?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600",
    price: 5400,
    endDate: new Date("2025-05-20T23:59:59"),
    totalTickets: 700,
    remainingTickets: 125,
    ticketPrice: 9.99
  },
  {
    id: 6,
    title: "Jaeger-LeCoultre Reverso",
    brand: "Jaeger-LeCoultre",
    model: "Reverso Classic Medium",
    image: "https://images.unsplash.com/photo-1623998021776-219b28a93e04?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600",
    price: 9200,
    endDate: new Date("2025-07-25T23:59:59"),
    totalTickets: 850,
    remainingTickets: 680,
    ticketPrice: 13.99
  }
];

export const winnersMock = [
  {
    id: 1,
    name: "Thomas Dubois",
    location: "Lyon, France",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    watchWon: "Rolex Daytona",
    testimonial: "Je n'en croyais pas mes yeux quand j'ai reçu l'email m'annonçant que j'avais gagné ! Le processus de livraison a été incroyablement professionnel, et ma nouvelle Rolex est absolument magnifique. Merci LuckyHour pour cette opportunité incroyable !",
    date: "12 mars 2025"
  },
  {
    id: 2,
    name: "Marie Lefevre",
    location: "Bordeaux, France",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    watchWon: "Omega Seamaster",
    testimonial: "J'avais acheté un ticket sur un coup de tête pour faire plaisir à mon mari qui adore les montres. Quelle surprise lorsque j'ai gagné ! Son visage quand il a ouvert la boîte était inestimable. Une expérience que nous n'oublierons jamais.",
    date: "28 février 2025"
  },
  {
    id: 3,
    name: "Laurent Martin",
    location: "Paris, France",
    avatar: "https://randomuser.me/api/portraits/men/64.jpg",
    watchWon: "Patek Philippe Calatrava",
    testimonial: "En tant que passionné d'horlogerie, je collectionnais les montres depuis des années, mais je n'aurais jamais pu m'offrir une Patek Philippe. Grâce à LuckyHour, j'ai maintenant dans ma collection une pièce dont je n'aurais jamais osé rêver. Le service client a été exemplaire du début à la fin.",
    date: "15 janvier 2025"
  }
];

export const featuresInfo = [
  {
    id: 1,
    title: "Tirages Équitables",
    description: "Notre système de tirage au sort utilise un générateur de nombres aléatoires certifié pour garantir une équité parfaite à tous les participants.",
    icon: "🎲"
  },
  {
    id: 2,
    title: "Montres Authentiques",
    description: "Toutes nos montres sont achetées auprès de revendeurs officiels et livrées avec leur certification d'authenticité et leur garantie d'origine.",
    icon: "✅"
  },
  {
    id: 3,
    title: "Livraison Sécurisée",
    description: "Nous utilisons des services de livraison premium avec assurance complète et suivi en temps réel pour une tranquillité d'esprit totale.",
    icon: "🔒"
  },
  {
    id: 4,
    title: "Support Réactif",
    description: "Notre équipe de support client est disponible 7j/7 pour répondre à toutes vos questions et vous accompagner tout au long du processus.",
    icon: "💬"
  }
];

export const faqMock = [
  {
    question: "Comment fonctionne la loterie LuckyHour ?",
    answer: "LuckyHour est une loterie en ligne qui vous permet de gagner des montres de luxe. Vous achetez des tickets pour participer à un tirage au sort. Une fois tous les tickets vendus ou la date limite atteinte, un gagnant est tiré au sort parmi tous les participants."
  },
  {
    question: "Comment puis-je savoir si j'ai gagné ?",
    answer: "Les gagnants sont notifiés par email et par téléphone immédiatement après le tirage au sort. La liste des gagnants est également publiée sur notre site web dans la section 'Anciens Gagnants'."
  },
  {
    question: "Les montres sont-elles authentiques ?",
    answer: "Absolument ! Toutes nos montres sont achetées auprès de détaillants officiels autorisés et sont livrées avec tous les documents d'authenticité, la boîte d'origine et la garantie du fabricant."
  },
  {
    question: "Comment se déroule la livraison si je gagne ?",
    answer: "Nous organisons la livraison de votre montre par un service sécurisé et assuré. Selon votre localisation, la livraison peut prendre entre 1 et 5 jours ouvrables après la vérification de votre identité."
  },
  {
    question: "Que se passe-t-il si tous les tickets ne sont pas vendus ?",
    answer: "Si tous les tickets ne sont pas vendus avant la date limite, le tirage au sort a quand même lieu avec les participants inscrits. Cela augmente vos chances de gagner !"
  }
];

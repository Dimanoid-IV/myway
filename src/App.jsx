import React, { useState } from 'react';
import { Rocket, Star, ShieldCheck, Zap, Globe, Menu, X, ArrowRight, ExternalLink, Newspaper } from 'lucide-react';

const TicketCard = ({ type, price, originalPrice, features, highlight = false }) => (
  <div className={`relative p-8 rounded-2xl glass-card transition-all duration-300 hover:scale-105 hover:border-purple-500/50 ${highlight ? 'border-purple-500 border-2 shadow-[0_0_30px_rgba(124,58,237,0.3)]' : ''}`}>
    {highlight && (
      <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-purple-600 text-white px-4 py-1 rounded-full text-sm font-bold tracking-wider uppercase">
        Most Popular
      </div>
    )}
    <h3 className="text-2xl font-bold mb-2">{type}</h3>
    <div className="flex items-baseline gap-2 mb-6">
      <span className="text-4xl font-extrabold text-white">${price}</span>
      {originalPrice && (
        <span className="text-lg text-gray-500 line-through">${originalPrice}</span>
      )}
    </div>
    <ul className="space-y-4 mb-8">
      {features.map((feature, i) => (
        <li key={i} className="flex items-center gap-3 text-gray-300">
          <ShieldCheck className="w-5 h-5 text-purple-400 shrink-0" />
          <span>{feature}</span>
        </li>
      ))}
    </ul>
    <button className={`w-full py-3 rounded-xl font-bold transition-all ${highlight ? 'bg-purple-600 hover:bg-purple-700 text-white shadow-lg shadow-purple-600/20' : 'bg-white/10 hover:bg-white/20 text-white border border-white/20'}`}>
      Book This Voyage
    </button>
  </div>
);

function App() {
  const [lightboxImage, setLightboxImage] = useState(null);

  const tickets = [
    {
      type: "Economy Orbit",
      price: 10,
      features: ["Low-Earth Orbit", "Standard Bio-Pod", "Shared Oxygen Supply", "Arrival at Sky-Station"],
    },
    {
      type: "Business Galaxy",
      price: 15,
      originalPrice: 20,
      highlight: true,
      features: ["Lunar Fly-by", "Private Sleeping Pod", "Synthetic Meals Included", "20kg Cosmic Luggage"],
    },
    {
      type: "Alien VIP",
      price: 25,
      originalPrice: 35,
      features: ["Interstellar Gateway", "Alien Interaction Lounge", "Zero-G Spa Access", "Personal Translator Droid"],
    },
    {
      type: "One-Way Ticket",
      price: 30,
      originalPrice: 45,
      features: ["To the Unknown", "Deep Sleep Chamber", "Legacy Archive Storage", "Final Earth-View Gala"],
    },
  ];

  return (
    <div className="min-h-screen w-full bg-[#050505] text-white selection:bg-purple-500/30 overflow-x-hidden">
      {/* Starry Background Effect */}
      <div className="fixed inset-0 pointer-events-none star-background opacity-40"></div>
      
      {/* Lightbox Modal */}
      {lightboxImage && (
        <div 
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 cursor-pointer animate-fade-in"
          onClick={() => setLightboxImage(null)}
        >
          <div className="relative max-w-7xl max-h-[90vh] w-full">
            <img 
              src={lightboxImage} 
              alt="Full size" 
              className="w-full h-full object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
            <button 
              className="absolute top-4 right-4 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm transition-all"
              onClick={() => setLightboxImage(null)}
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>
      )}
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 px-6 py-6 border-b border-white/5 backdrop-blur-md">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Rocket className="w-8 h-8 text-purple-500" />
            <span className="text-xl font-bold tracking-tight glow-text">mywayto.space</span>
          </div>
          <div className="hidden md:flex gap-8 items-center text-sm font-medium text-gray-400">
            <a href="#" className="hover:text-white transition-colors">Fleet</a>
            <a href="#" className="hover:text-white transition-colors">Destinations</a>
            <a href="#" className="hover:text-white transition-colors">Experience</a>
            <button className="bg-white/5 border border-white/10 px-5 py-2 rounded-full hover:bg-white/10 transition-all">
              Login
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="relative pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-medium mb-8 animate-fade-in">
            <Star className="w-4 h-4 fill-purple-400" />
            <span>Next Flight: 2026</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-black mb-6 tracking-tight leading-tight">
            LEAVE THE <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 glow-text">EARTH</span> <br />
            BEHIND.
          </h1>
          <p className="max-w-2xl mx-auto text-gray-400 text-lg md:text-xl mb-4">
            Secure your passage on the most advanced alien spacecraft. Reliable interstellar travel for the bold explorers of tomorrow.
          </p>
          <p className="max-w-2xl mx-auto text-red-400/80 text-base md:text-lg mb-12 italic">
            Return to Earth not guaranteed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-purple-600 hover:bg-purple-700 rounded-full font-bold text-lg shadow-xl shadow-purple-600/20 transition-all flex items-center justify-center gap-2">
              Book Passage <ArrowRight className="w-5 h-5" />
            </button>
            <button className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full font-bold text-lg transition-all">
              View Fleet
            </button>
          </div>
        </div>

        {/* Gallery Section */}
        <section className="max-w-5xl mx-auto py-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">As Prophesied</h2>
            <p className="text-gray-400 text-lg">Ancient visions become reality</p>
          </div>
          
          {/* Compact Gallery */}
          <div className="grid grid-cols-3 gap-3 md:gap-4 px-6 mb-12">
            <div 
              className="group relative overflow-hidden rounded-xl glass-card cursor-pointer h-48 md:h-64"
              onClick={() => setLightboxImage('/vang1.png')}
            >
              <img 
                src="/vang1.png" 
                alt="Baba Vanga Prophecy 1" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-white font-bold text-sm md:text-base">Click to expand</div>
              </div>
            </div>
            
            <div 
              className="group relative overflow-hidden rounded-xl glass-card cursor-pointer h-48 md:h-64"
              onClick={() => setLightboxImage('/vang2.png')}
            >
              <img 
                src="/vang2.png" 
                alt="Baba Vanga Prophecy 2" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/60 to-transparent opacity-60 group-hover:opacity-30 transition-opacity"></div>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-white font-bold text-sm md:text-base">Click to expand</div>
              </div>
            </div>
            
            <div 
              className="group relative overflow-hidden rounded-xl glass-card cursor-pointer h-48 md:h-64"
              onClick={() => setLightboxImage('/vang3.png')}
            >
              <img 
                src="/vang3.png" 
                alt="Baba Vanga Prophecy 3" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-pink-900/60 to-transparent opacity-60 group-hover:opacity-30 transition-opacity"></div>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-white font-bold text-sm md:text-base">Click to expand</div>
              </div>
            </div>
          </div>

          {/* News Sources */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center px-6">
            <a 
              href="https://nypost.com/2026/01/08/lifestyle/clairvoyant-baba-vanga-predicted-alien-spaceship-would-enter-earths-atmosphere-and-outbreak-of-wwiii-for-2026/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 px-8 py-4 rounded-xl glass-card hover:border-purple-500/50 transition-all duration-300 hover:scale-105 w-full sm:w-auto"
            >
              <Newspaper className="w-6 h-6 text-purple-400 group-hover:text-purple-300" />
              <div className="flex-1">
                <div className="text-sm text-gray-500 uppercase tracking-wide">Featured in</div>
                <div className="font-bold text-white group-hover:text-purple-300 transition-colors">New York Post</div>
              </div>
              <ExternalLink className="w-5 h-5 text-gray-500 group-hover:text-purple-400 transition-colors" />
            </a>
            
            <a 
              href="https://www.mirror.co.uk/news/weird-news/massive-alien-ship-enter-earths-36500431"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 px-8 py-4 rounded-xl glass-card hover:border-purple-500/50 transition-all duration-300 hover:scale-105 w-full sm:w-auto"
            >
              <Newspaper className="w-6 h-6 text-purple-400 group-hover:text-purple-300" />
              <div className="flex-1">
                <div className="text-sm text-gray-500 uppercase tracking-wide">Featured in</div>
                <div className="font-bold text-white group-hover:text-purple-300 transition-colors">The Mirror News</div>
              </div>
              <ExternalLink className="w-5 h-5 text-gray-500 group-hover:text-purple-400 transition-colors" />
            </a>
          </div>
        </section>

        {/* Pricing/Tickets Section */}
        <section id="tickets" className="max-w-7xl mx-auto py-32">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Choose Your Voyage</h2>
            <p className="text-gray-400">Affordable access to the stars. Limited seats per jump.</p>
          </div>
          <div className="overflow-x-auto pb-4 px-6 -mx-6 md:px-0 md:mx-0">
            <div className="flex md:grid md:grid-cols-2 lg:grid-cols-4 gap-8 min-w-max md:min-w-0">
              {tickets.map((ticket, index) => (
                <div key={index} className="w-[280px] md:w-auto flex-shrink-0">
                  <TicketCard {...ticket} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="max-w-7xl mx-auto py-20 border-t border-white/5">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="space-y-4">
              <Zap className="w-10 h-10 text-yellow-500" />
              <h3 className="text-xl font-bold">Warp Speed</h3>
              <p className="text-gray-400 text-sm">Our craft use zero-point energy to reach your destination faster than the speed of light.</p>
            </div>
            <div className="space-y-4">
              <Globe className="w-10 h-10 text-blue-500" />
              <h3 className="text-xl font-bold">Earth Safe</h3>
              <p className="text-gray-400 text-sm">We leave zero carbon footprint on Earth's atmosphere during departure and reentry.</p>
            </div>
            <div className="space-y-4">
              <ShieldCheck className="w-10 h-10 text-green-500" />
              <h3 className="text-xl font-bold">Alien Crew</h3>
              <p className="text-gray-400 text-sm">Expertly trained extraterrestrial staff to ensure your journey is safe and comfortable.</p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <Rocket className="w-6 h-6 text-purple-500" />
            <span className="text-lg font-bold tracking-tight">mywayto.space</span>
          </div>
          <p className="text-gray-500 text-sm">© 2026 Interstellar Travel Agency. All rights reserved.</p>
          <div className="flex gap-6 text-gray-500 text-sm">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

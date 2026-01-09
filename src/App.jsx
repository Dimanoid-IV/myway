import React from 'react';
import { Rocket, Star, ShieldCheck, Zap, Globe, Menu, X, ArrowRight } from 'lucide-react';

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
  const tickets = [
    {
      type: "Economy Orbit",
      price: 10,
      features: ["Low-Earth Orbit", "Standard Bio-Pod", "Shared Oxygen Supply", "Arrival at Sky-Station"],
    },
    {
      type: "Business Galaxy",
      price: 45,
      originalPrice: 65,
      highlight: true,
      features: ["Lunar Fly-by", "Private Sleeping Pod", "Synthetic Meals Included", "20kg Cosmic Luggage"],
    },
    {
      type: "Alien VIP",
      price: 120,
      originalPrice: 180,
      features: ["Interstellar Gateway", "Alien Interaction Lounge", "Zero-G Spa Access", "Personal Translator Droid"],
    },
    {
      type: "One-Way Ticket",
      price: 300,
      originalPrice: 500,
      features: ["To the Unknown", "Deep Sleep Chamber", "Legacy Archive Storage", "Final Earth-View Gala"],
    },
  ];

  return (
    <div className="min-h-screen w-full bg-[#050505] text-white selection:bg-purple-500/30 overflow-x-hidden">
      {/* Starry Background Effect */}
      <div className="fixed inset-0 pointer-events-none star-background opacity-40"></div>
      
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
            <span>Next Departure: 23:40 GMT-X</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-black mb-6 tracking-tight leading-tight">
            LEAVE THE <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 glow-text">EARTH</span> <br />
            BEHIND.
          </h1>
          <p className="max-w-2xl mx-auto text-gray-400 text-lg md:text-xl mb-12">
            Secure your passage on the most advanced alien spacecraft. Reliable interstellar travel for the bold explorers of tomorrow.
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

        {/* Pricing/Tickets Section */}
        <section id="tickets" className="max-w-7xl mx-auto py-32">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Choose Your Voyage</h2>
            <p className="text-gray-400">Affordable access to the stars. Limited seats per jump.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {tickets.map((ticket, index) => (
              <TicketCard key={index} {...ticket} />
            ))}
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

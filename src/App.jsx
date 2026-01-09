import React, { useState, useEffect } from 'react';
import { Rocket, Star, ShieldCheck, Zap, Globe, Menu, X, ArrowRight, ExternalLink, Newspaper, FileText } from 'lucide-react';

const TicketCard = ({ type, price, originalPrice, features, highlight = false }) => (
  <div className={`relative pt-8 pb-8 px-8 rounded-2xl glass-card transition-all duration-300 hover:scale-105 hover:border-purple-500/50 ${highlight ? 'border-purple-500 border-2 shadow-[0_0_30px_rgba(124,58,237,0.3)]' : ''}`}>
    {highlight && (
      <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-purple-600 text-white px-4 py-1.5 rounded-full text-sm font-bold tracking-wider uppercase whitespace-nowrap">
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
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Auto-scroll to highlighted card on mobile
  useEffect(() => {
    if (window.innerWidth < 768) {
      const highlightedIndex = tickets.findIndex(t => t.highlight);
      if (highlightedIndex !== -1) {
        setTimeout(() => {
          const container = document.querySelector('#tickets .overflow-x-auto');
          if (container) {
            const cardWidth = 280 + 32; // card width + gap
            const scrollPosition = highlightedIndex * cardWidth - (window.innerWidth / 2 - 140);
            container.scrollTo({ left: Math.max(0, scrollPosition), behavior: 'smooth' });
          }
        }, 100);
      }
    }
  }, []);

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
      <div className="fixed inset-0 pointer-events-none star-background opacity-60"></div>
      
      {/* Lightbox Modal */}
      {lightboxImage && (
        <div 
          className="fixed inset-0 z-[100] bg-black/95 flex items-start justify-center overflow-y-auto cursor-pointer animate-fade-in"
          onClick={() => setLightboxImage(null)}
        >
          <div className="relative w-full max-w-7xl p-4 my-8">
            <img 
              src={lightboxImage} 
              alt="Full size" 
              className="w-full h-auto rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
            <button 
              className="sticky top-4 float-right -mt-16 mr-4 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm transition-all z-10"
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
        {/* Spiral Galaxy Background */}
        <div 
          className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0"
          style={{
            transform: `translate(-50%, -50%) scale(${1 + scrollY * 0.005})`,
            opacity: Math.max(0, 1 - scrollY * 0.0015),
          }}
        >
          <div className="galaxy-spiral"></div>
        </div>

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-medium mb-8 animate-fade-in">
            <Star className="w-4 h-4 fill-purple-400" />
            <span>Next Flight: 2026</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-black mb-6 tracking-tight leading-tight">
            LEAVE THE <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 glow-text">EARTH</span> <br />
            BEHIND
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
              onClick={() => setLightboxImage('https://i.ibb.co/1fByWDWv/vang1.png')}
            >
              <img 
                src="https://i.ibb.co/1fByWDWv/vang1.png" 
                alt="Baba Vanga Prophecy 1" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-white font-bold text-sm md:text-base">Click to expand</div>
              </div>
            </div>
            
            <div 
              className="group relative overflow-hidden rounded-xl glass-card cursor-pointer h-48 md:h-64"
              onClick={() => setLightboxImage('https://i.ibb.co/rGMh3Nn9/vang2.png')}
            >
              <img 
                src="https://i.ibb.co/rGMh3Nn9/vang2.png" 
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
              onClick={() => setLightboxImage('https://i.ibb.co/KcD0hbj1/vang3.png')}
            >
              <img 
                src="https://i.ibb.co/KcD0hbj1/vang3.png" 
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
        <section id="tickets" className="max-w-7xl mx-auto pt-32 pb-16">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold mb-4">Choose Your Voyage</h2>
            <p className="text-gray-400">Affordable access to the stars. Limited seats per jump.</p>
          </div>
          <div className="overflow-x-auto pb-4 px-6 -mx-6 md:px-0 md:mx-0 scroll-smooth snap-x snap-mandatory md:snap-none">
            <div className="flex md:grid md:grid-cols-2 lg:grid-cols-4 gap-8 min-w-max md:min-w-0 pt-6">
              {tickets.map((ticket, index) => (
                <div key={index} className={`w-[280px] md:w-auto flex-shrink-0 snap-center ${ticket.highlight ? 'md:snap-align-none' : ''}`}>
                  <TicketCard {...ticket} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Terms & Conditions Section */}
        <section className="max-w-5xl mx-auto pb-20 px-6">
          <div className="glass-card rounded-2xl p-8 md:p-12">
            <div className="flex items-center gap-3 mb-8">
              <FileText className="w-8 h-8 text-purple-400" />
              <h2 className="text-3xl md:text-4xl font-bold">Terms & Conditions</h2>
            </div>
            
            <div className="space-y-8 text-gray-300">
              <div>
                <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                  <span className="text-purple-400">1️⃣</span> Ticket Purchase
                </h3>
                <ul className="space-y-2 text-sm md:text-base leading-relaxed">
                  <li>• All tickets are purchased online through our website.</li>
                  <li>• Payment is made in Earth currency (or galactic credits — if you prefer).</li>
                  <li>• After a successful payment, the ticket is sent to your email as a PDF file.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                  <span className="text-purple-400">2️⃣</span> Ticket
                </h3>
                <ul className="space-y-2 text-sm md:text-base leading-relaxed">
                  <li>• The PDF ticket is the only confirmation of your seat on the alien spaceship.</li>
                  <li>• It can be printed on a standard printer or displayed on a screen.</li>
                  <li>• Each ticket has a unique QR code, which is scanned by the crew upon boarding.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                  <span className="text-purple-400">3️⃣</span> Age and Medical Restrictions
                </h3>
                <ul className="space-y-2 text-sm md:text-base leading-relaxed">
                  <li>• Minimum passenger age: 3 years old (passengers over 100 years old are allowed only with crew approval).</li>
                  <li>• Pregnant passengers are allowed only in Zero Gravity Class and at their own risk.</li>
                  <li>• Allergies to anti-gravity or teleportation: please inform the crew in advance.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                  <span className="text-purple-400">4️⃣</span> Flights
                </h3>
                <ul className="space-y-2 text-sm md:text-base leading-relaxed">
                  <li>• Flight times and routes may be changed without notice at the discretion of the alien captain.</li>
                  <li>• <span className="text-red-400 font-semibold">Return to Earth is not guaranteed</span> for tickets of any class.</li>
                  <li>• Passengers must follow the crew's instructions and must not attempt to hijack the spaceship.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                  <span className="text-purple-400">5️⃣</span> Cancellation and Refunds
                </h3>
                <ul className="space-y-2 text-sm md:text-base leading-relaxed">
                  <li>• <span className="text-yellow-400 font-semibold">Refunds are not available. Money is non-refundable.</span></li>
                  <li>• Passengers must be prepared for the adventure before purchasing a ticket.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                  <span className="text-purple-400">6️⃣</span> Copyright and Liability
                </h3>
                <ul className="space-y-2 text-sm md:text-base leading-relaxed">
                  <li>• All images and texts on the website and tickets are protected by the laws of Earth and the Galaxy.</li>
                  <li>• We are not responsible for:
                    <ul className="ml-6 mt-2 space-y-1">
                      <li>— encounters with aliens;</li>
                      <li>— turning into an asteroid;</li>
                      <li>— accidental teleportation to another planet.</li>
                    </ul>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                  <span className="text-purple-400">7️⃣</span> Special Conditions
                </h3>
                <ul className="space-y-2 text-sm md:text-base leading-relaxed">
                  <li>• Each ticket grants the right to smiles, joy, and an unforgettable space adventure.</li>
                  <li>• Please enjoy your flight and don't forget to take a selfie with the alien crew. 📸✨</li>
                </ul>
              </div>
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

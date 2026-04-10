import React from 'react';
import { ArrowRight, MapPin } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-orange-50">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Main Copy */}
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-spicy-100 border border-spicy-200 text-spicy-900 text-sm font-bold mb-6">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-spicy-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-spicy-500"></span>
              </span>
              The Spice Capital of India
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight text-slate-900 leading-tight mb-6">
              Taste the Fire of <span className="text-transparent bg-clip-text bg-gradient-to-r from-spicy-500 to-spicy-800">Andhra</span>
            </h1>
            
            <p className="text-lg lg:text-xl text-slate-700 mb-8 leading-relaxed font-medium">
              From the iconic Guntur Biryani to coastal Godavari seafood. Step into our doors and experience the most authentic, mouth-watering Telugu dining experience.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#dishes" className="inline-flex justify-center items-center gap-2 px-8 py-4 bg-spicy-600 text-white font-bold rounded-full shadow-xl shadow-spicy-500/30 hover:bg-spicy-500 transition-all duration-300 transform hover:-translate-y-1">
                View Menu <ArrowRight className="w-5 h-5" />
              </a>
              <a href="#about" className="inline-flex justify-center items-center gap-2 px-8 py-4 bg-white text-slate-800 font-bold rounded-full border-2 border-slate-200 hover:border-spicy-500 hover:text-spicy-600 transition-colors duration-300">
                Reserve a Table
              </a>
            </div>
            
            {/* Trust markers */}
            <div className="mt-12 pt-8 border-t border-slate-200 flex items-center gap-8">
              <div className="flex -space-x-4">
                <img className="w-12 h-12 rounded-full border-4 border-orange-50 object-cover" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=100&q=80" alt="Foodie 1" />
                <img className="w-12 h-12 rounded-full border-4 border-orange-50 object-cover" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=100&q=80" alt="Foodie 2" />
                <img className="w-12 h-12 rounded-full border-4 border-orange-50 object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80" alt="Foodie 3" />
                <div className="w-12 h-12 rounded-full border-4 border-orange-50 bg-slate-100 flex items-center justify-center text-xs font-bold text-slate-600">
                  +10k
                </div>
              </div>
              <div className="text-sm font-semibold text-slate-600">
                Trusted by thousands of <br/>food lovers every day
              </div>
            </div>
          </div>

          {/* Visual Elements */}
          <div className="relative mt-10 lg:mt-0">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/5] lg:aspect-square">
              <img src="https://images.unsplash.com/photo-1589302168068-964664d93cb0?auto=format&fit=crop&q=80&w=800" alt="Authentic Biryani" className="object-cover w-full h-full" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
              
              <div className="absolute bottom-8 left-8 right-8">
                <div className="bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-xl flex items-center gap-4">
                  <div className="bg-leaf-100 p-3 rounded-xl">
                    <MapPin className="text-leaf-600 w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-slate-900">Locating...</div>
                    <div className="text-xs font-semibold text-slate-500">Vijayawada, Benz Circle</div>
                  </div>
                  <div className="ml-auto text-spicy-600 font-bold text-sm">
                    Open Now
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Hero;

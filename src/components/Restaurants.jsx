import React from 'react';
import { Star, MapPin, Navigation } from 'lucide-react';

const restaurants = [
  {
    name: "Subbayya Gari Hotel",
    type: "Authentic Veg Meals",
    location: "Kakinada & Output",
    rating: 4.8,
    reviews: "5.2k",
    img: "/@fs/C:/Users/salac/.gemini/antigravity/brain/df7e4c73-1cd7-4e5d-ab17-eb74c411be8a/restaurant_exterior_1775802137905.png",
    specialty: "Butta Bhojanam"
  },
  {
    name: "Sri Kanya Comfort",
    type: "Non-Veg Paradise",
    location: "Visakhapatnam",
    rating: 4.6,
    reviews: "8.4k",
    img: "/@fs/C:/Users/salac/.gemini/antigravity/brain/df7e4c73-1cd7-4e5d-ab17-eb74c411be8a/restaurant_exterior_1775802137905.png",
    specialty: "Chicken Fry Piece Biryani"
  },
  {
    name: "Kritunga Restaurant",
    type: "Rayalaseema Spicy",
    location: "Hyderabad & Kurnool",
    rating: 4.5,
    reviews: "12k",
    img: "/@fs/C:/Users/salac/.gemini/antigravity/brain/df7e4c73-1cd7-4e5d-ab17-eb74c411be8a/restaurant_exterior_1775802137905.png",
    specialty: "Natu Kodi Pulusu"
  },
  {
    name: "Bawarchi",
    type: "Mughlai & Biryani",
    location: "RTC X Roads, Hyd",
    rating: 4.9,
    reviews: "45k",
    img: "/@fs/C:/Users/salac/.gemini/antigravity/brain/df7e4c73-1cd7-4e5d-ab17-eb74c411be8a/restaurant_exterior_1775802137905.png",
    specialty: "Mutton Dum Biryani"
  }
];

const Restaurants = () => {
  return (
    <section id="restaurants" className="py-24 bg-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-sm font-black text-spicy-600 tracking-wider uppercase mb-3">Where to Eat</h2>
            <h3 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">Top Rated Local Spots</h3>
          </div>
          <button className="px-6 py-3 bg-white text-slate-900 font-bold border-2 border-slate-200 rounded-full hover:border-spicy-500 hover:text-spicy-600 transition-colors">
            View Map
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {restaurants.map((restaurant, idx) => (
            <div key={idx} className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300 flex flex-col sm:flex-row">
              <div className="sm:w-2/5 h-64 sm:h-auto relative">
                <img src={restaurant.img} alt={restaurant.name} className="w-full h-full object-cover" />
              </div>
              <div className="p-8 sm:w-3/5 flex flex-col justify-center">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h4 className="text-2xl font-bold text-slate-900 mb-1">{restaurant.name}</h4>
                    <p className="text-sm font-semibold text-spicy-600">{restaurant.type}</p>
                  </div>
                  <div className="flex flex-col items-end">
                    <div className="flex items-center gap-1 bg-leaf-50 text-leaf-600 px-2 py-1 rounded-lg">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="font-bold text-sm">{restaurant.rating}</span>
                    </div>
                    <span className="text-xs text-slate-400 mt-1 font-medium">({restaurant.reviews})</span>
                  </div>
                </div>
                
                <div className="flex items-center gap-2 text-slate-500 mt-4 mb-6 text-sm font-medium">
                  <MapPin className="w-4 h-4" />
                  {restaurant.location}
                </div>
                
                <div className="mt-auto flex items-center justify-between pt-6 border-t border-slate-100">
                  <div>
                    <div className="text-xs text-slate-400 uppercase tracking-wider font-bold mb-1">Must Try</div>
                    <div className="font-semibold text-slate-800">{restaurant.specialty}</div>
                  </div>
                  <button className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-600 hover:bg-spicy-50 hover:text-spicy-600 transition-colors">
                    <Navigation className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Restaurants;

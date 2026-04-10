import React from 'react';

const dishes = [
  {
    name: "Hyderabadi Dum Biryani",
    desc: "The world-famous biryani, slow-cooked with tender meat and aromatic spices.",
    img: "https://upload.wikimedia.org/wikipedia/commons/5/5a/%22Hyderabadi_Dum_Biryani%22.jpg",
    tag: "Must Try"
  },
  {
    name: "Gongura Mamsam",
    desc: "A fiery red meat curry cooked with tangy sorrel leaves, specific to the Guntur region.",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Mutton_Curry%2C_India.jpg/800px-Mutton_Curry%2C_India.jpg",
    tag: "Spicy"
  },
  {
    name: "Bhimavaram Royyalu",
    desc: "Deep-fried prawns tossed in coastal Godavari spices, curry leaves, and green chilies.",
    img: "https://upload.wikimedia.org/wikipedia/commons/e/ea/Prawns_fry.JPG",
    tag: "Godavari Special"
  },
  {
    name: "Pootharekulu",
    desc: "The 'paper sweet' of Atreyapuram. Fine rice starch layers folded with ghee and jaggery.",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Pootharekulu_traditional_sweet_from_Andhra_Pradesh.jpg/800px-Pootharekulu_traditional_sweet_from_Andhra_Pradesh.jpg",
    tag: "Traditional Sweet"
  }
];

const Dishes = () => {
  return (
    <section id="dishes" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-black text-spicy-600 tracking-wider uppercase mb-3">Culinary Heritage</h2>
          <h3 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">Iconic Dishes of Andhra</h3>
          <p className="text-lg text-slate-600 font-medium">Discover the bold flavors and rich traditions that make Telugu cuisine famous worldwide.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {dishes.map((dish, idx) => (
            <div key={idx} className="group cursor-pointer">
              <div className="relative h-64 mb-6 rounded-3xl overflow-hidden shadow-lg">
                <img src={dish.img} alt={dish.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-spicy-600 shadow-sm">
                  {dish.tag}
                </div>
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-spicy-600 transition-colors">{dish.name}</h4>
              <p className="text-slate-600 font-medium leading-relaxed">{dish.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Dishes;

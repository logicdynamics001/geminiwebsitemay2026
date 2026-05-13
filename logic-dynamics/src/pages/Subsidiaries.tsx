import { motion } from "motion/react";
import { Utensils, ShoppingBag, Truck, Smartphone, Layers, ArrowUpRight } from "lucide-react";

export default function Subsidiaries() {
  const portfolio = [
    {
      name: "ChefDirect",
      category: "Private Chef Platform",
      desc: "Revolutionizing home dining by connecting elite culinary talent with families through smart matching algorithms.",
      icon: Utensils,
      bg: "bg-orange-50",
      color: "text-orange-600",
      status: "Scaling"
    },
    {
      name: "DynaStore",
      category: "B2C E-commerce",
      desc: "A network of curated brands delivering premium products across North America and Europe.",
      icon: ShoppingBag,
      bg: "bg-blue-50",
      color: "text-blue-600",
      status: "Global"
    },
    {
      name: "LD Logistics",
      category: "Supply Chain",
      desc: "The backbone of our operations, ensuring millisecond-level precision in warehouse and shipping management.",
      icon: Truck,
      bg: "bg-emerald-50",
      color: "text-emerald-600",
      status: "Infrastructure"
    }
  ];

  return (
    <div className="pt-32 pb-24 min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-3xl mx-auto mb-24"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-8 tracking-tight">The Ecosystem.</h1>
          <p className="text-xl text-slate-600 font-light">
            Logic Dynamics operates a diverse portfolio of business units, all unified by our 
            core technological advantages.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {portfolio.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative bg-white border border-slate-200 rounded-3xl p-10 hover:shadow-2xl transition-all duration-500 overflow-hidden"
            >
              <div className={`absolute top-0 right-0 p-8 opacity-5 group-hover:scale-150 transition-transform duration-700 ${item.color}`}>
                <item.icon size={120} />
              </div>
              
              <div className={`w-14 h-14 ${item.bg} ${item.color} rounded-2xl flex items-center justify-center mb-10`}>
                <item.icon size={28} />
              </div>

              <div className="mb-8">
                <span className="text-xs uppercase tracking-widest font-bold text-slate-400 mb-2 block">{item.category}</span>
                <h3 className="text-3xl font-bold mb-4">{item.name}</h3>
                <p className="text-slate-500 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="flex items-center justify-between mt-auto">
                <span className="px-3 py-1 bg-slate-100 rounded-full text-xs font-semibold text-slate-600">
                  {item.status}
                </span>
                <button className="flex items-center gap-2 text-sm font-bold group-hover:text-blue-600 transition-colors">
                  Explore Platform <ArrowUpRight size={16} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Investment Philosophy */}
        <div className="bg-slate-900 rounded-[3rem] p-12 md:p-20 text-white overflow-hidden relative">
          <div className="absolute top-0 right-0 p-10 opacity-10">
            <Layers size={300} />
          </div>
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight">Strategy for Investors</h2>
              <p className="text-slate-400 text-lg mb-10 leading-relaxed">
                Logic Dynamics maintains a focused investment strategy, targeting high-growth sectors 
                where technological leverage creates sustainable competitive advantages. 
                Our approach combines operational excellence with aggressive scalability.
              </p>
              <div className="grid grid-cols-2 gap-8 mb-12">
                {[
                  { label: "Capital Efficiency", value: "High" },
                  { label: "Market Reach", value: "Global" },
                  { label: "Tech Stack", value: "Proprietary" },
                  { label: "Vision", value: "2030+" },
                ].map((stat, i) => (
                  <div key={i} className="border-l border-white/20 pl-6">
                    <p className="text-slate-500 text-sm mb-1">{stat.label}</p>
                    <p className="text-xl font-bold">{stat.value}</p>
                  </div>
                ))}
              </div>
              <button className="px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-slate-200 transition-all">
                Download Investor Prospectus
              </button>
            </div>
            <div className="hidden md:block">
              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-square bg-slate-800 rounded-2xl flex items-center justify-center p-8">
                  <Smartphone className="text-blue-400" size={48} />
                </div>
                <div className="aspect-square bg-blue-600 rounded-2xl flex items-center justify-center p-8 translate-y-10">
                  <Layers className="text-white" size={48} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

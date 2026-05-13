import { motion } from "motion/react";
import { MapPin, Users, History, Target } from "lucide-react";

export default function About() {
  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mb-24"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-8">
            Engineering the <br /> 
            <span className="text-slate-400">Future of Trade.</span>
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed font-light">
            Founded in 2020, Logic Dynamics emerged from a vision to simplify the complexities 
            of modern commerce using intelligent technology.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center mb-32">
          <div className="rounded-3xl overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2026" 
              alt="Data analysis"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="space-y-12">
            <div>
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 mb-6">
                <History />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Origin</h3>
              <p className="text-slate-500 leading-relaxed">
                Starting amidst a global shift in consumer behavior, we focused on building 
                robust, fault-tolerant systems that could handle the exploding demand for 
                digital commerce across borders.
              </p>
            </div>
            <div>
              <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center text-emerald-600 mb-6">
                <Target />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-slate-500 leading-relaxed">
                To build an ecosystem where technology removes barriers to entry for 
                entrepreneurs and provides seamless experiences for consumers worldwide.
              </p>
            </div>
          </div>
        </div>

        {/* Global Locations */}
        <div>
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold mb-4">Global Network</h2>
            <p className="text-slate-500">Operating across the world's most dynamic markets.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { city: "United States", region: "New York Hub" },
              { city: "United Kingdom", region: "London Ops" },
              { city: "Canada", region: "Toronto Digital" },
              { city: "Australia", region: "Sydney Logistics" },
            ].map((loc, i) => (
              <div key={i} className="p-8 bg-slate-50 rounded-2xl border border-slate-100">
                <MapPin className="text-slate-400 mb-4" size={20} />
                <h4 className="font-bold text-lg mb-1">{loc.city}</h4>
                <p className="text-slate-500 text-sm">{loc.region}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

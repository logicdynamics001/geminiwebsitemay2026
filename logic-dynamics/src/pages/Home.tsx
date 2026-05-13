import { motion } from "motion/react";
import { ArrowRight, ShoppingBag, Cpu, Globe, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden bg-black text-white">
        {/* Background Video Placeholder */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-60"
            poster="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=2000"
          >
            <source src="https://assets.mixkit.co/videos/preview/mixkit-close-up-of-a-server-in-a-data-center-31121-large.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/80" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm text-sm font-medium mb-8">
              Pioneering Tomorrow's Commerce
            </span>
            <h1 className="text-5xl md:text-8xl font-bold tracking-tight mb-8 leading-[1.1]">
              Dynamics that Drive <br className="hidden md:block" /> 
              <span className="text-slate-400">Global Commerce.</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-12 font-light">
              Logic Dynamics enables the next evolution of retail through high-performance tech 
              infrastructure and direct-to-consumer excellence.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link
                to="/subsidiaries"
                className="w-full sm:w-auto px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-slate-200 transition-all flex items-center justify-center gap-2"
              >
                Our Portfolio <ArrowRight size={18} />
              </Link>
              <Link
                to="/about"
                className="w-full sm:w-auto px-8 py-4 border border-white/30 text-white font-semibold rounded-full hover:bg-white/10 transition-all"
              >
                Learn More
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-40"
        >
          <div className="w-[1px] h-12 bg-white" />
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            {[
              { label: "Founded", value: "2020" },
              { label: "Countries", value: "4+" },
              { label: "Subsidiaries", value: "12+" },
              { label: "Growth", value: "300%" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <h3 className="text-4xl md:text-5xl font-bold mb-2">{stat.value}</h3>
                <p className="text-slate-500 font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Focus Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Enabling commerce at scale
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                We design and deploy technologies that remove friction from the global commerce lifecycle, 
                from supply chain optimization to final-mile delivery.
              </p>
            </div>
            <Link to="/about" className="group flex items-center gap-2 font-semibold text-blue-600">
              Our Methodology <ArrowUpRight size={20} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Tech Infrastructure",
                desc: "High-available systems serving millions of concurrent transactions globally.",
                icon: Cpu,
                color: "bg-blue-500"
              },
              {
                title: "E-commerce Engine",
                desc: "Proprietary stacks that power direct-to-consumer brands across major markets.",
                icon: ShoppingBag,
                color: "bg-orange-500"
              },
              {
                title: "Global Reach",
                desc: "Operating centers and distribution networks in US, UK, Canada, and Australia.",
                icon: Globe,
                color: "bg-emerald-500"
              }
            ].map((feature, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100 transition-all"
              >
                <div className={`w-14 h-14 ${feature.color} rounded-2xl flex items-center justify-center text-white mb-8 shadow-lg`}>
                  <feature.icon size={28} />
                </div>
                <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                <p className="text-slate-500 leading-relaxed">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-24 bg-white overflow-hidden relative">
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl font-bold mb-8">Stay updated with Logic Dynamics</h2>
          <p className="text-slate-600 mb-10 max-w-lg mx-auto">
            Get early access to our quarterly reports and insights on the future of global ecommerce tech.
          </p>
          <form className="flex flex-col md:flex-row gap-4 max-w-xl mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Email address"
              className="flex-1 px-6 py-4 bg-slate-100 rounded-full outline-hidden focus:ring-2 focus:ring-black/5 transition-all"
              required
            />
            <button className="px-8 py-4 bg-black text-white font-semibold rounded-full hover:bg-slate-800 transition-all">
              Subscribe
            </button>
          </form>
          <p className="mt-6 text-xs text-slate-400">
            By subscribing, you agree to our Terms of Service and Privacy Policy.
          </p>
        </div>
      </section>
    </div>
  );
}

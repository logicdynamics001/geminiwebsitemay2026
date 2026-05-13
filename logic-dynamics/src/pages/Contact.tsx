import { motion } from "motion/react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function Contact() {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 text-center mb-20">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Connect with us.</h1>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto">
            Whether you're an investor, potential partner, or talented engineer, 
            we'd love to hear from you.
          </p>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
        <div className="lg:col-span-1 space-y-8">
          {[
            { 
              title: "General Inquiries", 
              info: "contact@logicdynamics.org", 
              icon: Mail 
            },
            { 
              title: "Investor Relations", 
              info: "ir@logicdynamics.org", 
              icon: Send 
            },
            { 
              title: "Global Headquarters", 
              info: "Logic Dynamics Tech Plaza, 100 Commerce Way", 
              icon: MapPin 
            }
          ].map((item, i) => (
            <div key={i} className="bg-white p-8 rounded-3xl border border-slate-200">
              <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center text-slate-600 mb-4">
                <item.icon size={20} />
              </div>
              <h4 className="font-bold mb-2">{item.title}</h4>
              <p className="text-slate-500">{item.info}</p>
            </div>
          ))}
        </div>

        <div className="lg:col-span-2">
          <div className="bg-white p-10 md:p-14 rounded-3xl shadow-xl shadow-slate-200/50">
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-400 uppercase tracking-wider">Full Name</label>
                  <input 
                    type="text" 
                    className="w-full px-6 py-4 bg-slate-50 rounded-2xl outline-hidden focus:ring-2 focus:ring-black/5 transition-all"
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-400 uppercase tracking-wider">Email Address</label>
                  <input 
                    type="email" 
                    className="w-full px-6 py-4 bg-slate-50 rounded-2xl outline-hidden focus:ring-2 focus:ring-black/5 transition-all"
                    placeholder="john@company.com"
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-400 uppercase tracking-wider">Subject</label>
                <select className="w-full px-6 py-4 bg-slate-50 rounded-2xl outline-hidden focus:ring-2 focus:ring-black/5 transition-all appearance-none">
                  <option>General Inquiry</option>
                  <option>Investment Opportunity</option>
                  <option>Career Opportunities</option>
                  <option>Press & Media</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-400 uppercase tracking-wider">Message</label>
                <textarea 
                  rows={5}
                  className="w-full px-6 py-4 bg-slate-50 rounded-2xl outline-hidden focus:ring-2 focus:ring-black/5 transition-all resize-none"
                  placeholder="How can we help you?"
                  required
                />
              </div>
              <button className="w-full py-5 bg-black text-white font-bold rounded-2xl hover:bg-slate-800 transition-all flex items-center justify-center gap-2">
                Send Message <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

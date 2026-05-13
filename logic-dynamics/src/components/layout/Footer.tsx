import { Link } from "react-router-dom";
import { Github, Twitter, Linkedin, Mail, ArrowUpRight } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-50 border-t border-slate-200 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
                <div className="w-4 h-4 bg-white rounded-sm" />
              </div>
              <span className="text-xl font-bold tracking-tight">LOGIC DYNAMICS</span>
            </Link>
            <p className="text-slate-500 max-w-sm mb-8 leading-relaxed">
              Founded in 2020, Logic Dynamics is at the intersection of technology and commerce, 
              building the infrastructure that powers the next generation of global ecommerce.
            </p>
            <div className="flex gap-4">
              {[Twitter, Linkedin, Github].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 border border-slate-200 rounded-full flex items-center justify-center hover:bg-black hover:text-white transition-all"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-6">Company</h4>
            <ul className="space-y-4">
              {["About", "Subsidiaries", "Careers", "Newsroom"].map((item) => (
                <li key={item}>
                  <Link to={`/${item.toLowerCase()}`} className="text-slate-500 hover:text-black transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-6">Support</h4>
            <ul className="space-y-4">
              {["Contact Us", "Investors", "Privacy Policy", "Terms"].map((item) => (
                <li key={item}>
                  <Link to="/contact" className="text-slate-500 hover:text-black transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-400 text-sm">
            © {currentYear} Logic Dynamics Org. All rights reserved. Registered in multiple jurisdictions.
          </p>
          <div className="flex gap-8">
            <a href="mailto:contact@logicdynamics.org" className="text-slate-400 text-sm hover:text-black flex items-center gap-1 group">
              contact@logicdynamics.org <Mail size={14} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

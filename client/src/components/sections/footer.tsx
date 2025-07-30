import { Linkedin, Github, Mail, Phone, MapPin } from "lucide-react";
import { portfolioData } from "@/data/portfolio-data";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-secondary text-white py-12 no-print">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Brand */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">{portfolioData.personal.name}</h3>
              <p className="text-neutral-300 leading-relaxed">
                Full Stack Developer passionate about creating scalable, efficient solutions and contributing to meaningful projects.
              </p>
              <div className="flex space-x-4">
                <a 
                  href={`https://${portfolioData.personal.linkedin}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors duration-300"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a 
                  href={`https://${portfolioData.personal.github}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors duration-300"
                >
                  <Github className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Quick Links</h4>
              <div className="space-y-2">
                {['#about', '#skills', '#experience', '#projects', '#contact'].map((link) => (
                  <button
                    key={link}
                    onClick={() => handleNavClick(link)}
                    className="block text-neutral-300 hover:text-white transition-colors duration-300 text-left"
                  >
                    {link.replace('#', '').charAt(0).toUpperCase() + link.slice(2)}
                  </button>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Get In Touch</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-neutral-400" />
                  <a 
                    href={`mailto:${portfolioData.personal.email}`} 
                    className="text-neutral-300 hover:text-white transition-colors duration-300"
                  >
                    {portfolioData.personal.email}
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-neutral-400" />
                  <a 
                    href={`tel:${portfolioData.personal.phone}`} 
                    className="text-neutral-300 hover:text-white transition-colors duration-300"
                  >
                    {portfolioData.personal.phone}
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-neutral-400" />
                  <span className="text-neutral-300">{portfolioData.personal.location}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-neutral-700 mt-12 pt-8 text-center">
            <p className="text-neutral-400">
              © {currentYear} {portfolioData.personal.name}. All rights reserved. Built with passion and modern web technologies.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

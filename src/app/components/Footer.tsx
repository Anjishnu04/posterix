import * as React from "react";
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import { Button } from "./UI/button";

export const Footer = () => {
  const [email, setEmail] = React.useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Subscribe:", email);
    setEmail("");
  };

  return (
    <footer className="bg-slate-950 text-white">
      {/* Newsletter Section */}
      <div className="border-b border-slate-800 px-6 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-2">JOIN OUR NEWSLETTER</h2>
          <p className="text-slate-400 mb-6">
            Get exclusive offers and updates on new arrivals
          </p>
          <form onSubmit={handleSubscribe} className="flex gap-2 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-4 py-2 bg-slate-800 text-white placeholder-slate-500 rounded border border-slate-700 focus:outline-none focus:border-slate-500"
              required
            />
            <Button
              type="submit"
              className="bg-white text-slate-950 hover:bg-slate-100 font-semibold"
            >
              Subscribe
            </Button>
          </form>
        </div>
      </div>

      {/* Footer Content */}
      <div className="px-6 py-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-bold mb-4">ABOUT POSTERIX</h3>
            <p className="text-slate-400 text-sm mb-6">
              Transform your walls with premium quality posters and custom prints.
              Over 2,50,000+ satisfied customers across India.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-slate-400 hover:text-white transition">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Shop Section */}
          <div>
            <h3 className="text-lg font-bold mb-4">SHOP</h3>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li>
                <a href="#" className="hover:text-white transition">
                  All Products
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Superhero Collection
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Movie Posters
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Music Posters
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Custom Posters
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Bulk Orders
                </a>
              </li>
            </ul>
          </div>

          {/* Customer Service Section */}
          <div>
            <h3 className="text-lg font-bold mb-4">CUSTOMER SERVICE</h3>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li>
                <a href="#" className="hover:text-white transition">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Shipping Info
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Returns & Exchange
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Track Order
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Customer Reviews
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-lg font-bold mb-4">CONTACT</h3>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li className="flex items-center gap-2">
                <Mail size={18} />
                <a href="mailto:support@posterix.com" className="hover:text-white transition">
                  anjishnusarkar30@outlook.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={18} />
                <a href="tel:+919876543210" className="hover:text-white transition">
                  +91 8583008513
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={18} className="mt-0.5 flex-shrink-0" />
                <span>India</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-500 text-sm">
          <p>&copy; 2026 Posterix. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

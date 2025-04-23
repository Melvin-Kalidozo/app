import React from "react";
import { Facebook, Twitter, Instagram, Globe } from "lucide-react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-[#1a1a1a] text-white py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Logo and Description */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Image src="/logo.png" alt="Logo" width={30} height={30} />
            <h1 className="text-2xl text-[#FFD700] font-bold">Casino Marina</h1>
          </div>
          <p className="text-sm text-gray-400">
            Dive into the ultimate virtual casino experience. Play. Win. Repeat.
          </p>
        </div>

        {/* Virtual Games */}
        <div>
          <h3 className="font-semibold mb-3 text-[#FFD700]">Virtual Games</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-[#FFD700]">
                Slots
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#FFD700]">
                Roulette
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#FFD700]">
                Blackjack
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#FFD700]">
                Live Casino
              </a>
            </li>
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h3 className="font-semibold mb-3 text-[#FFD700]">Connect</h3>
          <div className="flex space-x-4">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#FFD700]"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#FFD700]"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#FFD700]"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="https://www.casinoverses.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#FFD700]"
            >
              <Globe className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold mb-3 text-[#FFD700]">Contact Us</h3>
          <p className="text-sm text-gray-400">
            Email: support@casinoverses.com
          </p>
          <p className="text-sm text-gray-400">Phone: +123 456 7890</p>
          <p className="text-sm text-gray-400">Live Chat: 24/7</p>
        </div>
      </div>

      <div className="mt-10 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} CasinoVerse. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

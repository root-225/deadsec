"use strict";
'use client';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Footer;
var react_1 = __importDefault(require("react"));
var link_1 = __importDefault(require("next/link"));
var framer_motion_1 = require("framer-motion");
function Footer() {
    var navigation = {
        main: [
            { name: 'Accueil', href: '/' },
            { name: 'Services', href: '/services-list' },
            { name: 'À propos', href: '/about' },
            { name: 'Contact', href: '/contact' },
        ],
        social: [
            {
                name: 'Twitter',
                href: 'https://x.com/root7132_',
                icon: function (props) { return (<svg fill="currentColor" viewBox="0 0 24 24" {...props}>
            <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"/>
          </svg>); },
            },
            {
                name: 'GitHub',
                href: 'https://github.com/root-225',
                icon: function (props) { return (<svg fill="currentColor" viewBox="0 0 24 24" {...props}>
            <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.91-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"/>
          </svg>); },
            },
            {
                name: 'LinkedIn',
                href: 'https://www.linkedin.com/in/karl-joseph-tiemele/',
                icon: function (props) { return (<svg fill="currentColor" viewBox="0 0 24 24" {...props}>
            <path fillRule="evenodd" d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" clipRule="evenodd"/>
          </svg>); },
            },
            {
                name: 'YouTube',
                href: 'https://www.youtube.com/@root7132',
                icon: function (props) { return (<svg fill="currentColor" viewBox="0 0 24 24" {...props}>
            <path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.418-4.814a2.507 2.507 0 0 1 1.768-1.768C5.746 5 12 5 12 5s6.255 0 7.814.418z" clipRule="evenodd"/>
            <path d="M15.194 12 10 15V9l5.194 3z" fill="white"/>
          </svg>); },
            },
        ],
    };
    return (<footer className="bg-[#000000] backdrop-blur-sm border-t border-[#ABA8A8]">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1">
            <link_1.default href="/" className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#CECECE] to-[#E8E8E8]">
              deadsec
            </link_1.default>
            <p className="mt-4 text-sm text-[#CECECE]">
              Solutions innovantes informatiques pour développer votre business en le digitalisant et en investissant dans sa sécurité en ligne.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-[#FFFFFF] tracking-wider uppercase">
              Liens Rapides
            </h3>
            <ul className="mt-4 space-y-4">
              {navigation.main.map(function (item) { return (<li key={item.name}>
                  <link_1.default href={item.href} className="text-base text-[#CECECE] hover:text-[#FFFFFF] transition-colors">
                    {item.name}
                  </link_1.default>
                </li>); })}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold text-[#FFFFFF] tracking-wider uppercase">
              Services
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <link_1.default href="/services/cloud" className="text-base text-[#CECECE] hover:text-[#FFFFFF] transition-colors">
                  Services Cloud
                </link_1.default>
              </li>
              <li>
                <link_1.default href="/services/ai" className="text-base text-[#CECECE] hover:text-[#FFFFFF] transition-colors">
                  Intelligence Artificielle
                </link_1.default>
              </li>
              <li>
                <link_1.default href="/services/security" className="text-base text-[#CECECE] hover:text-[#FFFFFF] transition-colors">
                  Cybersécurité
                </link_1.default>
              </li>
              <li>
                <link_1.default href="/services/digital" className="text-base text-[#CECECE] hover:text-[#FFFFFF] transition-colors">
                  Transformation Digitale
                </link_1.default>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-[#FFFFFF] tracking-wider uppercase">
              Contact
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="mailto:root225r01@gmail.com" className="text-[#CECECE] hover:text-[#E8E8E8] transition-colors">
                  root225r01@gmail.com
                </a>
              </li>
              <li className="text-[#CECECE]">
                +225 07 89 36 31 25
              </li>
              <li className="text-[#CECECE]">
                COCODY, ANGRE<br />
                Abidjan, Côte d'Ivoire
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-[#ABA8A8] pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-base text-[#CECECE]">
              {new Date().getFullYear()} deadsec. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <framer_motion_1.motion.a href="https://www.linkedin.com/in/karl-joseph-tiemele/" target="_blank" rel="noopener noreferrer" className="text-[#CECECE] hover:text-[#E8E8E8] transition-colors" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                <span className="sr-only">LinkedIn</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" clipRule="evenodd"/>
                </svg>
              </framer_motion_1.motion.a>
              <framer_motion_1.motion.a href="https://github.com/root-225" target="_blank" rel="noopener noreferrer" className="text-[#CECECE] hover:text-[#E8E8E8] transition-colors" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                <span className="sr-only">GitHub</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.91-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"/>
                </svg>
              </framer_motion_1.motion.a>
              <framer_motion_1.motion.a href="https://x.com/root7132_" target="_blank" rel="noopener noreferrer" className="text-[#CECECE] hover:text-[#E8E8E8] transition-colors" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"/>
                </svg>
              </framer_motion_1.motion.a>
              <framer_motion_1.motion.a href="https://www.youtube.com/@root7132" target="_blank" rel="noopener noreferrer" className="text-[#CECECE] hover:text-[#E8E8E8] transition-colors" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                <span className="sr-only">YouTube</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.418-4.814a2.507 2.507 0 0 1 1.768-1.768C5.746 5 12 5 12 5s6.255 0 7.814.418z" clipRule="evenodd"/>
                  <path d="M15.194 12 10 15V9l5.194 3z" fill="white"/>
                </svg>
              </framer_motion_1.motion.a>
            </div>
          </div>
        </div>
      </div>
    </footer>);
}

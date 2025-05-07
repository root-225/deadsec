"use strict";
'use client';
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Header;
var react_1 = __importStar(require("react"));
var link_1 = __importDefault(require("next/link"));
var navigation_1 = require("next/navigation");
var framer_motion_1 = require("framer-motion");
var fa_1 = require("react-icons/fa");
var ThemeContext_1 = require("@/lib/ThemeContext");
var Logo_1 = __importDefault(require("./Logo"));
var MobileMenu_1 = __importDefault(require("./MobileMenu"));
var ThemeToggleButton = function () {
    var _a = (0, ThemeContext_1.useTheme)(), theme = _a.theme, toggleTheme = _a.toggleTheme;
    return (<button onClick={toggleTheme} className="flex items-center justify-center h-8 w-8 rounded-md text-[#CECECE] hover:text-[#FFFFFF] transition-colors focus:outline-none" aria-label={theme === 'dark' ? "Switch to light mode" : "Switch to dark mode"}>
      {theme === 'dark' ? (<fa_1.FaSun className="h-5 w-5"/>) : (<fa_1.FaMoon className="h-5 w-5"/>)}
    </button>);
};
var MobileMenuButton = function (_a) {
    var isOpen = _a.isOpen, onClick = _a.onClick;
    return (<button className="p-2 rounded-md text-[#CECECE] hover:text-[#FFFFFF] hover:bg-[#000000]" onClick={onClick}>
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        {isOpen ? (<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>) : (<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"/>)}
      </svg>
    </button>);
};
function Header() {
    var _a = (0, react_1.useState)(false), isScrolled = _a[0], setIsScrolled = _a[1];
    var _b = (0, react_1.useState)(false), isMobileMenuOpen = _b[0], setIsMobileMenuOpen = _b[1];
    var pathname = (0, navigation_1.usePathname)();
    (0, react_1.useEffect)(function () {
        var handleScroll = function () {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return function () { return window.removeEventListener('scroll', handleScroll); };
    }, []);
    var navigation = [
        { name: 'Accueil', href: '/' },
        { name: 'Services', href: '/services-list' },
        { name: 'Formations', href: '/formations' }, // Ajout du lien Formations
        { name: 'À propos', href: '/about' },
        { name: 'Contact', href: '/contact' },
    ];
    return (<header className={"fixed top-0 left-0 right-0 z-50 transition-all duration-300 ".concat(isScrolled ? 'bg-[#000000]/80 backdrop-blur-md' : 'bg-transparent')}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Logo_1.default animated={false} size="md"/>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navigation.map(function (item) { return (<link_1.default key={item.name} href={item.href} className={"text-sm font-medium transition-colors ".concat(pathname === item.href
                ? 'text-[#FFFFFF]'
                : 'text-[#CECECE] hover:text-[#FFFFFF]')}>
                {item.name}
              </link_1.default>); })}
            
            <ThemeToggleButton />
          </div>

          <div className="md:hidden flex items-center space-x-4">
            <ThemeToggleButton />
            <MobileMenuButton isOpen={isMobileMenuOpen} onClick={function () { return setIsMobileMenuOpen(!isMobileMenuOpen); }}/>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <framer_motion_1.AnimatePresence>
        {isMobileMenuOpen && (<MobileMenu_1.default isOpen={isMobileMenuOpen} navigation={navigation} onClose={function () { return setIsMobileMenuOpen(false); }}/>)}
      </framer_motion_1.AnimatePresence>
    </header>);
}

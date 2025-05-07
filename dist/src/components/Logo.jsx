"use strict";
'use client';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Logo;
var react_1 = __importDefault(require("react"));
var framer_motion_1 = require("framer-motion");
var link_1 = __importDefault(require("next/link"));
function Logo(_a) {
    var _b = _a.size, size = _b === void 0 ? 'md' : _b, _c = _a.animated, animated = _c === void 0 ? true : _c, _d = _a.withText, withText = _d === void 0 ? true : _d, _e = _a.className, className = _e === void 0 ? '' : _e;
    var sizes = {
        sm: { width: 32, height: 32, textClass: 'text-lg' },
        md: { width: 40, height: 40, textClass: 'text-xl' },
        lg: { width: 48, height: 48, textClass: 'text-2xl' },
    };
    var _f = sizes[size], width = _f.width, height = _f.height, textClass = _f.textClass;
    var logoVariants = {
        initial: { rotate: 0 },
        hover: animated ? { rotate: 360, transition: { duration: 0.8, ease: "easeInOut" } } : {},
    };
    return (<link_1.default href="/" className={"flex items-center ".concat(className)}>
      <framer_motion_1.motion.div variants={logoVariants} initial="initial" whileHover="hover" className="relative" style={{ width: width, height: height }}>
        <svg width={width} height={height} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Background circle */}
          <circle cx="50" cy="50" r="48" fill="url(#logoGradient)"/>
          
          {/* HK Letters */}
          <path d="M30 25V75M30 50H50M50 25V75M70 25V75M70 50H90" stroke="white" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round"/>
          
          {/* Gradient Definition */}
          <defs>
            <linearGradient id="logoGradient" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#CECECE"/>
              <stop offset="100%" stopColor="#000000"/>
            </linearGradient>
          </defs>
        </svg>
      </framer_motion_1.motion.div>
      
      {withText && (<span className={"ml-2 font-bold ".concat(textClass, " bg-clip-text text-transparent bg-gradient-to-r from-[#CECECE] to-[#000000]")}>
          deadsec
        </span>)}
    </link_1.default>);
}

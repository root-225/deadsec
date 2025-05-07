"use strict";
'use client';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ServicePagePlaceholder;
var react_1 = __importDefault(require("react"));
var framer_motion_1 = require("framer-motion");
function ServicePagePlaceholder(_a) {
    var service = _a.service, _b = _a.width, width = _b === void 0 ? 600 : _b, _c = _a.height, height = _c === void 0 ? 400 : _c, _d = _a.className, className = _d === void 0 ? '' : _d;
    var gradientConfigs = {
        cloud: {
            from: 'from-blue-500',
            to: 'to-cyan-400',
            bgClass: 'bg-gradient-to-br from-blue-500 to-cyan-400',
            icon: (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-16 h-16">
          <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/>
        </svg>),
        },
        security: {
            from: 'from-red-500',
            to: 'to-orange-400',
            bgClass: 'bg-gradient-to-br from-red-500 to-orange-400',
            icon: (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-16 h-16">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/>
        </svg>),
        },
        ai: {
            from: 'from-purple-500',
            to: 'to-indigo-400',
            bgClass: 'bg-gradient-to-br from-purple-500 to-indigo-400',
            icon: (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-16 h-16">
          <rect x="3" y="11" width="8" height="10" rx="2"/>
          <rect x="13" y="11" width="8" height="10" rx="2"/>
          <path d="M8 11V9a5 5 0 0 1 8 0v2"/>
          <path d="M12 11v10"/>
          <path d="M4 5a2.98 2.98 0 0 1 2-1 3 3 0 0 1 2 5.5"/>
          <path d="M20 5a2.98 2.98 0 0 0-2-1 3 3 0 0 0-2 5.5"/>
        </svg>),
        },
        digital: {
            from: 'from-green-500',
            to: 'to-teal-400',
            bgClass: 'bg-gradient-to-br from-green-500 to-teal-400',
            icon: (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-16 h-16">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
          <line x1="8" y1="21" x2="16" y2="21"/>
          <line x1="12" y1="17" x2="12" y2="21"/>
        </svg>),
        },
    };
    var config = gradientConfigs[service];
    return (<div className={"relative overflow-hidden rounded-xl ".concat(config.bgClass, " ").concat(className)} style={{ width: width, height: height }}>
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="white" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)"/>
        </svg>
      </div>

      {/* Animated circles */}
      <framer_motion_1.motion.div initial={{ scale: 0.8, opacity: 0.3 }} animate={{ scale: 1.2, opacity: 0.4 }} transition={{
            repeat: Infinity,
            repeatType: "reverse",
            duration: 3,
        }} className="absolute -right-12 -bottom-12 w-48 h-48 rounded-full bg-white/20"/>
      <framer_motion_1.motion.div initial={{ scale: 1, opacity: 0.2 }} animate={{ scale: 1.5, opacity: 0.3 }} transition={{
            repeat: Infinity,
            repeatType: "reverse",
            duration: 4,
            delay: 1,
        }} className="absolute -left-12 -top-12 w-40 h-40 rounded-full bg-white/20"/>

      {/* Center icon and label */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
        <div className="mb-4">{config.icon}</div>
        <h3 className="text-2xl font-bold uppercase tracking-wider">
          {service === 'ai' ? 'Intelligence Artificielle' :
            service === 'cloud' ? 'Services Cloud' :
                service === 'security' ? 'Cybersécurité' : 'Transformation Digitale'}
        </h3>
      </div>
    </div>);
}

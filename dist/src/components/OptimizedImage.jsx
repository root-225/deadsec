"use strict";
'use client';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = OptimizedImage;
var image_1 = __importDefault(require("next/image"));
var react_1 = require("react");
var framer_motion_1 = require("framer-motion");
function OptimizedImage(_a) {
    var src = _a.src, alt = _a.alt, _b = _a.fill, fill = _b === void 0 ? false : _b, _c = _a.className, className = _c === void 0 ? '' : _c, _d = _a.priority, priority = _d === void 0 ? false : _d, width = _a.width, height = _a.height;
    var _e = (0, react_1.useState)(true), isLoading = _e[0], setIsLoading = _e[1];
    var _f = (0, react_1.useState)(false), error = _f[0], setError = _f[1];
    return (<div className={"relative ".concat(fill ? 'w-full h-full' : '', " overflow-hidden")}>
      <framer_motion_1.AnimatePresence mode="wait">
        {isLoading && (<framer_motion_1.motion.div key="loading" className="absolute inset-0 flex items-center justify-center bg-slate-900/20 backdrop-blur-sm z-10" initial={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
            <div className="w-8 h-8 border-2 border-cyan-500 border-t-transparent rounded-full animate-spin"/>
          </framer_motion_1.motion.div>)}

        {error && (<framer_motion_1.motion.div key="error" className="absolute inset-0 flex flex-col items-center justify-center bg-slate-900/20 backdrop-blur-sm z-10" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
            <svg className="w-12 h-12 text-red-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/>
            </svg>
            <p className="text-white text-sm">Failed to load image</p>
          </framer_motion_1.motion.div>)}
      </framer_motion_1.AnimatePresence>

      <image_1.default src={src} alt={alt} fill={fill} width={!fill && width ? width : undefined} height={!fill && height ? height : undefined} className={"".concat(className, " ").concat(isLoading ? 'blur-sm scale-105' : 'blur-0 scale-100', " transition-all duration-500")} priority={priority} onLoadingComplete={function () { return setIsLoading(false); }} onError={function () {
            setIsLoading(false);
            setError(true);
        }}/>
    </div>);
}

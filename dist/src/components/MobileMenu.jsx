"use strict";
'use client';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = MobileMenu;
var react_1 = __importDefault(require("react"));
var link_1 = __importDefault(require("next/link"));
var framer_motion_1 = require("framer-motion");
var navigation_1 = require("next/navigation");
function MobileMenu(_a) {
    var isOpen = _a.isOpen, navigation = _a.navigation, onClose = _a.onClose;
    var pathname = (0, navigation_1.usePathname)();
    return (<framer_motion_1.motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="md:hidden bg-[#000000]/95 backdrop-blur-md">
      <div className="px-4 pt-2 pb-3 space-y-1">
        {navigation.map(function (item) { return (<link_1.default key={item.name} href={item.href} className={"block px-3 py-2 rounded-md text-base font-medium ".concat(pathname === item.href
                ? 'text-[#FFFFFF] bg-[#000000]'
                : 'text-[#CECECE] hover:text-[#FFFFFF] hover:bg-[#000000]')} onClick={onClose}>
            {item.name}
          </link_1.default>); })}
      </div>
    </framer_motion_1.motion.div>);
}

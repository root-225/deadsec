"use strict";
'use client';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = MobileNavLink;
var link_1 = __importDefault(require("next/link"));
var navigation_1 = require("next/navigation");
function MobileNavLink(_a) {
    var href = _a.href, name = _a.name, onClose = _a.onClose;
    var pathname = (0, navigation_1.usePathname)();
    return (<link_1.default href={href} className={"block px-3 py-2 rounded-md text-base font-medium ".concat(pathname === href
            ? 'text-[#FFFFFF] bg-[#000000]'
            : 'text-[#CECECE] hover:text-[#FFFFFF] hover:bg-[#000000]')} onClick={onClose}>
      {name}
    </link_1.default>);
}

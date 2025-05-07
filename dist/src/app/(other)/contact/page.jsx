"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.metadata = void 0;
exports.default = ContactPage;
var react_1 = __importDefault(require("react"));
var Contact_1 = __importDefault(require("@/components/Contact"));
exports.metadata = {
    title: 'Contact | deadsec',
    description: 'Contactez deadsec pour discuter de vos besoins en technologie et solutions digitales.',
};
function ContactPage() {
    return (<div className="pt-16">
      <Contact_1.default />
    </div>);
}

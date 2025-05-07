"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.metadata = void 0;
exports.default = ServicesListLayout;
var Header_1 = __importDefault(require("@/components/Header"));
var Footer_1 = __importDefault(require("@/components/Footer"));
exports.metadata = {
    title: 'Nos Services | deadsec',
    description: 'Découvrez nos services professionnels en cloud, sécurité, IA et transformation digitale.',
};
function ServicesListLayout(_a) {
    var children = _a.children;
    return (<div className="min-h-screen flex flex-col">
      <Header_1.default />
      <div className="flex-grow pt-16">
        {children}
      </div>
      <Footer_1.default />
    </div>);
}

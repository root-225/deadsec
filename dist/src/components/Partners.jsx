"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Partners;
var react_1 = __importDefault(require("react"));
var image_1 = __importDefault(require("next/image"));
var partners = [
    {
        name: 'Microsoft',
        logo: '/partners/microsoft.svg',
    },
    {
        name: 'Google',
        logo: '/partners/google.svg',
    },
    {
        name: 'Amazon Web Services',
        logo: '/partners/aws.svg',
    }
];
function Partners() {
    return (<section className="py-16 bg-[#020617]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
          Nos Partenaires
        </h2>
        <div className="flex flex-wrap justify-center items-center space-x-8 space-y-4">
          {partners.map(function (partner) { return (<div key={partner.name} className="flex items-center justify-center w-40 h-20">
              <image_1.default src={partner.logo} alt={partner.name} width={160} height={80} className="grayscale hover:grayscale-0 transition-all duration-300"/>
            </div>); })}
        </div>
      </div>
    </section>);
}

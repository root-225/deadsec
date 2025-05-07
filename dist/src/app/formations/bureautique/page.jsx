"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.metadata = void 0;
exports.default = BureautiquePage;
var react_1 = __importDefault(require("react"));
var fa_1 = require("react-icons/fa"); // Import icons
var BureautiqueClientContent_1 = __importDefault(require("./BureautiqueClientContent"));
exports.metadata = {
    title: 'Formation Bureautique | deadsec',
    description: 'Maîtrisez les outils bureautiques essentiels avec notre formation pratique.',
};
function BureautiquePage() {
    return (<div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <fa_1.FaKeyboard className="w-16 h-16 text-blue-600 dark:text-blue-400"/>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-4">
            Formation Bureautique
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Optimisez votre productivité et maîtrisez les outils bureautiques essentiels avec notre formation pratique.
          </p>
        </div>
      </section>

      <BureautiqueClientContent_1.default />
    </div>);
}

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.metadata = void 0;
exports.default = EbooksPage;
var react_1 = __importDefault(require("react"));
var ebooks_1 = require("@/config/ebooks");
var EbookCard_1 = __importDefault(require("@/components/EbookCard")); // Import the new component
exports.metadata = {
    title: 'Ebooks | deadsec',
    description: 'Découvrez notre collection d\'ebooks sur la technologie, la cybersécurité et le développement web.',
};
function EbooksPage() {
    return (<div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Nos Ebooks</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          Ressources gratuites pour approfondir vos connaissances en technologie
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {ebooks_1.ebooks.map(function (book) { return (<EbookCard_1.default key={book.id} book={book}/>); })}
      </div>
    </div>);
}

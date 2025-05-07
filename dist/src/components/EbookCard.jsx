"use strict";
'use client';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = EbookCard;
var react_1 = __importDefault(require("react"));
var framer_motion_1 = require("framer-motion");
function EbookCard(_a) {
    var book = _a.book;
    return (<framer_motion_1.motion.div key={book.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="aspect-w-3 aspect-h-4 relative">
        <div className="h-48 bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
          {/* Placeholder for book cover */}
          <span className="text-gray-500 dark:text-gray-400 text-center px-2">{book.title}</span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{book.title}</h3>
        <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">{book.description}</p>
        <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-4">
          <span>{book.author}</span>
          <span>{book.category}</span>
        </div>
        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors duration-300" onClick={function () { return window.open(book.downloadUrl, '_blank'); }}>
          Télécharger
        </button>
      </div>
    </framer_motion_1.motion.div>);
}

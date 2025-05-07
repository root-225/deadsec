"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = NotFound;
var link_1 = __importDefault(require("next/link"));
function NotFound() {
    return (<div className="min-h-screen bg-slate-900 flex items-center justify-center px-4">
      <div className="max-w-md w-full space-y-4 text-center">
        <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-blue-400 mb-2">404 - Page Not Found</h2>
          <p className="text-slate-400 mb-4">
            The page you are looking for does not exist or has been moved.
          </p>
          <link_1.default href="/" className="inline-block px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors">
            Return Home
          </link_1.default>
        </div>
      </div>
    </div>);
}

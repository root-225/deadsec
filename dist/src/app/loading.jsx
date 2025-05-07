"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Loading;
var LoadingSpinner_1 = __importDefault(require("@/components/LoadingSpinner"));
function Loading() {
    return (<div className="min-h-screen bg-slate-900 flex items-center justify-center">
      <div className="text-center">
        <LoadingSpinner_1.default size="lg" className="text-blue-500"/>
        <p className="mt-4 text-slate-400 animate-pulse">Loading...</p>
      </div>
    </div>);
}

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = OtherLayout;
var Header_1 = __importDefault(require("@/components/Header"));
var Footer_1 = __importDefault(require("@/components/Footer"));
function OtherLayout(_a) {
    var children = _a.children;
    return (<div className="min-h-screen bg-slate-900">
      <Header_1.default />
      <main className="pt-16">
        {children}
      </main>
      <Footer_1.default />
    </div>);
}

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.metadata = void 0;
exports.default = CybersecuritePage;
var react_1 = __importDefault(require("react"));
var CybersecuriteClientContent_1 = __importDefault(require("./CybersecuriteClientContent")); // Import the new client component
exports.metadata = {
    title: 'Formation Cybersécurité | deadsec',
    description: 'Apprenez les fondamentaux de la cybersécurité avec notre formation complète.',
};
function CybersecuritePage() {
    return (<div className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <CybersecuriteClientContent_1.default />
    </div>);
}

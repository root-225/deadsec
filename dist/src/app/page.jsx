"use strict";
'use client';
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Home;
var react_1 = __importDefault(require("react"));
var dynamic_1 = __importDefault(require("next/dynamic"));
var Header_1 = __importDefault(require("../components/Header"));
var Hero_1 = __importDefault(require("@/components/Hero"));
var LoadingSpinner_1 = __importDefault(require("@/components/LoadingSpinner"));
var Features_1 = __importDefault(require("@/components/Features"));
var Services_1 = __importDefault(require("@/components/Services"));
var Testimonials_1 = __importDefault(require("@/components/Testimonials"));
var Contact_1 = __importDefault(require("@/components/Contact"));
var DynamicStats = (0, dynamic_1.default)(function () { return Promise.resolve().then(function () { return __importStar(require('@/components/Stats')); }); }, {
    loading: function () { return <LoadingSpinner_1.default />; },
    ssr: true
});
var DynamicFeatures = (0, dynamic_1.default)(function () { return Promise.resolve().then(function () { return __importStar(require('@/components/Features')); }); }, {
    loading: function () { return <LoadingSpinner_1.default />; },
    ssr: true
});
var DynamicServices = (0, dynamic_1.default)(function () { return Promise.resolve().then(function () { return __importStar(require('@/components/Services')); }); }, {
    loading: function () { return <LoadingSpinner_1.default />; },
    ssr: true
});
var DynamicPartners = (0, dynamic_1.default)(function () { return Promise.resolve().then(function () { return __importStar(require('@/components/Partners')); }); }, {
    loading: function () { return <LoadingSpinner_1.default />; },
    ssr: true
});
var DynamicContact = (0, dynamic_1.default)(function () { return Promise.resolve().then(function () { return __importStar(require('@/components/Contact')); }); }, {
    loading: function () { return <LoadingSpinner_1.default />; },
    ssr: true
});
function Home() {
    return (<main className="min-h-screen bg-[#020617] overflow-x-hidden">
      <Header_1.default />
      <Hero_1.default />
      <DynamicStats />
      <Features_1.default />
      <Services_1.default />
      <Testimonials_1.default />
      <DynamicPartners />
      <Contact_1.default />
    </main>);
}

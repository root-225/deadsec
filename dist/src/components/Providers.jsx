"use strict";
'use client';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Providers = Providers;
var react_1 = __importDefault(require("react"));
var react_hot_toast_1 = require("react-hot-toast");
var next_1 = require("@vercel/speed-insights/next");
var react_2 = require("@vercel/analytics/react");
var ThemeContext_1 = require("@/lib/ThemeContext");
function Providers(_a) {
    var children = _a.children;
    var _b = react_1.default.useState(false), mounted = _b[0], setMounted = _b[1];
    react_1.default.useEffect(function () {
        setMounted(true);
    }, []);
    if (!mounted) {
        return null;
    }
    return (<ThemeContext_1.ThemeProvider>
      <react_hot_toast_1.Toaster position="top-right" toastOptions={{
            style: {
                background: '#1e293b',
                color: '#fff',
                border: '1px solid #334155',
            },
        }}/>
      {children}
      <next_1.SpeedInsights />
      <react_2.Analytics />
    </ThemeContext_1.ThemeProvider>);
}

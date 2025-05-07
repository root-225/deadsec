"use strict";
/**
 * Color palette utility for maintaining theme consistency across the application
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.serviceColors = exports.colors = void 0;
exports.getServiceGradient = getServiceGradient;
/**
 * Application color palette
 */
exports.colors = {
    primary: 'blue',
    secondary: 'purple',
    accent: 'cyan',
    background: {
        light: 'bg-white',
        dark: 'bg-slate-900',
    },
    text: {
        light: 'text-slate-900',
        dark: 'text-white',
    },
    gradients: {
        primary: 'from-blue-500 to-purple-500',
        secondary: 'from-cyan-500 to-blue-500',
    },
};
/**
 * Service-specific color schemes
 */
exports.serviceColors = {
    cloud: {
        primary: 'blue-500',
        secondary: 'cyan-400',
        gradient: 'from-blue-500 to-cyan-400',
        textGradient: 'from-blue-600 to-cyan-500',
        bgGradient: 'from-blue-50 to-cyan-50',
        darkBgGradient: 'from-blue-900/20 to-cyan-900/20',
    },
    security: {
        primary: 'red-500',
        secondary: 'orange-400',
        gradient: 'from-red-500 to-orange-400',
        textGradient: 'from-red-600 to-orange-500',
        bgGradient: 'from-red-50 to-orange-50',
        darkBgGradient: 'from-red-900/20 to-orange-900/20',
    },
    ai: {
        primary: 'purple-500',
        secondary: 'indigo-400',
        gradient: 'from-purple-500 to-indigo-400',
        textGradient: 'from-purple-600 to-indigo-500',
        bgGradient: 'from-purple-50 to-indigo-50',
        darkBgGradient: 'from-purple-900/20 to-indigo-900/20',
    },
    digital: {
        primary: 'green-500',
        secondary: 'teal-400',
        gradient: 'from-green-500 to-teal-400',
        textGradient: 'from-green-600 to-teal-500',
        bgGradient: 'from-green-50 to-teal-50',
        darkBgGradient: 'from-green-900/20 to-teal-900/20',
    },
};
/**
 * Get CSS gradient class for a service
 * @param service - Service name (cloud, security, ai, digital)
 * @param type - Type of gradient (gradient, textGradient, bgGradient)
 * @param isDark - Whether to use dark mode version for backgrounds
 * @returns CSS class for the gradient
 */
function getServiceGradient(service, type, isDark) {
    if (type === void 0) { type = 'gradient'; }
    if (isDark === void 0) { isDark = false; }
    var scheme = exports.serviceColors[service];
    if (!scheme) {
        return '';
    }
    if (type === 'bgGradient' && isDark) {
        return "bg-gradient-to-r ".concat(scheme.darkBgGradient);
    }
    return "bg-gradient-to-r ".concat(scheme[type]);
}

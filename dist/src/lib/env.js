"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.env = void 0;
var requiredEnvVars = [
    'JWT_SECRET',
    'NODE_ENV'
];
function getEnvVar(key) {
    var value = process.env[key];
    if (!value) {
        throw new Error("Missing required environment variable: ".concat(key));
    }
    return value;
}
exports.env = {
    JWT_SECRET: getEnvVar('JWT_SECRET'),
    NODE_ENV: getEnvVar('NODE_ENV'),
    IS_PRODUCTION: process.env.NODE_ENV === 'production',
};

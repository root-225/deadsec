"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importStar(require("mongoose"));
var InscriptionSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: [true, 'Le nom est requis'],
        trim: true,
    },
    email: {
        type: String,
        required: [true, 'L\'email est requis'],
        trim: true,
        lowercase: true,
        match: [/^\S+@\S+\.\S+$/, 'Veuillez entrer une adresse email valide'],
    },
    phone: {
        type: String,
        trim: true,
        // Add validation if needed, e.g., match: [/\+?[\d\s-]{10,}/, 'Veuillez entrer un numéro de téléphone valide']
    },
    formation: {
        type: String,
        required: [true, 'La formation est requise'],
        trim: true,
        default: 'Cybersécurité', // Default to Cybersecurity for now, can be made dynamic
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});
exports.default = mongoose_1.default.models.Inscription || mongoose_1.default.model('Inscription', InscriptionSchema);

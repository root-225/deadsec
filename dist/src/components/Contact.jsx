"use strict";
'use client';
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Contact;
var react_1 = __importStar(require("react"));
function Contact() {
    var _this = this;
    var _a = (0, react_1.useState)({
        name: '',
        email: '',
        message: '',
        subject: '',
        phone: '',
    }), formData = _a[0], setFormData = _a[1];
    var _b = (0, react_1.useState)(false), isSubmitting = _b[0], setIsSubmitting = _b[1];
    var _c = (0, react_1.useState)('idle'), submitStatus = _c[0], setSubmitStatus = _c[1];
    var _d = (0, react_1.useState)(0), characterCount = _d[0], setCharacterCount = _d[1];
    var _e = (0, react_1.useState)({}), formErrors = _e[0], setFormErrors = _e[1];
    var validateEmail = function (email) {
        var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    };
    var validatePhone = function (phone) {
        var re = /^\+?[\d\s-]{10,}$/;
        return phone === '' || re.test(phone);
    };
    var validateForm = function () {
        var errors = {};
        if (!formData.name.trim()) {
            errors.name = 'Le nom est requis';
        }
        if (!formData.email.trim()) {
            errors.email = 'L\'email est requis';
        }
        else if (!validateEmail(formData.email)) {
            errors.email = 'Veuillez entrer une adresse email valide';
        }
        if (!formData.subject) {
            errors.subject = 'Veuillez sélectionner un sujet';
        }
        if (!formData.message.trim()) {
            errors.message = 'Le message est requis';
        }
        else if (formData.message.length < 10) {
            errors.message = 'Le message doit contenir au moins 10 caractères';
        }
        if (formData.phone && !validatePhone(formData.phone)) {
            errors.phone = 'Veuillez entrer un numéro de téléphone valide';
        }
        setFormErrors(errors);
        return Object.keys(errors).length === 0;
    };
    var handleSubmit = function (e) { return __awaiter(_this, void 0, void 0, function () {
        var response, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    e.preventDefault();
                    if (!validateForm()) {
                        return [2 /*return*/];
                    }
                    setIsSubmitting(true);
                    setSubmitStatus('idle');
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, 4, 5]);
                    return [4 /*yield*/, fetch('/api/contact', {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json',
                            },
                            body: JSON.stringify({
                                name: formData.name,
                                email: formData.email,
                                subject: formData.subject,
                                message: formData.message,
                                phone: formData.phone || 'Non fourni',
                            }),
                        })];
                case 2:
                    response = _a.sent();
                    if (!response.ok) {
                        throw new Error('Échec de l\'envoi du message');
                    }
                    setSubmitStatus('success');
                    setFormData({ name: '', email: '', message: '', subject: '', phone: '' });
                    setCharacterCount(0);
                    return [3 /*break*/, 5];
                case 3:
                    error_1 = _a.sent();
                    console.error('Erreur lors de l\'envoi du message:', error_1);
                    setSubmitStatus('error');
                    return [3 /*break*/, 5];
                case 4:
                    setIsSubmitting(false);
                    return [7 /*endfinally*/];
                case 5: return [2 /*return*/];
            }
        });
    }); };
    var handleChange = function (e) {
        var _a = e.target, name = _a.name, value = _a.value;
        setFormData(function (prev) {
            var _a;
            return (__assign(__assign({}, prev), (_a = {}, _a[name] = value, _a)));
        });
        if (name === 'message') {
            setCharacterCount(value.length);
        }
        if (formErrors[name]) {
            setFormErrors(function (prev) {
                var _a;
                return (__assign(__assign({}, prev), (_a = {}, _a[name] = '', _a)));
            });
        }
        if (submitStatus !== 'idle')
            setSubmitStatus('idle');
    };
    (0, react_1.useEffect)(function () {
        var savedData = localStorage.getItem('contactFormData');
        if (savedData) {
            setFormData(JSON.parse(savedData));
        }
    }, []);
    (0, react_1.useEffect)(function () {
        localStorage.setItem('contactFormData', JSON.stringify(formData));
    }, [formData]);
    return (<section id="contact" className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-100 dark:bg-slate-800/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
            Contactez-Nous
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Nous sommes là pour répondre à toutes vos questions et vous aider à transformer votre vision en réalité.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="tech-card p-8 glow-effect group hover:glow relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-gradient"></div>
            
            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-1">
                    Nom <span className="text-red-400">*</span>
                  </label>
                  <div className="relative">
                    <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} className={"block w-full rounded-md bg-slate-800/50 border-slate-700 text-slate-300 shadow-sm focus:border-cyan-500 focus:ring-cyan-500 transition-all duration-300 ".concat(formErrors.name ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : '')} required disabled={isSubmitting}/>
                    {formErrors.name && (<p className="mt-1 text-sm text-red-400">{formErrors.name}</p>)}
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-1">
                    Email <span className="text-red-400">*</span>
                  </label>
                  <div className="relative">
                    <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} className={"block w-full rounded-md bg-slate-800/50 border-slate-700 text-slate-300 shadow-sm focus:border-cyan-500 focus:ring-cyan-500 transition-all duration-300 ".concat(formErrors.email ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : '')} required disabled={isSubmitting}/>
                    {formErrors.email && (<p className="mt-1 text-sm text-red-400">{formErrors.email}</p>)}
                  </div>
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-slate-300 mb-1">
                  Téléphone (Optionnel)
                </label>
                <div className="relative">
                  <input type="tel" name="phone" id="phone" value={formData.phone} onChange={handleChange} placeholder="+225 XX XX XX XX XX" className={"block w-full rounded-md bg-slate-800/50 border-slate-700 text-slate-300 shadow-sm focus:border-cyan-500 focus:ring-cyan-500 transition-all duration-300 ".concat(formErrors.phone ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : '')} disabled={isSubmitting}/>
                  {formErrors.phone && (<p className="mt-1 text-sm text-red-400">{formErrors.phone}</p>)}
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-slate-300 mb-1">
                  Sujet <span className="text-red-400">*</span>
                </label>
                <div className="relative">
                  <select name="subject" id="subject" value={formData.subject} onChange={handleChange} className={"block w-full rounded-md bg-slate-800/50 border-slate-700 text-slate-300 shadow-sm focus:border-cyan-500 focus:ring-cyan-500 transition-all duration-300 ".concat(formErrors.subject ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : '')} required disabled={isSubmitting}>
                    <option value="">Sélectionnez un sujet</option>
                    <option value="general">Renseignement Général</option>
                    <option value="support">Support Technique</option>
                    <option value="sales">Ventes</option>
                    <option value="partnership">Partenariat</option>
                    <option value="other">Autre</option>
                  </select>
                  {formErrors.subject && (<p className="mt-1 text-sm text-red-400">{formErrors.subject}</p>)}
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-1">
                  Message <span className="text-red-400">*</span>
                  <span className="float-right text-xs text-slate-400">
                    {characterCount} caractères
                  </span>
                </label>
                <div className="relative">
                  <textarea name="message" id="message" rows={4} value={formData.message} onChange={handleChange} className={"block w-full rounded-md bg-slate-800/50 border-slate-700 text-slate-300 shadow-sm focus:border-cyan-500 focus:ring-cyan-500 transition-all duration-300 ".concat(formErrors.message ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : '')} required disabled={isSubmitting} placeholder="Parlez-nous de votre projet ou de votre demande..."/>
                  {formErrors.message && (<p className="mt-1 text-sm text-red-400">{formErrors.message}</p>)}
                </div>
              </div>

              {submitStatus === 'success' && (<div className="p-4 rounded-md bg-green-500/10 border border-green-500/30 text-green-400">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/>
                    </svg>
                    Message envoyé avec succès ! Nous vous répondrons bientôt.
                  </div>
                </div>)}

              {submitStatus === 'error' && (<div className="p-4 rounded-md bg-red-500/10 border border-red-500/30 text-red-400">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>
                    </svg>
                    Échec de l'envoi du message. Veuillez réessayer.
                  </div>
                </div>)}

              <div className="flex items-center justify-between">
                <button type="button" onClick={function () {
            setFormData({ name: '', email: '', message: '', subject: '', phone: '' });
            setCharacterCount(0);
            setFormErrors({});
        }} className="text-slate-400 hover:text-cyan-400 transition-colors text-sm" disabled={isSubmitting}>
                  Effacer le formulaire
                </button>

                <button type="submit" className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 transition-all duration-300" disabled={isSubmitting}>
                  {isSubmitting ? (<>
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Envoi en cours...
                    </>) : ('Envoyer le message')}
                </button>
              </div>
            </form>
          </div>

          {/* Contact Information */}
          <div className="tech-card p-8 flex flex-col justify-between glow-effect group hover:glow relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/5 via-purple-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-gradient"></div>
            
            <div className="relative z-10">
              <h3 className="text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300 mb-6">
                Informations de Contact
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-slate-800 border border-slate-700">
                      <svg className="h-6 w-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-slate-300">Téléphone</h4>
                    <p className="mt-1 text-slate-400">+225 07 89 36 31 25</p>
                    <p className="mt-1 text-slate-400">Lun-Ven de 8h à 18h</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-slate-800 border border-slate-700">
                      <svg className="h-6 w-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-slate-300">Email</h4>
                    <p className="mt-1 text-slate-400">root225r01@gmail.com</p>
                    <p className="mt-1 text-slate-400">Nous répondons dans les plus brefs délais</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-slate-800 border border-slate-700">
                      <svg className="h-6 w-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-slate-300">Bureau</h4>
                    <p className="mt-1 text-slate-400">COCODY, ANGRE</p>
                    <p className="mt-1 text-slate-400">Abidjan, Côte d'Ivoire</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-10 relative z-10">
              <h3 className="text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300 mb-6">
                Suivez-Nous
              </h3>
              <div className="flex space-x-4">
                <a href="#" className="text-slate-400 hover:text-white transition-colors">
                  <span className="sr-only">Twitter</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"/>
                  </svg>
                </a>
                <a href="#" className="text-slate-400 hover:text-white transition-colors">
                  <span className="sr-only">GitHub</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.372.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"/>
                  </svg>
                </a>
                <a href="#" className="text-slate-400 hover:text-white transition-colors">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);
}

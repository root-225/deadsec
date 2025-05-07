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
exports.default = InscriptionForm;
var react_1 = __importStar(require("react"));
function InscriptionForm(_a) {
    var _this = this;
    var formationName = _a.formationName, onSuccess = _a.onSuccess;
    var _b = (0, react_1.useState)({
        name: '',
        email: '',
        phone: '',
    }), formData = _b[0], setFormData = _b[1];
    var _c = (0, react_1.useState)(false), isSubmitting = _c[0], setIsSubmitting = _c[1];
    var _d = (0, react_1.useState)('idle'), submitStatus = _d[0], setSubmitStatus = _d[1];
    var _e = (0, react_1.useState)({}), formErrors = _e[0], setFormErrors = _e[1];
    var _f = (0, react_1.useState)(null), serverError = _f[0], setServerError = _f[1];
    var validateEmail = function (email) {
        var re = /^[\S]+@[\S]+\.[\S]+$/;
        return re.test(email);
    };
    var validatePhone = function (phone) {
        // Basic phone validation (adjust regex as needed for specific formats)
        var re = /^\+?[\d\s-]{7,}$/;
        return phone === '' || re.test(phone); // Allow empty phone number
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
        if (formData.phone && !validatePhone(formData.phone)) {
            errors.phone = 'Veuillez entrer un numéro de téléphone valide (minimum 7 chiffres)';
        }
        setFormErrors(errors);
        return Object.keys(errors).length === 0;
    };
    var handleSubmit = function (e) { return __awaiter(_this, void 0, void 0, function () {
        var response, result_1, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    e.preventDefault();
                    setServerError(null); // Clear previous server errors
                    if (!validateForm()) {
                        return [2 /*return*/];
                    }
                    setIsSubmitting(true);
                    setSubmitStatus('idle');
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 4, 5, 6]);
                    return [4 /*yield*/, fetch('/api/inscriptions', {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json',
                            },
                            body: JSON.stringify(__assign(__assign({}, formData), { formation: formationName })),
                        })];
                case 2:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 3:
                    result_1 = _a.sent();
                    if (!response.ok) {
                        // Handle specific validation errors from the server
                        if (response.status === 400 && result_1.errors) {
                            setFormErrors(function (prev) { return (__assign(__assign({}, prev), result_1.errors)); });
                            setServerError(result_1.message || 'Erreur de validation du serveur.');
                        }
                        else {
                            throw new Error(result_1.message || 'Échec de l\'inscription');
                        }
                        setSubmitStatus('error');
                    }
                    else {
                        setSubmitStatus('success');
                        setFormData({ name: '', email: '', phone: '' }); // Clear form
                        setFormErrors({});
                        if (onSuccess)
                            onSuccess(); // Call success callback if provided
                    }
                    return [3 /*break*/, 6];
                case 4:
                    error_1 = _a.sent();
                    console.error('Erreur lors de l\'inscription:', error_1);
                    setSubmitStatus('error');
                    setServerError(error_1.message || 'Une erreur inattendue est survenue.');
                    return [3 /*break*/, 6];
                case 5:
                    setIsSubmitting(false);
                    return [7 /*endfinally*/];
                case 6: return [2 /*return*/];
            }
        });
    }); };
    var handleChange = function (e) {
        var _a = e.target, name = _a.name, value = _a.value;
        setFormData(function (prev) {
            var _a;
            return (__assign(__assign({}, prev), (_a = {}, _a[name] = value, _a)));
        });
        // Clear validation error for the field being changed
        if (formErrors[name]) {
            setFormErrors(function (prev) {
                var _a;
                return (__assign(__assign({}, prev), (_a = {}, _a[name] = '', _a)));
            });
        }
        // Reset submit status if user starts typing again after an error/success
        if (submitStatus !== 'idle')
            setSubmitStatus('idle');
        setServerError(null); // Clear server error on change
    };
    return (<div className="tech-card p-6 md:p-8 glow-effect group hover:glow relative overflow-hidden bg-white dark:bg-gray-800 rounded-xl shadow-lg">
       <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 via-orange-500/10 to-yellow-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-gradient"></div>
      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center relative z-10">Inscription à la Formation {formationName}</h3>
      <form onSubmit={handleSubmit} className="space-y-5 relative z-10">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Nom Complet <span className="text-red-500">*</span>
          </label>
          <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} className={"block w-full rounded-md bg-gray-50 dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white shadow-sm focus:border-red-500 focus:ring-red-500 transition-all duration-300 ".concat(formErrors.name ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : '')} required disabled={isSubmitting} aria-invalid={!!formErrors.name} aria-describedby={formErrors.name ? 'name-error' : undefined}/>
          {formErrors.name && (<p id="name-error" className="mt-1 text-sm text-red-500 dark:text-red-400">{formErrors.name}</p>)}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Adresse Email <span className="text-red-500">*</span>
          </label>
          <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} className={"block w-full rounded-md bg-gray-50 dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white shadow-sm focus:border-red-500 focus:ring-red-500 transition-all duration-300 ".concat(formErrors.email ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : '')} required disabled={isSubmitting} aria-invalid={!!formErrors.email} aria-describedby={formErrors.email ? 'email-error' : undefined}/>
          {formErrors.email && (<p id="email-error" className="mt-1 text-sm text-red-500 dark:text-red-400">{formErrors.email}</p>)}
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Numéro de Téléphone <span className="text-gray-500 dark:text-gray-400">(Optionnel)</span>
          </label>
          <input type="tel" name="phone" id="phone" value={formData.phone} onChange={handleChange} className={"block w-full rounded-md bg-gray-50 dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white shadow-sm focus:border-red-500 focus:ring-red-500 transition-all duration-300 ".concat(formErrors.phone ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : '')} disabled={isSubmitting} aria-invalid={!!formErrors.phone} aria-describedby={formErrors.phone ? 'phone-error' : undefined}/>
          {formErrors.phone && (<p id="phone-error" className="mt-1 text-sm text-red-500 dark:text-red-400">{formErrors.phone}</p>)}
        </div>

        <div>
          <button type="submit" disabled={isSubmitting} className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gradient-to-r from-red-600 to-orange-500 hover:from-red-700 hover:to-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300">
            {isSubmitting ? 'Envoi en cours...' : 'S\'inscrire Maintenant'}
          </button>
        </div>

        {submitStatus === 'success' && (<p className="text-center text-green-600 dark:text-green-400 font-medium">Inscription réussie ! Nous vous contacterons bientôt.</p>)}
        {(submitStatus === 'error' || serverError) && (<p className="text-center text-red-600 dark:text-red-400 font-medium">
            {serverError || 'Une erreur est survenue lors de l\'inscription. Veuillez réessayer.'}
          </p>)}
      </form>
    </div>);
}

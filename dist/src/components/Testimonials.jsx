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
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Testimonials;
var react_1 = __importStar(require("react"));
var framer_motion_1 = require("framer-motion");
var fa_1 = require("react-icons/fa");
var avatarUtils_1 = require("@/lib/avatarUtils");
function Testimonials() {
    var testimonials = [
        {
            id: 1,
            name: 'Alexandre Couture',
            position: 'Directeur Technique',
            company: 'TechSolutions',
            testimonial: "L'équipe de deadsec a transformé notre infrastructure cloud, ce qui nous a permis de réduire nos coûts de 30% tout en améliorant nos performances.",
        },
        {
            id: 2,
            name: 'Marie Lefebvre',
            position: 'CEO',
            company: 'InnovateNow',
            testimonial: "Leur expertise en IA nous a permis de développer des solutions innovantes qui ont révolutionné notre approche client. Un partenaire de confiance.",
        },
        {
            id: 3,
            name: 'Thomas Dubois',
            position: 'Responsable Sécurité',
            company: 'SecureData',
            testimonial: "Depuis que nous avons fait appel à deadsec pour notre cybersécurité, nous n'avons eu aucune intrusion. Leur approche proactive nous offre une tranquillité d'esprit.",
        },
        {
            id: 4,
            name: 'Sophie Moreau',
            position: 'Directrice Marketing',
            company: 'DigitalGrowth',
            testimonial: "La transformation digitale menée par deadsec a permis à notre entreprise d'augmenter son engagement client de 45% et nos conversions de 25%. Résultats exceptionnels!",
        }
    ];
    var _a = (0, react_1.useState)(0), currentIndex = _a[0], setCurrentIndex = _a[1];
    var _b = (0, react_1.useState)(0), direction = _b[0], setDirection = _b[1];
    var _c = (0, react_1.useState)(true), autoplay = _c[0], setAutoplay = _c[1];
    var nextTestimonial = function () {
        setDirection(1);
        setCurrentIndex(function (prevIndex) { return (prevIndex + 1) % testimonials.length; });
    };
    var prevTestimonial = function () {
        setDirection(-1);
        setCurrentIndex(function (prevIndex) { return (prevIndex - 1 + testimonials.length) % testimonials.length; });
    };
    (0, react_1.useEffect)(function () {
        var interval;
        if (autoplay) {
            interval = setInterval(function () {
                nextTestimonial();
            }, 5000);
        }
        return function () { return clearInterval(interval); };
    }, [autoplay, testimonials.length]);
    var handleMouseEnter = function () { return setAutoplay(false); };
    var handleMouseLeave = function () { return setAutoplay(true); };
    var variants = {
        enter: function (direction) { return ({
            x: direction > 0 ? 1000 : -1000,
            opacity: 0,
        }); },
        center: {
            x: 0,
            opacity: 1,
        },
        exit: function (direction) { return ({
            x: direction < 0 ? 1000 : -1000,
            opacity: 0,
        }); },
    };
    var currentTestimonial = testimonials[currentIndex];
    var avatarUrl = currentTestimonial.avatar || (0, avatarUtils_1.getAvatarPlaceholder)(currentTestimonial.name);
    return (<section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-100 dark:bg-slate-800/30">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
            Ce Que Disent Nos Clients
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Découvrez pourquoi nos clients nous font confiance pour leurs besoins technologiques.
          </p>
        </div>

        <div className="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <div className="h-[400px] md:h-[300px] relative overflow-hidden rounded-xl bg-white dark:bg-slate-800 shadow-lg">
            <framer_motion_1.AnimatePresence custom={direction} mode="wait">
              <framer_motion_1.motion.div key={currentIndex} custom={direction} variants={variants} initial="enter" animate="center" exit="exit" transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
        }} className="absolute inset-0 p-8 md:p-12 flex flex-col justify-center">
                <fa_1.FaQuoteLeft className="text-blue-500 dark:text-blue-400 h-10 w-10 mb-6"/>
                <p className="text-slate-700 dark:text-slate-200 text-lg md:text-xl italic mb-8">
                  "{currentTestimonial.testimonial}"
                </p>
                <div className="flex items-center">
                  <div className="flex-shrink-0 h-14 w-14 rounded-full bg-slate-200 dark:bg-slate-700 mr-4 overflow-hidden">
                    <img src={avatarUrl} alt={"Avatar of ".concat(currentTestimonial.name)} className="h-full w-full object-cover"/>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                      {currentTestimonial.name}
                    </h4>
                    <p className="text-slate-600 dark:text-slate-300">
                      {currentTestimonial.position}, {currentTestimonial.company}
                    </p>
                  </div>
                </div>
              </framer_motion_1.motion.div>
            </framer_motion_1.AnimatePresence>
          </div>

          <div className="absolute inset-y-0 left-0 flex items-center">
            <button onClick={prevTestimonial} className="p-2 rounded-full bg-white dark:bg-slate-700 shadow-md text-slate-700 dark:text-white hover:bg-slate-50 dark:hover:bg-slate-600 focus:outline-none transform -translate-x-1/2" aria-label="Previous testimonial">
              <fa_1.FaChevronLeft className="h-5 w-5"/>
            </button>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center">
            <button onClick={nextTestimonial} className="p-2 rounded-full bg-white dark:bg-slate-700 shadow-md text-slate-700 dark:text-white hover:bg-slate-50 dark:hover:bg-slate-600 focus:outline-none transform translate-x-1/2" aria-label="Next testimonial">
              <fa_1.FaChevronRight className="h-5 w-5"/>
            </button>
          </div>

          <div className="absolute -bottom-4 left-0 right-0 flex justify-center space-x-2">
            {testimonials.map(function (_, index) { return (<button key={index} onClick={function () {
                setDirection(index > currentIndex ? 1 : -1);
                setCurrentIndex(index);
            }} className={"h-3 w-3 rounded-full focus:outline-none ".concat(index === currentIndex
                ? 'bg-blue-500'
                : 'bg-slate-300 dark:bg-slate-600')} aria-label={"Go to testimonial ".concat(index + 1)}/>); })}
          </div>
        </div>
      </div>
    </section>);
}

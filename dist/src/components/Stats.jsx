"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Stats;
var react_1 = __importDefault(require("react"));
var framer_motion_1 = require("framer-motion");
var statsData = [
    {
        number: '50+',
        label: 'Successful Projects'
    },
    {
        number: '98%',
        label: 'Client Satisfaction'
    }
];
function Stats() {
    return (<section className="py-16 bg-[#020617]">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center items-center space-x-8">
          {statsData.map(function (stat, index) { return (<framer_motion_1.motion.div key={index} initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: index * 0.2 }} viewport={{ once: true }} className="text-center">
              <h3 className="text-4xl md:text-5xl font-bold text-blue-500 mb-2">
                {stat.number}
              </h3>
              <p className="text-lg text-white">
                {stat.label}
              </p>
            </framer_motion_1.motion.div>); })}
        </div>
      </div>
    </section>);
}

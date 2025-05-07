"use strict";
'use client';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var clsx_1 = __importDefault(require("clsx"));
var LoadingSpinner = function (_a) {
    var _b = _a.size, size = _b === void 0 ? 'md' : _b, _c = _a.className, className = _c === void 0 ? '' : _c, _d = _a.containerClassName, containerClassName = _d === void 0 ? '' : _d;
    var spinnerClasses = (0, clsx_1.default)('animate-spin rounded-full border-current border-r-transparent border-b-transparent border-l-transparent', {
        'h-4 w-4 border-2': size === 'sm',
        'h-8 w-8 border-2': size === 'md',
        'h-16 w-16 border-4': size === 'lg'
    }, className);
    var containerClasses = (0, clsx_1.default)('flex justify-center items-center', containerClassName);
    return (<div className={containerClasses}>
      <div className={spinnerClasses}></div>
    </div>);
};
exports.default = LoadingSpinner;

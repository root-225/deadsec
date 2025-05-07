"use strict";
'use client';
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var ErrorBoundary = /** @class */ (function (_super) {
    __extends(ErrorBoundary, _super);
    function ErrorBoundary() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            hasError: false
        };
        return _this;
    }
    ErrorBoundary.getDerivedStateFromError = function (error) {
        return { hasError: true, error: error };
    };
    ErrorBoundary.prototype.componentDidCatch = function (error, errorInfo) {
        console.error('Uncaught error:', error, errorInfo);
    };
    ErrorBoundary.prototype.render = function () {
        var _this = this;
        var _a;
        if (this.state.hasError) {
            return this.props.fallback || (<div className="min-h-screen bg-slate-900 flex items-center justify-center px-4">
          <div className="max-w-md w-full space-y-4 text-center">
            <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-6">
              <h2 className="text-xl font-semibold text-red-400 mb-2">Something went wrong</h2>
              <p className="text-slate-400 mb-4">
                {((_a = this.state.error) === null || _a === void 0 ? void 0 : _a.message) || 'An unexpected error occurred'}
              </p>
              <button onClick={function () { return _this.setState({ hasError: false }); }} className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors">
                Try again
              </button>
            </div>
          </div>
        </div>);
        }
        return this.props.children;
    };
    return ErrorBoundary;
}(react_1.Component));
exports.default = ErrorBoundary;

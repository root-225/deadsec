"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ServicesRedirect;
var navigation_1 = require("next/navigation");
function ServicesRedirect() {
    (0, navigation_1.redirect)('/services-list');
    return null; // This line will never be reached due to the redirect
}

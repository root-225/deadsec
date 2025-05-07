"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
exports.middleware = middleware;
var server_1 = require("next/server");
var jsonwebtoken_1 = require("jsonwebtoken");
function middleware(request) {
    // Vérifier si la route est protégée
    if (request.nextUrl.pathname.startsWith('/admin')) {
        var token = request.cookies.get('auth-token');
        // Si pas de token, rediriger vers la page de connexion
        if (!token) {
            return server_1.NextResponse.redirect(new URL('/login', request.url));
        }
        try {
            // Vérifier le token
            (0, jsonwebtoken_1.verify)(token.value, process.env.JWT_SECRET || 'default-secret');
            return server_1.NextResponse.next();
        }
        catch (error) {
            // Token invalide, rediriger vers la page de connexion
            return server_1.NextResponse.redirect(new URL('/login', request.url));
        }
    }
    return server_1.NextResponse.next();
}
exports.config = {
    matcher: [
        '/admin/:path*',
    ],
};

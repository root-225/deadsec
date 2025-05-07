"use strict";
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
exports.runtime = void 0;
exports.GET = GET;
exports.POST = POST;
exports.PUT = PUT;
exports.DELETE = DELETE;
var server_1 = require("next/server");
exports.runtime = 'nodejs';
// Mock service data
var mockServices = [
    {
        id: 1,
        title: "Web Development",
        description: "Custom websites and web applications built with modern technologies",
        icon: "code",
        features: ["Responsive Design", "SEO Optimization", "Performance Tuning"],
        status: "active",
        createdAt: new Date().toISOString()
    },
    {
        id: 2,
        title: "Mobile App Development",
        description: "Native and cross-platform mobile applications",
        icon: "smartphone",
        features: ["iOS & Android", "User-friendly UI/UX", "Push Notifications"],
        status: "active",
        createdAt: new Date().toISOString()
    },
    {
        id: 3,
        title: "Digital Marketing",
        description: "Comprehensive digital marketing strategies",
        icon: "trending_up",
        features: ["Social Media Management", "SEO/SEM", "Content Marketing"],
        status: "active",
        createdAt: new Date().toISOString()
    }
];
// GET /api/services
function GET() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            try {
                return [2 /*return*/, server_1.NextResponse.json(mockServices)];
            }
            catch (error) {
                return [2 /*return*/, server_1.NextResponse.json({ error: 'Failed to fetch services' }, { status: 500 })];
            }
            return [2 /*return*/];
        });
    });
}
// POST /api/services - Mock implementation
function POST(request) {
    return __awaiter(this, void 0, void 0, function () {
        var body, newService, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, request.json()];
                case 1:
                    body = _a.sent();
                    newService = {
                        id: mockServices.length + 1,
                        title: body.title,
                        description: body.description,
                        icon: body.icon,
                        features: body.features,
                        status: body.status || "active",
                        createdAt: new Date().toISOString()
                    };
                    return [2 /*return*/, server_1.NextResponse.json(newService)];
                case 2:
                    error_1 = _a.sent();
                    return [2 /*return*/, server_1.NextResponse.json({ error: 'Failed to create service' }, { status: 500 })];
                case 3: return [2 /*return*/];
            }
        });
    });
}
// These routes are no longer needed without a database, but kept as mock implementations
// for compatibility with any existing code
// PUT /api/services/:id
function PUT(request) {
    return __awaiter(this, void 0, void 0, function () {
        var body, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, request.json()];
                case 1:
                    body = _a.sent();
                    return [2 /*return*/, server_1.NextResponse.json(__assign(__assign({}, body), { updatedAt: new Date().toISOString() }))];
                case 2:
                    error_2 = _a.sent();
                    return [2 /*return*/, server_1.NextResponse.json({ error: 'Failed to update service' }, { status: 500 })];
                case 3: return [2 /*return*/];
            }
        });
    });
}
// DELETE /api/services/:id
function DELETE(request) {
    return __awaiter(this, void 0, void 0, function () {
        var searchParams, id;
        return __generator(this, function (_a) {
            try {
                searchParams = new URL(request.url).searchParams;
                id = searchParams.get('id');
                if (!id) {
                    return [2 /*return*/, server_1.NextResponse.json({ error: 'Service ID is required' }, { status: 400 })];
                }
                return [2 /*return*/, server_1.NextResponse.json({ message: 'Service deleted successfully' })];
            }
            catch (error) {
                return [2 /*return*/, server_1.NextResponse.json({ error: 'Failed to delete service' }, { status: 500 })];
            }
            return [2 /*return*/];
        });
    });
}

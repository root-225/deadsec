"use strict";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.runtime = void 0;
exports.GET = GET;
exports.DELETE = DELETE;
var server_1 = require("next/server");
var mongodb_1 = __importDefault(require("@/config/mongodb"));
var ContactSubmission_1 = __importDefault(require("@/models/ContactSubmission"));
var User_1 = __importDefault(require("@/models/User"));
exports.runtime = 'nodejs';
// GET /api/admin
function GET(request) {
    return __awaiter(this, void 0, void 0, function () {
        var searchParams, collection, page, limit, skip, data, total, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 9, , 10]);
                    searchParams = new URL(request.url).searchParams;
                    collection = searchParams.get('collection') || 'contacts';
                    page = parseInt(searchParams.get('page') || '1');
                    limit = parseInt(searchParams.get('limit') || '10');
                    skip = (page - 1) * limit;
                    return [4 /*yield*/, (0, mongodb_1.default)()];
                case 1:
                    _a.sent();
                    data = void 0;
                    total = void 0;
                    if (!(collection === 'contacts')) return [3 /*break*/, 4];
                    return [4 /*yield*/, ContactSubmission_1.default.find({})
                            .sort({ createdAt: -1 })
                            .skip(skip)
                            .limit(limit)];
                case 2:
                    data = _a.sent();
                    return [4 /*yield*/, ContactSubmission_1.default.countDocuments()];
                case 3:
                    total = _a.sent();
                    return [3 /*break*/, 8];
                case 4:
                    if (!(collection === 'users')) return [3 /*break*/, 7];
                    return [4 /*yield*/, User_1.default.find({})
                            .sort({ createdAt: -1 })
                            .skip(skip)
                            .limit(limit)];
                case 5:
                    data = _a.sent();
                    return [4 /*yield*/, User_1.default.countDocuments()];
                case 6:
                    total = _a.sent();
                    return [3 /*break*/, 8];
                case 7: return [2 /*return*/, server_1.NextResponse.json({ error: 'Invalid collection specified' }, { status: 400 })];
                case 8: return [2 /*return*/, server_1.NextResponse.json({
                        data: data,
                        pagination: {
                            total: total,
                            page: page,
                            limit: limit,
                            totalPages: Math.ceil(total / limit)
                        }
                    })];
                case 9:
                    error_1 = _a.sent();
                    console.error('Database error:', error_1);
                    return [2 /*return*/, server_1.NextResponse.json({ error: 'Failed to fetch data' }, { status: 500 })];
                case 10: return [2 /*return*/];
            }
        });
    });
}
// DELETE /api/admin
function DELETE(request) {
    return __awaiter(this, void 0, void 0, function () {
        var searchParams, collection, id, result, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 7, , 8]);
                    searchParams = new URL(request.url).searchParams;
                    collection = searchParams.get('collection');
                    id = searchParams.get('id');
                    if (!collection || !id) {
                        return [2 /*return*/, server_1.NextResponse.json({ error: 'Collection and ID are required' }, { status: 400 })];
                    }
                    return [4 /*yield*/, (0, mongodb_1.default)()];
                case 1:
                    _a.sent();
                    result = void 0;
                    if (!(collection === 'contacts')) return [3 /*break*/, 3];
                    return [4 /*yield*/, ContactSubmission_1.default.findByIdAndDelete(id)];
                case 2:
                    result = _a.sent();
                    return [3 /*break*/, 6];
                case 3:
                    if (!(collection === 'users')) return [3 /*break*/, 5];
                    return [4 /*yield*/, User_1.default.findByIdAndDelete(id)];
                case 4:
                    result = _a.sent();
                    return [3 /*break*/, 6];
                case 5: return [2 /*return*/, server_1.NextResponse.json({ error: 'Invalid collection specified' }, { status: 400 })];
                case 6:
                    if (!result) {
                        return [2 /*return*/, server_1.NextResponse.json({ error: 'Record not found' }, { status: 404 })];
                    }
                    return [2 /*return*/, server_1.NextResponse.json({ message: 'Record deleted successfully' }, { status: 200 })];
                case 7:
                    error_2 = _a.sent();
                    console.error('Database error:', error_2);
                    return [2 /*return*/, server_1.NextResponse.json({ error: 'Failed to delete record' }, { status: 500 })];
                case 8: return [2 /*return*/];
            }
        });
    });
}

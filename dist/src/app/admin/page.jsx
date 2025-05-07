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
exports.default = AdminDashboard;
var react_1 = require("react");
var navigation_1 = require("next/navigation");
function AdminDashboard() {
    var _this = this;
    var _a = (0, react_1.useState)([]), records = _a[0], setRecords = _a[1];
    var _b = (0, react_1.useState)('contacts'), collection = _b[0], setCollection = _b[1];
    var _c = (0, react_1.useState)({ total: 0, page: 1, limit: 10, totalPages: 0 }), pagination = _c[0], setPagination = _c[1];
    var _d = (0, react_1.useState)(true), loading = _d[0], setLoading = _d[1];
    var _e = (0, react_1.useState)(''), error = _e[0], setError = _e[1];
    var fetchData = function () { return __awaiter(_this, void 0, void 0, function () {
        var response, data, err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, 4, 5]);
                    setLoading(true);
                    return [4 /*yield*/, fetch("/api/admin?collection=".concat(collection, "&page=").concat(pagination.page, "&limit=").concat(pagination.limit))];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    if (!response.ok)
                        throw new Error(data.error || 'Failed to fetch data');
                    setRecords(data.data);
                    setPagination(data.pagination);
                    return [3 /*break*/, 5];
                case 3:
                    err_1 = _a.sent();
                    setError(err_1 instanceof Error ? err_1.message : 'An error occurred');
                    return [3 /*break*/, 5];
                case 4:
                    setLoading(false);
                    return [7 /*endfinally*/];
                case 5: return [2 /*return*/];
            }
        });
    }); };
    var handleDelete = function (id) { return __awaiter(_this, void 0, void 0, function () {
        var response, data, err_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!confirm('Are you sure you want to delete this record?'))
                        return [2 /*return*/];
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 5, , 6]);
                    return [4 /*yield*/, fetch("/api/admin?collection=".concat(collection, "&id=").concat(id), {
                            method: 'DELETE',
                        })];
                case 2:
                    response = _a.sent();
                    if (!!response.ok) return [3 /*break*/, 4];
                    return [4 /*yield*/, response.json()];
                case 3:
                    data = _a.sent();
                    throw new Error(data.error || 'Failed to delete record');
                case 4:
                    fetchData(); // Refresh the data
                    return [3 /*break*/, 6];
                case 5:
                    err_2 = _a.sent();
                    setError(err_2 instanceof Error ? err_2.message : 'Failed to delete record');
                    return [3 /*break*/, 6];
                case 6: return [2 /*return*/];
            }
        });
    }); };
    (0, react_1.useEffect)(function () {
        fetchData();
    }, [collection, pagination.page]);
    var router = (0, navigation_1.useRouter)();
    var handleLogout = function () { return __awaiter(_this, void 0, void 0, function () {
        var response, err_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, fetch('/api/auth/logout', {
                            method: 'POST',
                        })];
                case 1:
                    response = _a.sent();
                    if (!response.ok) {
                        throw new Error('Erreur lors de la déconnexion');
                    }
                    router.push('/login');
                    return [3 /*break*/, 3];
                case 2:
                    err_3 = _a.sent();
                    setError(err_3 instanceof Error ? err_3.message : 'Erreur lors de la déconnexion');
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); };
    return (<div className="p-6 max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Tableau de bord</h1>
        <button onClick={handleLogout} className="px-4 py-2 text-white bg-red-600 hover:bg-red-700 rounded-md">
          Déconnexion
        </button>
      </div>
      
      <div className="mb-6 flex gap-4">
        <button onClick={function () { return setCollection('contacts'); }} className={"px-4 py-2 rounded ".concat(collection === 'contacts' ? 'bg-blue-500 text-white' : 'bg-gray-200')}>
          Contacts
        </button>
        <button onClick={function () { return setCollection('users'); }} className={"px-4 py-2 rounded ".concat(collection === 'users' ? 'bg-blue-500 text-white' : 'bg-gray-200')}>
          Users
        </button>
      </div>

      {error && (<div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          {error}
        </div>)}

      {loading ? (<div className="text-center py-8">Loading...</div>) : (<>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="px-6 py-3 border-b text-left">Name</th>
                  <th className="px-6 py-3 border-b text-left">Email</th>
                  {collection === 'contacts' && (<>
                      <th className="px-6 py-3 border-b text-left">Subject</th>
                      <th className="px-6 py-3 border-b text-left">Message</th>
                      <th className="px-6 py-3 border-b text-left">Phone</th>
                    </>)}
                  <th className="px-6 py-3 border-b text-left">Created At</th>
                  <th className="px-6 py-3 border-b text-left">Actions</th>
                </tr>
              </thead>
              <tbody>
                {records.map(function (record) { return (<tr key={record._id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 border-b">{record.name}</td>
                    <td className="px-6 py-4 border-b">{record.email}</td>
                    {collection === 'contacts' && (<>
                        <td className="px-6 py-4 border-b">{record.subject}</td>
                        <td className="px-6 py-4 border-b">{record.message}</td>
                        <td className="px-6 py-4 border-b">{record.phone}</td>
                      </>)}
                    <td className="px-6 py-4 border-b">
                      {new Date(record.createdAt).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4 border-b">
                      <button onClick={function () { return handleDelete(record._id); }} className="text-red-600 hover:text-red-800">
                        Delete
                      </button>
                    </td>
                  </tr>); })}
              </tbody>
            </table>
          </div>

          <div className="mt-4 flex justify-between items-center">
            <div>
              Total: {pagination.total} records
            </div>
            <div className="flex gap-2">
              <button onClick={function () { return setPagination(function (prev) { return (__assign(__assign({}, prev), { page: prev.page - 1 })); }); }} disabled={pagination.page <= 1} className="px-4 py-2 rounded bg-gray-200 disabled:opacity-50">
                Previous
              </button>
              <span className="px-4 py-2">
                Page {pagination.page} of {pagination.totalPages}
              </span>
              <button onClick={function () { return setPagination(function (prev) { return (__assign(__assign({}, prev), { page: prev.page + 1 })); }); }} disabled={pagination.page >= pagination.totalPages} className="px-4 py-2 rounded bg-gray-200 disabled:opacity-50">
                Next
              </button>
            </div>
          </div>
        </>)}
    </div>);
}

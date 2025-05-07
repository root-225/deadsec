"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var ContactSubmissionSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    subject: { type: String, required: true },
    message: { type: String, required: true },
    phone: { type: String, required: false },
    createdAt: { type: Date, default: Date.now },
});
exports.default = mongoose_1.models.ContactSubmission || (0, mongoose_1.model)("ContactSubmission", ContactSubmissionSchema);

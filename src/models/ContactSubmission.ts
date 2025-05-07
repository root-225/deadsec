import mongoose, { Schema, Document, models, model } from "mongoose";

export interface IContactSubmission extends Document {
  name: string;
  email: string;
  subject: string;
  message: string;
  phone?: string;
  createdAt: Date;
}

const ContactSubmissionSchema: Schema = new Schema<IContactSubmission>({
  name: { type: String, required: true },
  email: { type: String, required: true },
  subject: { type: String, required: true },
  message: { type: String, required: true },
  phone: { type: String, required: false },
  createdAt: { type: Date, default: Date.now },
});

export default models.ContactSubmission || model<IContactSubmission>("ContactSubmission", ContactSubmissionSchema);
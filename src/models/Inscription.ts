import mongoose, { Document, Schema } from 'mongoose';

export interface IInscription extends Document {
  name: string;
  email: string;
  phone?: string;
  formation: string; // To specify which formation the inscription is for
  status: 'pending' | 'approved' | 'rejected' | 'waiting';
  createdAt: Date;
}

const InscriptionSchema: Schema = new Schema({
  name: {
    type: String,
    required: [true, 'Le nom est requis'],
    trim: true,
  },
  email: {
    type: String,
    required: [true, 'L\'email est requis'],
    trim: true,
    lowercase: true,
    match: [/^\S+@\S+\.\S+$/, 'Veuillez entrer une adresse email valide'],
  },
  phone: {
    type: String,
    trim: true,
    // Add validation if needed, e.g., match: [/\+?[\d\s-]{10,}/, 'Veuillez entrer un numéro de téléphone valide']
  },
  formation: {
    type: String,
    required: [true, 'La formation est requise'],
    trim: true,
    default: 'Cybersécurité', // Default to Cybersecurity for now, can be made dynamic
  },
  status: {
    type: String,
    enum: ['pending', 'approved', 'rejected', 'waiting'],
    default: 'pending',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.Inscription || mongoose.model<IInscription>('Inscription', InscriptionSchema);
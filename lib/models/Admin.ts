import { Schema, model, models } from 'mongoose';

const AdminSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    passwordHash: { type: String, required: true },
    role: { type: String, enum: ['admin', 'editor'], default: 'admin' }
  },
  { timestamps: true }
);

export const Admin = models.Admin || model('Admin', AdminSchema);

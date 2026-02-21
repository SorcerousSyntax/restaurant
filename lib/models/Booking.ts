import { Schema, model, models } from 'mongoose';

const BookingSchema = new Schema(
  {
    name: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String, required: true },
    guests: { type: Number, required: true },
    date: { type: String, required: true },
    timeSlot: { type: String, required: true },
    specialRequest: { type: String },
    status: { type: String, enum: ['pending', 'confirmed', 'cancelled'], default: 'pending' }
  },
  { timestamps: true }
);

BookingSchema.index({ date: 1, timeSlot: 1 }, { unique: true });

export const Booking = models.Booking || model('Booking', BookingSchema);

import { z } from 'zod';

export const bookingSchema = z.object({
  name: z.string().min(2),
  phone: z.string().min(10),
  email: z.string().email(),
  guests: z.coerce.number().min(1).max(20),
  date: z.string().min(1),
  timeSlot: z.string().min(1),
  specialRequest: z.string().max(300).optional().or(z.literal(''))
});

export const menuItemSchema = z.object({
  name: z.string().min(2),
  category: z.enum(['North Indian', 'Pizza', 'Coffee', 'Starters', 'Desserts']),
  description: z.string().min(10),
  price: z.coerce.number().min(50),
  isVeg: z.boolean(),
  image: z.string().url().optional().or(z.literal(''))
});

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8)
});

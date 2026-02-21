import { Schema, model, models } from 'mongoose';

const MenuItemSchema = new Schema(
  {
    name: { type: String, required: true },
    category: { type: String, required: true, index: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    isVeg: { type: Boolean, default: true },
    image: { type: String }
  },
  { timestamps: true }
);

export const MenuItem = models.MenuItem || model('MenuItem', MenuItemSchema);

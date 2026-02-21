import { NextResponse } from 'next/server';
import { connectDb } from '@/lib/db';
import { MenuItem } from '@/lib/models/MenuItem';
import { menuItemSchema } from '@/lib/validation/schemas';
import { requireRole } from '@/lib/auth';

export async function GET() {
  await connectDb();
  const items = await MenuItem.find().sort({ createdAt: -1 }).lean();
  return NextResponse.json(items);
}

export async function POST(req: Request) {
  try {
    requireRole(['admin', 'editor']);
    const body = await req.json();
    const parsed = menuItemSchema.parse(body);
    await connectDb();
    const created = await MenuItem.create(parsed);
    return NextResponse.json(created, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Unable to create item', detail: String(error) }, { status: 400 });
  }
}

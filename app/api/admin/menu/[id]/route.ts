import { NextResponse } from 'next/server';
import { requireRole } from '@/lib/auth';
import { connectDb } from '@/lib/db';
import { MenuItem } from '@/lib/models/MenuItem';
import { menuItemSchema } from '@/lib/validation/schemas';

export async function PATCH(req: Request, { params }: { params: { id: string } }) {
  try {
    requireRole(['admin', 'editor']);
    const parsed = menuItemSchema.partial().parse(await req.json());
    await connectDb();
    const item = await MenuItem.findByIdAndUpdate(params.id, parsed, { new: true });
    return NextResponse.json(item);
  } catch {
    return NextResponse.json({ error: 'Unauthorized or invalid' }, { status: 401 });
  }
}

export async function DELETE(_: Request, { params }: { params: { id: string } }) {
  try {
    requireRole(['admin']);
    await connectDb();
    await MenuItem.findByIdAndDelete(params.id);
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
}

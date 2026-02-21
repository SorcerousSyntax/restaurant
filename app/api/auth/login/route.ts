import { NextResponse } from 'next/server';
import { connectDb } from '@/lib/db';
import { Admin } from '@/lib/models/Admin';
import { comparePassword, signAuthToken } from '@/lib/auth';
import { loginSchema } from '@/lib/validation/schemas';

export async function POST(req: Request) {
  try {
    const { email, password } = loginSchema.parse(await req.json());
    await connectDb();
    const admin = await Admin.findOne({ email }).lean();
    if (!admin || !(await comparePassword(password, admin.passwordHash))) {
      return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
    }
    const token = signAuthToken({ sub: String(admin._id), role: admin.role });
    const res = NextResponse.json({ ok: true });
    res.cookies.set('auth_token', token, { httpOnly: true, sameSite: 'lax', secure: process.env.NODE_ENV === 'production', path: '/' });
    return res;
  } catch {
    return NextResponse.json({ error: 'Invalid payload' }, { status: 400 });
  }
}

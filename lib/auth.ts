import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { cookies } from 'next/headers';

const JWT_SECRET = process.env.JWT_SECRET || 'dev-secret';

export async function hashPassword(password: string) {
  return bcrypt.hash(password, 10);
}

export async function comparePassword(password: string, hash: string) {
  return bcrypt.compare(password, hash);
}

export function signAuthToken(payload: { sub: string; role: string }) {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: '7d' });
}

export function verifyAuthToken(token: string) {
  return jwt.verify(token, JWT_SECRET) as { sub: string; role: string };
}

export function getAuthUser() {
  const token = cookies().get('auth_token')?.value;
  if (!token) return null;
  try {
    return verifyAuthToken(token);
  } catch {
    return null;
  }
}

export function requireRole(roles: string[]) {
  const user = getAuthUser();
  if (!user || !roles.includes(user.role)) {
    throw new Error('Unauthorized');
  }
  return user;
}

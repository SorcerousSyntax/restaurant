'use client';

import { useState } from 'react';
import { toast } from 'sonner';

export function AdminLoginForm() {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const res = await fetch('/api/auth/login', { method: 'POST', body: JSON.stringify({ email, password }) });
    setLoading(false);
    if (res.ok) {
      toast.success('Welcome admin');
      location.reload();
    } else {
      toast.error('Invalid credentials');
    }
  };

  return (
    <form onSubmit={submit} className="mx-auto max-w-md space-y-3 rounded-2xl glass p-6">
      <h1 className="font-serif text-3xl">Admin Login</h1>
      <input className="w-full rounded-xl border p-3 bg-transparent" type="email" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)} required />
      <input className="w-full rounded-xl border p-3 bg-transparent" type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} required />
      <button className="luxury-btn w-full bg-royal text-white" disabled={loading}>{loading ? 'Signing in...' : 'Sign In'}</button>
    </form>
  );
}

import { getAuthUser } from '@/lib/auth';
import { AdminPanel } from '@/components/shared/admin-panel';
import { AdminLoginForm } from '@/components/shared/admin-login-form';

export default function AdminPage() {
  const user = getAuthUser();
  if (!user) return <AdminLoginForm />;
  return <AdminPanel role={user.role} />;
}

'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function LogoutPage() {
  const router = useRouter();

  useEffect(() => {
    fetch('/auth/logout', {
      method: 'POST',
      credentials: 'include',
    }).finally(() => {
      router.push('/login');
    });
  }, [router]);

  return <p>Logging out...</p>;
}

import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/client';

const DashboardPage: React.FC = () => {
  const [session, loading] = useSession();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !session) {
      router.push('/login'); // Redirect to login if not authenticated
    }
  }, [loading, session, router]);

  return (
    <div>
      {session && (
        <div>
          <h1>Welcome, {session.user.email}!</h1>
          <p>This is your dashboard.</p>
          {/* Add links/buttons for creating, editing, and deleting blogs */}
        </div>
      )}
    </div>
  );
};

export default DashboardPage;

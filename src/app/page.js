'use client';

import Link from 'next/link';

import Auth from 'src/components/Auth';
import { useAuth, VIEWS } from 'src/components/AuthProvider';

export default function Home() {
  const { initial, user, view, signOut } = useAuth();

  if (initial) {
    return <div className="card h-72">Loading...</div>;
  }

  if (view === VIEWS.UPDATE_PASSWORD) {
    return <Auth view={view} />;
  }

  if (user) {
    return (
      <div className="card">
        <h2>Bienvenue sur Targetsys !</h2>
        <div width="20%">Notre plateforme est en développement, mais vous pouvez tester les dernières fonctionnalités dès qu'elles sont ajoutées !</div>
        <div>Nous proposons déjà un service de databse et d'authentification complet avec supabase !</div>
        <code className="highlight">{user.role}</code>
        <Link className="button" href="/profile">
          Voir mon profil
        </Link>
        <button type="button" className="button-inverse" onClick={signOut}>
          Me déconnecter
        </button>
      </div>
    );
  }

  return <Auth view={view} />;
}

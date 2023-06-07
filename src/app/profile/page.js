import Link from 'next/link';
import { redirect } from 'next/navigation';

import SignOut from 'src/components/SignOut';
import createClient from 'src/lib/supabase-server';

export default async function Profile() {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect('/');
  }

  return (
    <div className="card">
      <h2>Votre profil Supabase X Targetsys</h2>
      <code className="highlight">{user.email}</code>
      <div className="heading">Dernière connexion:</div>
      <code className="highlight">{new Date(user.last_sign_in_at).toUTCString()}</code>
      <div>Très bientôt vous pourrez créer votre propre page de contenu textuel, comme sur un dashboard !</div>
        <div> La phase de tests est presque terminée, un peu de patience</div>
        <div>Nous travaillons aussi sur le système de transactions entre utilisateurs !</div>
        <div>Bientôt vous pourrez confier vos intermédiaires d'échanges à TargetSys!</div>
      <Link className="button" href="/">
        Retourner à l'accueil
      </Link>
      <SignOut />
    </div>
  );
}

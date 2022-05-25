import { useUser } from "@auth0/nextjs-auth0";

export default function Home() {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>..Loading</div>;
  if (error) return <h1>{error.message}</h1>;

  console.log("Usuário", user);
  if (user) {
    return (
      <div>
        <h1>Bem vindo, {user.name}!</h1>
        <a href="/api/auth/logout">Logout</a>
      </div>
    );
  }

  return <a href="api/auth/login">Login</a>;
}

import { UserList } from "./_components/UserList";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-8">
      <main className="text-center">
        <h1 className="mb-4 text-2xl font-bold">Welcome to Next.js!</h1>
        <UserList />
      </main>
    </div>
  );
}

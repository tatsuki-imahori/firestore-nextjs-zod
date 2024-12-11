import { getUsers } from "@/server/lib/db/user";

export async function UserList() {
  const users = await getUsers();

  return (
    <div>
      <h2>ユーザー</h2>
      <ul className="flex flex-col gap-2">
        {users.map((user) => (
          <li key={user.docId}>
            <p>名前:{user.name}</p>
            <p>年齢:{user.age}歳</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

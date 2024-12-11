import "server-only";

import { db } from "../firebaseAdmin";
import { UserSchema } from "@/lib/zodSchemas";

export async function getUsers() {
  const snapshot = await db.collection("user").get();

  const users = snapshot.docs.map((doc) => {
    const userData = doc.data();

    const validatedUser = UserSchema.parse({
      ...userData,
      createdAt: userData.createdAt.toDate(),
    });

    return { docId: doc.id, ...validatedUser };
  });

  return users;
}

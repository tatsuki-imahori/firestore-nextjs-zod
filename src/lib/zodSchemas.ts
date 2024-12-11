import { z } from "zod";

export const UserSchema = z.object({
  name: z.string(),
  age: z.number().int(),
  createdAt: z.date(),
});

export type UserSchema = z.infer<typeof UserSchema>;

'use server';

import { getUserByEmail } from '@/data/user';
import { RegisterSchema, TRegisterSchema } from '@/schemas';
import { db } from '@/lib/db';
import bcrypt from 'bcryptjs';

export const register = async (values: TRegisterSchema) => {
  console.table(values);
  const validatedFields = RegisterSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: 'Invalid field values!' };
  }

  const {email, name, password} = validatedFields.data;

  const existingUser = await getUserByEmail(email);
  if (existingUser) {
    return { error: 'Email already exists!' };
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  // Create user
  await db.user.create({
    data: {
      email,
      name,
      password : hashedPassword
    }
  }) 

  return { success: 'Login details sent' };
};
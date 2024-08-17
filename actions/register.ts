'use server';

import { RegisterSchema, TRegisterSchema } from '@/schemas';

export const register = async (values: TRegisterSchema) => {
  console.table(values);
  const validatedFields = RegisterSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: 'Invalid field values!' };
  }

  return { success: 'Login details sent' };
};
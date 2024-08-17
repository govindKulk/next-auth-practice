'use server';

import { LoginSchema, TLoginSchema } from '@/schemas';

export const login = async (values: TLoginSchema) => {
  console.table(values);
  const validatedFields = LoginSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: 'Invalid field values!' };
  }

  return { success: 'Login details sent' };
};
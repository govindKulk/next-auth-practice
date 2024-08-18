'use server';

import { signIn } from '@/auth';
import { DEFAULT_LOGIN_REDIRECT } from '@/routes';
import { LoginSchema, TLoginSchema } from '@/schemas';
import { AuthError } from 'next-auth';

export const login = async (values: TLoginSchema) => {
  console.table(values);
  const validatedFields = LoginSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: 'Invalid field values!' };
  }

  const {email, password} = validatedFields.data;

  try {
    await signIn('credentials', {
      email,
      password,
      redirectTo: DEFAULT_LOGIN_REDIRECT
    })
  }catch(error) {
    if(error instanceof AuthError){

      switch(error.type){
        case 'CredentialsSignin': return { error: 'Invalid credentials!' };
        default: return { error: 'An error occurred!' };
      }
    }

    throw error;
  }
};
import GitHub from "next-auth/providers/github"
import Google from "next-auth/providers/google"
import Credentials from "next-auth/providers/credentials"
import bcrypt from 'bcryptjs'

import type { NextAuthConfig } from "next-auth"
import { LoginSchema } from "./schemas"
import { db } from "./lib/db"
import { getUserByEmail } from "./data/user"
 
export default { providers: [
    Credentials({
        async authorize(credentials) {
            
            // validate again since some users can directly hit the endpoint.
            const validatedFields = LoginSchema.safeParse(credentials);

            if(validatedFields.success){
                const {email, password} = validatedFields.data;

                const user = await getUserByEmail(email);

                if(!user || !user.password) return null;

                const passwordsMatch = await bcrypt.compare(password, user.password);

                if(passwordsMatch){
                    return user;
                }

            }
            return null;
        }
    })
] } satisfies NextAuthConfig
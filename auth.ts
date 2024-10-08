import NextAuth from "next-auth"

import authConfig from "@/auth.config"
import { db } from "./lib/db"
import { PrismaAdapter } from "@auth/prisma-adapter"
 
export const { auth, handlers : {GET, POST}, signIn, signOut } = NextAuth({
  ...authConfig,
  adapter: PrismaAdapter(db),
  session: {
    strategy: 'jwt'
  }
})
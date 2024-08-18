## Learning Gaps:
1. useTransition hook from react


## Setuping Prisma

### 1. Install Prisma and @prisma/client 
`` npm i -D prisma ``

`` npm i @prisma/client ``

### 2. Create db.ts and setup prisma for dev mode and production modes.
    import { PrismaClient } from "@prisma/client";

    declare global {
        var prisma: PrismaClient | undefined;
    }

    export const db = globalThis.prisma || new PrismaClient();

    if(process.env.NODE_ENV !== 'production') {
        globalThis.prisma = db;
    }


### 3. Setup database uri in the env and datasource in the schema.prisma file

    generator client {
    provider = "prisma-client-js"
    }

    // prisma/schema.prisma
    datasource db {
    provider  = "postgresql"
    url  	    = env("DATABASE_URL")
    // uncomment next line if you use Prisma <5.10
    // directUrl = env("DATABASE_URL_UNPOOLED")
    }

####
    .env
    DATABASE_URL = "DATABASE URI FOR REMOTE / LOCAL DATABASE"    

### 3. Create models in the schema.prisma file
    model User {
        id String @id @default(cuid())
        name String
    }

### 4.  Run prisma generate 
#### for generating prisma schema syntax for the development and for getting rid of typescript errors

`` npx prisma generate ``

### 5. Run prisma db push
#### for pushing changes to the database itself

`` npx prisma db push ``



## Setuping Next Auth

### 1. Install v5 of next-auth
`` npm install next-auth@beta ``

### 2. Add auth.ts configuration file in the root
    import NextAuth from "next-auth"
    import GitHub from "next-auth/providers/github"
    import Google from "next-auth/providers/google"
    
    export const { auth, handlers : {GET, POST} } = NextAuth({
        providers: [GitHub, Google],
    })

#### It expose universal auth function to use throughout the app and two methods to integrate in the apis.

### 3. Add app/api/auth/[...nextauth]/route.ts api and expose GET and POST methods from @/auth.ts
    export {GET, POST} from '@/auth';

### 4. Setup AUTH_SECRET environment variable
`` AUTH_SECRET = " " ``

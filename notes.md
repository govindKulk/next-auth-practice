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


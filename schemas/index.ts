

import * as z from 'zod';

export const LoginSchema = z.object({
    email: z.string().email({
        message: "Invalid email address"
    }),
    password: z.string().min(6, {
        message: "Password must be at least 6 characters long"
    })
})

export const RegisterSchema = z.object({
    email: z.string().email({
        message: "Invalid email address"
    }),
    password: z.string().min(6, {
        message: "Password must be at least 6 characters long"
    }),
    name: z.string({
        message: "Name is required"
    }).min(3, {
        message: "Name must be at least 3 characters long"
    })
})

export type TLoginSchema = z.infer<typeof LoginSchema>;
export type TRegisterSchema = z.infer<typeof RegisterSchema>;
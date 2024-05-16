import z from "zod";

export const singupInput = z.object({
    username: z.string(),
    password: z.string().min(6),
    name: z.string().optional(),
    });

export type SignupInput = z.infer<typeof singupInput>;

export const singInInput = z.object({
    username: z.string(),
    password: z.string().min(6)
    });

export type SignInInput = z.infer<typeof singupInput>;
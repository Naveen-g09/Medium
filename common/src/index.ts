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

export const createBlogInput = z.object({
    title: z.string(),
    content: z.string()
});

export type CreateBlogInput = z.infer<typeof createBlogInput>;

export const UpdateBlogInput = z.object({
    title: z.string(),
    content: z.string(),
    id: z.number()
});

export type UpdateBlogInput = z.infer<typeof UpdateBlogInput>;
import * as z from 'zod';

export const signUpSchema = z.object({

    email: z.string()
        .nonempty('Cant be empty')
        .email('Invalid email format'),
    password: z.string()
        .nonempty('Cant be empty')
        .min(6, 'Must contain min 6 characters'),
    confirmPassword: z.string()
        
}).superRefine(({ confirmPassword, password }, ctx) => {
    if (confirmPassword !== password) {
        ctx.addIssue({
            code: "custom",
            message: "The passwords did not match",
            path: ['confirmPassword'],
        });
    }
});

export const loginSchema = z.object({
    email: z.string()
        .nonempty('Cant be empty')
        .email('Invalid email format'),
    password: z.string()
        .nonempty('Cant be empty')
        .min(6, 'Must contain min 6 characters'),
})
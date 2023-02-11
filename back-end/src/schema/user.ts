import zod from "zod";

export const validatorPalindrome = zod.object({
    words: zod.array(zod.string()).nonempty()
});

export const validatorRegister = zod.object({
    email: zod.string().email(),
    password: zod.string()
});

export const validatorLogin = zod.object({
    email: zod.string().email(),
    password: zod.string()
});
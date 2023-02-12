import zod from "zod";

export const informationObject = zod.object({
    name: zod.string(),
    photoUrl: zod.string(),
    competence: zod.array(zod.string()).nonempty(),
    experience: zod.array(zod.string()).nonempty(),
    scolarship: zod.array(zod.string()).nonempty(),
    language: zod.array(zod.string()).nonempty()
});

export const validatorInputCreate= zod.object({
    templateName: zod.string(),
    information: informationObject
});

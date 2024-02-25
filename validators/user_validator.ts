import vine from "@vinejs/vine";

const schema = vine.object({
    username: vine.string(),
    password: vine
        .string()
        .minLength(8)
        .maxLength(32)
        .confirmed()
});

const userValidator = vine.compile(schema);

export default userValidator;
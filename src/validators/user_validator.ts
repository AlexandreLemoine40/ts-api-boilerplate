import vine from "@vinejs/vine";

const schema = vine.object({
    username: vine.string()
});

const userValidator = vine.compile(schema);

export default userValidator;
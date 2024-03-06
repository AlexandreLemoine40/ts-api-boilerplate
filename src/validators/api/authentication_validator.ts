import vine from "@vinejs/vine";

const schema = vine.object({
    username: vine.string()
});

const authenticationValidator = vine.compile(schema);

export default authenticationValidator;
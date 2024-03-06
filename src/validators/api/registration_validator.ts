import vine from "@vinejs/vine";

// Vine validation .confirmed() implies to have the same field with _confirmation suffix and have the same value.
const schema = vine.object({
    username: vine.string(),
    password: vine.string()
        .minLength(8)
        .maxLength(32)
        .confirmed(),
    email: vine.string()
        .email()
});

const registrationValidator = vine.compile(schema);

export default registrationValidator;
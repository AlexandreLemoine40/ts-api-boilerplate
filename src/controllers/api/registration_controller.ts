import { Request, Response } from "express";
import { errors } from "@vinejs/vine";
import JWTManager from "#models/jwt_manager.js";
import registrationValidator from "#validators/api/registration_validator.js";

export default async (req: Request, res: Response) => {
    try {
        // Check the validity of the data received
        await registrationValidator.validate(req.body);

        // Now check the credentials in the database
        // ...

        const token = JWTManager.createToken(req.body, "3h");

        res.send(token);
    } catch (error) {
        if (error instanceof errors.E_VALIDATION_ERROR) {
            console.log(error.messages);
        }
        res.status(500).send("Internal Server Error : Body payload missmatched required schema");
    }
};
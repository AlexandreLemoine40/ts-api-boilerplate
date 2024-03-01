import { Request, Response } from "express";
import JWTManager from "#models/jwt_manager.js";
import { errors } from "@vinejs/vine";
import userValidator from "#validators/user_validator.js";

/**
 * Implements methods called when an Endpoint refering the API is accessed.
 */
export default class apiController {
    static index(req: Request, res: Response) {
        res.send("API index");
    }

    static async authenticate(req: Request, res: Response) {
        try {
            const output = await userValidator.validate({
                data: req.body
            });

            console.log(output);

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
    }
}
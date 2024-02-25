import { Request, Response } from "express";
import JWTManager from "../models/jwt_manager.js";
import vine from "@vinejs/vine";

/**
 * Implements methods called when an Endpoint refering the API is accessed.
 */
export default class apiController {
    static index(req: Request, res: Response) {
        res.send("API index");
    }

    static async authenticate(req: Request, res: Response) {
        const token = JWTManager.createToken(req.body, "3h");
        const schema = vine.object({
            username: vine.string(),
            email: vine.string().email(),
            password: vine
                .string()
                .minLength(8)
                .maxLength(32)
                .confirmed()
        });

        const data = {
            username: "virk",
            email: "virk@example.com",
            password: "secret",
            password_confirmation: "secret",
        };

        const output = await vine.validate({
            schema,
            data
        });

        console.log(output);

        res.send(token);
    }
}
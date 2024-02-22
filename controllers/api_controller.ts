import { Request, Response } from "express";
import JWTManager from "../models/jwt_manager";

/**
 * Implements methods called when an Endpoint refering the API is accessed.
 */
export default class apiController {
    static index(req: Request, res: Response) {
        res.send("API index");
    }

    static authenticate(req: Request, res: Response) {
        const token = JWTManager.createToken(req.body, "3h");
        res.send(token);
    }
}

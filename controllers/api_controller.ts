import { Request, Response } from "express";
import JWTManager from "../models/jwt_manager";
import { Pool } from "pg";

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

    static getUsers(req: Request, res: Response) {
        const pool = new Pool({
            connectionString: process.env.DATABASE_URL,
        });

        pool.query("SELECT * FROM sms", (err, result) => {
            if (err) {
                console.error("Error executing query:", err);
                res.status(500).send("Error executing query");
            } else {
                console.log(result.rows);
                res.send(result.rows);
            }
        });
    }
}
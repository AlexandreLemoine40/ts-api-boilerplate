import { Request, Response } from "express";

export default class apiController {
    static index(req: Request, res: Response) {
        res.send("API index");
    }
}

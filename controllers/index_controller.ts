import { Request, Response } from "express";

export default class indexController {
    static index(req: Request, res: Response) {
        res.send("Index");
    }
}

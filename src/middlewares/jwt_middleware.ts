import { Request, Response, NextFunction } from "express";
import JWTManager from "#models/jwt_manager.js";

import dotenv from "dotenv";

dotenv.config();

const jwtMiddleware = (req: Request, res: Response, next: NextFunction) => {
    // Get the JWT token from the request headers
    const token = req.headers.authorization?.split(" ")[1];

    if (!token) {
        return res.status(401).json({ message: "No token provided" });
    }

    try {
        // Verify the JWT token
        const decoded = JWTManager.verifyToken(token);

        // Attach the decoded token to the request object
        // @ts-expect-error: To suppress the error related to assigning a decoded token to 'req.user'.
        req.user = decoded;

        // Call the next middleware
        next();
    } catch (error) {
        return res.status(401).json({ message: "Invalid token" });
    }
};

export default jwtMiddleware;

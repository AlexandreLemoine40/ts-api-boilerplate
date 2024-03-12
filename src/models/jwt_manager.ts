import jwt from "jsonwebtoken";

class JWTManager {
    private static secretKey: string = process.env.JWT_SECRET as string;

    static createToken(payload: object, expiresIn: string): string {
        return jwt.sign(payload, this.secretKey, { expiresIn });
    }

    static verifyToken(token: string): object | null {
        try {
            const decoded = jwt.verify(token, this.secretKey);
            return decoded as object;
        } catch (error) {
            return null;
        }
    }
}

export default JWTManager;
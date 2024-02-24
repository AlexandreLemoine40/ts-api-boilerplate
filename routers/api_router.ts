import express from "express";
import jwtMiddleware from "../middlewares/jwt_middleware";

const apiRouter = express.Router();

/**
 * Controller importation
 */
import apiController from "../controllers/api_controller";

/**
 * GETs URLs
 */
apiRouter.get("/", jwtMiddleware, apiController.index);

apiRouter.get("/users", jwtMiddleware, apiController.getUsers);

/**
 * POSTs URLs
 */
apiRouter.post("/authenticate", apiController.authenticate);

export { apiRouter };
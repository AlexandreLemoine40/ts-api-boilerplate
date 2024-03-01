import express from "express";
import jwtMiddleware from "#middlewares/jwt_middleware.js";

const apiRouter = express.Router();

/**
 * Controller importation
 */
import apiController from "#controllers/api_controller.js";

/**
 * GETs URLs
 */
apiRouter.get("/", jwtMiddleware, apiController.index);

/**
 * POSTs URLs
 */
apiRouter.post("/authenticate", apiController.authenticate);

export { apiRouter };
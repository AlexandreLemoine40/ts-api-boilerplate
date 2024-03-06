import express from "express";
import jwtMiddleware from "#middlewares/jwt_middleware.js";

const apiRouter = express.Router();

/**
 * Controller importation
 */
import indexController from "#controllers/api/index_controller.js";
import authenticationController from "#controllers/api/authentication_controller.js";
import registrationController from "#controllers/api/registration_controller.js";

/**
 * GETs URLs
 */
apiRouter.get("/", jwtMiddleware, indexController);

/**
 * POSTs URLs
 */
apiRouter.post("/authenticate", authenticationController);

apiRouter.post("/register", registrationController);

export { apiRouter };
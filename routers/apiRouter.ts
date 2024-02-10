import express from "express";
const apiRouter = express.Router();

/**
 * Controller importation
 */
import apiController from "../controllers/apiController";

/**
 * GETs URLs
 */
apiRouter.get("/", apiController.index);

/**
 * POSTs URLs
 */
// ...

export { apiRouter };
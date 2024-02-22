import express from "express";
const indexRouter = express.Router();

/**
 * Controller importation
 */
import indexController from "../controllers/index_controller";

/**
 * GETs URLs
 */
indexRouter.get("/", indexController.index);

/**
 * POSTs URLs
 */
// ...

export { indexRouter };
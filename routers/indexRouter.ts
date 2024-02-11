import express from "express";
const indexRouter = express.Router();

/**
 * Controller importation
 */
import indexController from "../controllers/indexController";

/**
 * GETs URLs
 */
indexRouter.get("/", indexController.index);

/**
 * POSTs URLs
 */
// ...

export { indexRouter };
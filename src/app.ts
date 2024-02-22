import express, { Express, Request, Response } from "express";
import bodyParser from "body-parser";
import createError from "http-errors";

/**
 * Custom types interfaces
 */
import { ExpressError } from "../interfaces/express_interfaces";

/**
 * Routers Imports
 */
import { indexRouter } from "../routers/index_router";
import { apiRouter } from "../routers/api_router";

/**
 * Express app creation
 */
const app: Express = express();

/**
 * Middlewares usage
 */
app.use(bodyParser.json());

/**
 * Routers usage
 */
app.use("/", indexRouter);
app.use("/api", apiRouter);

/**
 * Errors handling
 */
app.use(function (req: Request, res: Response, next) {
    next(createError(404));
});

app.use(function (err: ExpressError, req: Request, res: Response) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "development" ? err : {};

    // render the error page
    res.status(err.status || 500).send();
});

export { app };
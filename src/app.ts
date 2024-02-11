import express, { Express, Request, Response } from "express";
import createError from "http-errors";

/**
 * Custom types interfaces
 */
import { ExpressError } from "../interfaces/expressInterfaces";

/**
 * Routers Imports
 */
import { indexRouter } from "../routers/indexRouter";
import { apiRouter } from "../routers/apiRouter";

/**
 * Express app creation
 */
const app: Express = express();

/**
 * Routers usage
 */
app.use("/", indexRouter);
app.use("/api", apiRouter);

// catch 404 and forward to error handler
app.use(function (req: Request, res: Response, next) {
    next(createError(404));
});

// error handler
app.use(function (err: ExpressError, req: Request, res: Response) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "development" ? err : {};

    // render the error page
    res.status(err.status || 500).send();
});

export { app };
import express, { Request, Response, NextFunction } from "express";
import cors from "cors";
import * as dotenv from "dotenv";

import errorMiddleware from "./midlleware/errorMiddleware.ts";
import userRouter from "./routes/api/authRouter.ts";
import newsRouter from "./routes/api/newsRouter.ts";
import petsRouter from "./routes/api/petsRouter.ts";
import serviceRouter from "./routes/api/servicesRouter.ts";
import noticeRouter from "./routes/api/noticeRouter.ts";
import HttpError from "./helpers/httpError.ts";

  dotenv.config();

  var app = express();
  app.use(express.json());
  app.use(cors({ origin: 'https://yuriizag.github.io' }));
  app.use(express.static("public"));

  app.use(errorMiddleware);
  app.use("/user", userRouter);
  app.use("/notices", noticeRouter);
  app.use("/news", newsRouter);
  app.use("/pets", petsRouter);
  app.use("/services", serviceRouter);

  app.use((err: HttpError, req: Request, res: Response, next: NextFunction) => {
    res.status(err.status || 500).json({ message: err.message });
  });

  app.use((_: Request, res: Response, __: NextFunction) => {
    res.status(404).json({
      status: "error",
      code: 404,
      message: "Not found",
      data: "Not found",
    });
  });

export default app;

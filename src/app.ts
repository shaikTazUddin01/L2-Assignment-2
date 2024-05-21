import express, { Request, Response } from "express";
import { routerManager } from "./app.router";
// import cors from "cors";

const app = express();

//middleware json parse
app.use(express.json());
// app.use(cors());

//create api route
app.use("/api", routerManager);

//connection server
app.get("/", (req: Request, res: Response) => {
  res.send("server is connecting");
});

export default app;

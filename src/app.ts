import express, { Request, Response } from "express";
import { routerManager } from "./app.router";

const app = express();

//middleware json parse
app.use(express.json());

//create api route
app.use("/api", routerManager);

//connection server
app.get("/", (req: Request, res: Response) => {
  res.send("server is connecting");
});

//handle Not Found Route
app.use("*", (req: Request, res: Response) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
  });
});
export default app;

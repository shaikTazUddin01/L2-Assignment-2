"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app_router_1 = require("./app.router");
// import cors from "cors";
const app = (0, express_1.default)();
//middleware json parse
app.use(express_1.default.json());
// app.use(cors());
//create api route
app.use("/api", app_router_1.routerManager);
//connection server
app.get("/", (req, res) => {
    res.send("server is connecting");
});
exports.default = app;

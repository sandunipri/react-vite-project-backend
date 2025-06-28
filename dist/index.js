"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
//01.initialize the express app
const app = (0, express_1.default)();
//02.define application port
const port = 3000;
//03.define simple HTTP GET request handler
app.get("/", (req, res) => {
    res.send("Hello World!");
});
//04.Instruct the express app to listen on port 3000
app.listen(port, () => {
    console.log(`Server is runing at http://localhost:${port}`);
});

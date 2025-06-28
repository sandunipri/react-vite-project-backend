import express, {Express,Request,Response}  from "express";

//01.initialize the express app
const app :Express = express();

//02.handle the Middlewares
//instruct to parse the request payload data to converted to JSON format
app.use(express.json());
//03.define simple HTTP GET request handler
app.get("/",(req : Request , res : Response) =>{
    res.send("Hello world!");
});

export default app;
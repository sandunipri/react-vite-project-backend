import express, {Express,Request,Response} from 'express';

//01.initialize the express app
const app :Express = express();
//02.define application port
const port = 3000;

//03.define simple HTTP GET request handler
app.get("/",(req : Request , res : Response) =>{
    res.send("Hello world!");
});

//04.Instruct the express app to listen on port 3000
app.listen(port, () => {
    console.log(`Server is runing at http://localhost:${port}`);
})


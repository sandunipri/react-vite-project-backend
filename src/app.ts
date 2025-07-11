import express, {Express,Request,Response}  from "express";
import productRoutes from "./routes/product.routes"
import cors from "cors";
import contactRoutes from "./routes/contact.routes";
//01.initialize the express app
const app :Express = express();

//02.handle the Middlewares(using the app.use it is middleware)
//instruct to parse the request payload data to converted to JSON format
app.use(express.json());

app.use(cors())

app.use("/api/products",productRoutes)
app.use("/api/contacts",contactRoutes)

//03.define simple HTTP GET request handler
/*app.get("/",(req : Request , res : Response) =>{
    console.log(req.body);
    res.send("Hello world!");
});*/

const  allowedOrigins = [
    "http://localhost:5173"
];

const  corsOptions = {
    origin:(origin: string | undefined,
            callback:(err: Error | null, allow?:boolean) => void) => {
        if(!origin || allowedOrigins.includes(origin)){
            callback(null , true);
            }else {
            callback(new Error("Not allowed by CORS"));
        }

    }
};
app.use(cors(corsOptions));

export default app;
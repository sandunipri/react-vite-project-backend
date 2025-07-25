import express, {Express,Request,Response}  from "express";
import productRoutes from "./routes/product.routes"
import cors from "cors";
import contactRoutes from "./routes/contact.routes";
import authRoutes from "./routes/auth.routes";
import {authenticateToken} from "./middleware/auth.middleware";
//01.initialize the express app
const app :Express = express();

//02.handle the Middlewares(using the app.use it is middleware)
//instruct to parse the request payload data to converted to JSON format
app.use(express.json());

app.use(cors())

app.use("/api/auth",authRoutes)
app.use("/api/products",authenticateToken,productRoutes)
app.use("/api/contacts",contactRoutes)

//03.define simple HTTP GET request handler
/*app.get("/",(req : Request , res : Response) =>{
    console.log(req.body);
    res.send("Hello world!");
});*/

const  allowedOrigins = [
    "http://localhost:5173" ,"http://localhost:5175/"
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
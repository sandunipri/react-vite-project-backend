import {Router} from "express";
import {deleteProduct, getAllProducts, getProduct, saveProduct, updateProduct} from "../controllers/product.controller";

const productRouter:Router = Router();

// handle requests
productRouter.get("/all",getAllProducts)
productRouter.post("/save",saveProduct)
productRouter.get("/:id",getProduct)
productRouter.put("/update/:id",updateProduct)
productRouter.delete("/delete/:id",deleteProduct)

export default productRouter;
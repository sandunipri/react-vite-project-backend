import {Response,Request} from "express";
import * as productService from "../services/product.service";
//Controller function to handle get All products
export const getAllProducts = (req:Request,res:Response) => {
    try {
        const products = productService.getAllProducts();
        res.status(200).json(products);
    }catch (error){
        console.log(error);
        res.status(500).json({error: "Something went wrong"});
    }
}

export const saveProduct = (req:Request,res:Response) =>{
    try {
        const newProduct = req.body;
        const validateError = productService.validateProduct(newProduct);
        if (validateError){
            res.status(400).json({error: validateError});
            return
        }
        const savedProduct = productService.saveProduct(newProduct);
        res.status(201).json(savedProduct);
    }catch (error){
        console.log(error);
        res.status(500).json({error: "Something went wrong"});
    }
}

export const getProduct = (req:Request,res:Response) =>{
    try {
        const productId = parseInt(req.params.id);
        if (isNaN(productId)){
            res.status(400).json({error: "Invalid product ID"});
            return;
        }

        const product = productService.getProductById(productId);
        if (!product){
            res.status(404).json({error: "Product not found"});
            return;
        }
        res.status(500).json(product);
    }catch (error){
        console.log(error);
        res.status(500).json({error: "Something went wrong"});
    }

}

export const updateProduct = (req:Request,res:Response) =>{
    try {
        const productId = parseInt(req.params.id);
        if (isNaN(productId)){
            res.status(400).json({error: 'Invalid product ID'});
            return;
        }
        const updateData = req.body;
        const updateProduct = productService.updateProduct(productId, updateData);
        if (!updateProduct){
            res.status(404).json({error:'Product not found'});
            return;
        }
        res.status(200).json(updateProduct);
    }catch (error){
        console.log(error);
        res.status(500).json({error: "Something went wrong"});
    }

}

export const deleteProduct = (req:Request,res:Response) =>{
    try {
        const productId = parseInt(req.params.id);
        if (isNaN(productId)){
            res.status(400).json({error: 'Invalid product Id'})
            return
        }
        const deleted = productService.deleteProduct(productId);
        if (!deleted){
            res.status(404).json({error: 'Product not found'});
            return;
        }
        res.status(200).json({message: 'Product deleted successfully'});
    }catch (error){
        console.log(error);
        res.status(500).json({error: "Something went wrong"});
    }


}
import {Response,Request} from "express";
import * as productService from "../services/product.service";
//Controller function to handle get All products
export const getAllProducts =async (req:Request,res:Response) => {
    try {
        const products =await productService.getAllProducts();
        res.status(200).json(products);
    }catch (error){
        console.log(error);
        res.status(500).json({error: "Something went wrong"});
    }
}

export const saveProduct = async (req:Request,res:Response) =>{
    try {
        const newProduct = req.body;
        const validateError = productService.validateProduct(newProduct);
        if (validateError){
            res.status(400).json({error: validateError});
            return
        }
        const savedProduct =await productService.saveProduct(newProduct);
        res.status(201).json(savedProduct);
        console.log(savedProduct);
    }catch (error){
        console.log(error);
        res.status(500).json({error: "Something went wrong"});
    }
}

export const getProduct =async (req:Request,res:Response) =>{
    try {
        const productId =parseInt(req.params.id);
        if (isNaN(productId)){
            res.status(400).json({error: "Invalid product ID"});
            return;
        }

        const product =await productService.getProductById(productId);
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

export const updateProduct =async (req:Request,res:Response) =>{
    try {
        const productId = parseInt(req.params.id);
        if (isNaN(productId)){
            res.status(400).json({error: 'Invalid product ID'});
            return;
        }
        const updateData = req.body;
        const updateProduct =await productService.updateProduct(productId, updateData);
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

export const deleteProduct = async (req:Request,res:Response) =>{
    try {
        const productId = parseInt(req.params.id);
        if (isNaN(productId)){
            res.status(400).json({error: 'Invalid product Id'})
            return
        }
        const deleted = await productService.deleteProduct(productId);
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
// import {productList} from "../db/db";
import Product from "../model/product.model";
import {ProductDto} from "../dto/product.dto";


//get all Product service logic
export const getAllProducts =async ():Promise<ProductDto[]>=> {
    return Product.find();
}

export const saveProduct = async (product:ProductDto):Promise<ProductDto> => {
   return Product.create(product)
}

export const getProductById =async (id : number):Promise<any>=> {
    // return productList.find(product => product.id === id);
    return Product.findOne({id: id})
}

export const updateProduct =async (id : number, data:ProductDto) => {
    const product = await Product.findOneAndUpdate({id: id}, data, {new: true});
    if (!product){
        return null;
    }
    Object.assign(product , data);//replace the product with new data
    return product;
}

export const deleteProduct =async (id : number)=> {
   /* const index = productList.findIndex(product => product.id === id);
    if (index === -1){
        return false
    }
    productList.splice(index, 1);*/ //remove the product from the list
    await Product.deleteOne({id: id});
    return true;
}

export const validateProduct = (product : ProductDto) => {
  if (!product.id || !product.name || !product.price || !product.currency || !product.image) {
      return 'All fields are required';
  }
  return null;
}
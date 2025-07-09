import {productList} from "../db/db";
import {Product} from "../model/product.model";

//get all Product service logic
export const getAllProducts = ():Product[] => {
    return productList;
}

export const saveProduct = (product :Product):Product => {
    productList.push(product)
    return product
}

export const getProductById = (id : number):Product | undefined => {
    return productList.find(product => product.id === id);

}

export const updateProduct = (id : number, data:Product) => {
    const product = productList.find(product => product.id === id);
    if (!product){
        return null;
    }
    Object.assign(product , data);//replace the product with new data
    return product;
}

export const deleteProduct = (id : number)=> {
    const index = productList.findIndex(product => product.id === id);
    if (index === -1){
        return false
    }
    productList.splice(index, 1); //remove the product from the list
    return true;
}

export const validateProduct = (product : Product) => {
  if (!product.id || !product.name || !product.price || !product.currency || !product.image) {
      return 'All fields are required';
  }
  return null;
}
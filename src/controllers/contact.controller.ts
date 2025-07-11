import {Response,Request} from "express";
import * as contactService from "../services/contact.service";

export const getAllContacts = (req:Request,res:Response) => {
    try {
        const contacts = contactService.getAllContacts();
        res.status(200).json(contacts);
    }catch (error){
        console.log(error);
        res.status(500).json({error: "Something Went Wrong"})
    }
}

export const saveContact = (req:Request,res:Response) =>{
    try {
        const newContact = req.body;
        const validationError = contactService.validateContact(newContact);
        if (validationError){
            res.status(400).json({error: validationError});
            return
        }
        const savedContact = contactService.saveContact(newContact);
        res.status(201).json(savedContact);
        console.log(savedContact)
    }catch (error){
        console.log(error);
        res.status(500).json({error: "Something Went Wrong"})
    }
}
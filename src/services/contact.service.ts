import {Contact} from "../model/contact.model";
import {contactList} from "../db/db";


export const  getAllContacts = (): Contact[] => {
    return contactList
}

export const saveContact = (contact: Contact): Contact => {
    contactList.push(contact);
    return contact;
}

export const validateContact = (contact : Contact) =>{
    if (!contact.name || !contact.email || !contact.message){
        return "All Fields  are required"
    }
    return  null;
}
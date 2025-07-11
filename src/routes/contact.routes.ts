import {Router} from "express";
import {getAllContacts,saveContact} from "../controllers/contact.controller";

const contactRouter: Router = Router();

//handle requests
contactRouter.get("/all",getAllContacts)
contactRouter.post("/save",saveContact)

export default contactRouter;
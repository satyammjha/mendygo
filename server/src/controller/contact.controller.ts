import { NextFunction, Request, Response } from "express";
import Contact from "../models/contact.model";

export const createContact = async (req: Request, res: Response, next: NextFunction): Promise<void> => {

    const { name, email, subject, phoneNumber, message } = req.body;
    console.log("Received contact data:", req.body);

    if (!name) {
        res.status(400).json({ message: "Name and Contact are required." });
        return;
    }

    try {
        const newContact = await Contact.create({
            name,
            email,
            subject,
            phoneNumber,
            message
        });

        res.status(201).json({ message: "Contact saved successfully", data: newContact });
    } catch (error) {
        console.error("Error saving contact:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

export const getAllContacts = async (_req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const contacts = await Contact.find().sort({ createdAt: -1 });
        res.status(200).json(contacts);
    } catch (error) {
        console.error("Error fetching contacts:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};
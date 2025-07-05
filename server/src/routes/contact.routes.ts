import { Router } from "express";
import asyncHandler from "express-async-handler";
import { getAllContacts, createContact } from "../controller/contact.controller";
import { authenticateToken } from "../middleware/auth.middleware";
const router = Router();

router.post("/create", asyncHandler(createContact));
router.get("/get", authenticateToken, asyncHandler(getAllContacts));

export default router;
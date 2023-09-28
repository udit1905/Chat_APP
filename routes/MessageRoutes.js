import { Router } from "express";
import {
  addMessage,
  getInitialContactsWithMessages,
  getMessages,
} from "../controllers/MessageController.js";
import multer from "multer";
import { addImageMessage } from "../controllers/MessageController.js";

const uploadImage = multer({ dest: "uploads/images" });

const router = Router();
router.post("/add-message", addMessage);
router.get("/get-messages/:from/:to", getMessages);
router.post("/add-image-message", uploadImage.single("image"), addImageMessage);
router.get("/get-initial-contacts/:from", getInitialContactsWithMessages);

export default router;

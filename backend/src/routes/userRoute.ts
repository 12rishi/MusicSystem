import express, { Router } from "express";
import { multer, storage } from "../middleware/multerMiddleware";
import userController from "../controllers/userController";
import handleError from "../services/errorHandler";
const router: Router = express.Router();
const upload = multer({ storage: storage });
router
  .route("/register")
  .post(
    upload.single("profilePicture"),
    handleError(userController.registerUser)
  );
export default router;

import { Request, Response } from "express";
import User from "../database/models/userModel";

class UserController {
  async registerUser(req: Request, res: Response): Promise<void> {
    const { email, phoneNumber, password, role, socialMediaLink } = req.body;
    if (!email || !phoneNumber || !password || !role || !socialMediaLink) {
      res.status(400).json({
        message: "please provide all the credential",
      });
      return;
    }
    const profilePicture = req.file as Express.Multer.File;
    console.log(profilePicture);
    if (profilePicture.size > 2000000) {
      res.status(400).json({
        message: "file size must be less than 2MB",
      });
      return;
    }

    //   email,
    //   phoneNumber,
    //   password,
    //   role,
    //   socialMediaLink,
    // });
    res.status(200).json({
      message: "successfully stored the data",
      url: `http://localhost/3000/${profilePicture.filename}`,
    });
    return;
  }
}
export default new UserController();

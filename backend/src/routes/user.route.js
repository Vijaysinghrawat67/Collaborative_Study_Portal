import {Router} from 'express';
import { loginUser, logOutUser, registerUser } from '../controllers/user.controller.js';
import {veryfyJWT} from '../middleware/auth.middleware.js';



const router = Router()

router.route("/register").post(registerUser)
router.route("/login").post(loginUser)
router.route("/logout").post(veryfyJWT, logOutUser)


export default router;
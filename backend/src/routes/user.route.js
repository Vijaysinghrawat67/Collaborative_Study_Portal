import {Router} from 'express';
import { loginUser, logOutUser, registerUser } from '../controllers/user.controller.js';
import {veryfyJWT} from '../middleware/auth.middleware.js';
import { createNotes, deleteNotes, getNotes, updateNotes } from '../controllers/notes.controller.js';



const router = Router()

router.route("/register").post(registerUser)
router.route("/login").post(loginUser)
router.route("/logout").post(veryfyJWT, logOutUser)
router.route("/createNote").post(veryfyJWT,createNotes)
router.route("/getNote").get(veryfyJWT, getNotes)
router.route("/update/:id").put(veryfyJWT, updateNotes)
router.route("/delete/:id").delete(veryfyJWT,deleteNotes)


export default router;
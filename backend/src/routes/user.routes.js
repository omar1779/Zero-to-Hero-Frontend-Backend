import { Router } from "express"
import { getUsers } from "../controllers/user.controllers.js"
const router = Router()
//request, response

router.get("/", getUsers)

//exportacion unica
export default router
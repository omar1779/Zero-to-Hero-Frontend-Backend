import { getAllUsers } from "../services/user.service.js";

export const getUsers = async (req, res) => {
    try {
        const users = await getAllUsers()

        res.status(200).json(users)
    } catch (error) {
        res.status(500).json({ "mensaje": "Error cargando usuarios" })
    }
}
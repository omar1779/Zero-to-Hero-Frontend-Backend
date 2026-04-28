import { useEffect, useState } from "react";
import { fetchApi } from "../api/client";

export const useUsers = () => {
    const [users, setUsers] = useState("")
    const [loading, setLoading] = useState(true)

    const getUsers = async () => {
        console.log("test")
        try {
            const data = await fetchApi("/users")
            console.log(data)
            setUsers(data)
        } catch (error) {
            console.error(error)
        } finally {
            setLoading(false)
        }
    }
    useEffect(() => {
        getUsers();
    }, [])

    return { users, loading }
}
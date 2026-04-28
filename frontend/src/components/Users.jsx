import { useUsers } from "../hooks/useUsers";

export default function Users() {
    const { users, loading } = useUsers()

    if (loading) return <p>Loading...</p>

    return (
        <div>
            <h2>Users</h2>
            {users.map(user => (
                <div key={user.id}>
                    <p >{user.name}</p>
                    <p>{user.email}</p>
                    <p>{user.website}</p>
                    <p>{user.username}</p>
                    <p>__________________________________________________________</p>
                </div>
            ))}
        </div>
    )
}
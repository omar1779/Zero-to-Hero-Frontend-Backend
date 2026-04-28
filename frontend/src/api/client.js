const API_URL = "http://localhost:9000/api"


export const fetchApi = async (endpoint, options) => {
    console.log(endpoint)
    const res = await fetch(`${API_URL}${endpoint}`, {
        headers: {
            "Content-Type": "application/json"
        },
        ...options
    })
    console.log("test", res)
    if (!res.ok) {
        throw new Error("API Error")
    }
    return res.json()
}
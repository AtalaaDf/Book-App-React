const BASE_URL = import.meta.env.VITE_API_BASE_URL

export async function fetchTrendingBooks(page = 1) {
    try {
        const response = await fetch(`${BASE_URL}/trending/daily.json?page=${page}&limit=12`)
        if (!response.ok) {
        throw new Error("gagal mengambil data")
        }
        const data = await response.json()
        return data
    } catch (error) {
        throw error
    }
}

export async function searchBooks(query) {
    try {
        const response = await fetch(`${BASE_URL}/search.json?q=${query}`)
        if (!response.ok) {
        throw new Error("gagal mengambil data")
        }
        const data = await response.json()
        return data
    } catch (error) {
        throw error
    }
}

export async function fetchBookDetail(id) {
    try {
        const response = await fetch(`${BASE_URL}/works/${id}.json`)
        if (!response.ok) {
        throw new Error("gagal mengambil data")
        }
        const data = await response.json()
        return data
    } catch (error) {
        throw error
    }
}
import axios from 'axios'

const API_URL = "https://tchmzfjrywceqiirugbx.supabase.co/rest/v1/notes"
const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRjaG16ZmpyeXdjZXFpaXJ1Z2J4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODE2MzYwOTksImV4cCI6MjA5NzIxMjA5OX0.BAfr1NrqWLzNsI-4Knx_j7HjGkFOp5zzSBLmfo-3i-o"

const headers = {
    apikey: API_KEY,
    Authorization: `Bearer ${API_KEY}`,
    "Content-Type": "application/json",
}

export const notesAPI = {
    async fetchNotes() {
        const response = await axios.get(API_URL, { headers })
        return response.data
    },

    async createNote(data) {
        const response = await axios.post(API_URL, data, { headers })
        return response.data
    },

    async deleteNote(id) {
        await axios.delete(`${API_URL}?id=eq.${id}`, { headers })
    }
}
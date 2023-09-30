import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://localhost:3000',
    headers: {
        'Content-Type': 'application/json',
    },
})

export const mainAPI = {
    getAllUsers() {
        return instance.get('/users/getAllUsers')
    },

    getAllFunds() {
        return instance.get('/api/funds/getAllFunds')
    },

    getAllCompanies() {
        return instance.get('/api/companies/getAllCompanies')
    },
}

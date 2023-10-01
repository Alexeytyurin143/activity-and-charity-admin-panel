import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://45.95.234.99:8080',
    headers: {
        'Content-Type': 'application/json',
    },
})

export const mainAPI = {
    getAllUsers() {
        return instance.get('api/users/getAllUsers')
    },

    getAllFunds() {
        return instance.get('/api/funds/getAllFunds')
    },

    getAllCompanies() {
        return instance.get('/api/companies/getAllCompanies')
    },

    saveFund() {
        return instance.post('/api/funds/saveFund', object)
    },

    getAllCompanies() {
        return instance.get('/api/companies/getAllCompanies')
    },
}

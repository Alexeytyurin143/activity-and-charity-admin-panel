import { mainAPI } from '../api/api'



const initialState = {
	fund: {
		fundname: '',
		checkingAccount: 0,
		inn: 0,
		description: '',
	},
}

export const mainReducer = (state = initialState, action) => {
	switch (action.type) {
		

		default:
			return state
	}
}

const setUsers = (users) => ({ type: SET_USERS, users })
const setCompanies = (companies) => ({ type: SET_COMPANIES, companies })
const setFunds = (funds) => ({ type: SET_FUNDS, funds })

export const requestCompanies = () => async (dispatch) => {
	const response = await mainAPI.getAllCompanies()

	if (response.status === 200) {
		dispatch(setCompanies(response.data))
	} else {
		console.log(response)
	}
}

export const requestFunds = () => async (dispatch) => {
	const response = await mainAPI.getAllFunds()

	if (response.status === 200) {
		dispatch(setFunds(response.data))
	} else {
		console.log(response)
	}
}

export const requestUsers = () => async (dispatch) => {
	const response = await mainAPI.getAllUsers()
	if (response.status === 200) {
		dispatch(setUsers(response.data))
	} else {
		console.log(response)
	}
}

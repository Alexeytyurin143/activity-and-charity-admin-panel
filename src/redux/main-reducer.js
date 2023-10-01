import { mainAPI } from '../api/api'

const SET_USERS = 'SET_USERS'
const SET_COMPANIES = 'SET_COMPANIES'
const SET_FUNDS = 'SET_FUNDS'
const POST_FUND = 'POST_FUND'

const initialState = {
	users: [],
	companies: [],
	funds: [],
	fund: {},
}

export const mainReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_COMPANIES:
			return { ...state, companies: action.companies }

		case SET_FUNDS:
			return { ...state, funds: action.funds }

		case SET_USERS:
			return { ...state, users: action.users }

		case POST_FUND:
			return { ...state, fund: action.fund }

		default:
			return state
	}
}

const setUsers = (users) => ({ type: SET_USERS, users })
const setCompanies = (companies) => ({ type: SET_COMPANIES, companies })
const setFunds = (funds) => ({ type: SET_FUNDS, funds })
const postFund = (fund) => ({ type: POST_FUND, fund })

export const requestPostFund = (object) => async (dispatch) => {
	const response = await mainAPI.saveFund(object)

	if (response.status === 200) {
		dispatch(postFund(response.data))
	} else {
		console.log(response)
	}
}

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

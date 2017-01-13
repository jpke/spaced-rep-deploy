import fetch from 'isomorphic-fetch';

// const URL = "http://localhost:3090/"
const URL =  "https://intense-wildwood-92655.herokuapp.com/"

export const CHECK_RESPONSE = 'CHECK_RESPONSE'
export const checkResponse = (isCorrect) => {
  return {
    type: CHECK_RESPONSE,
    isCorrect
  }
}

export const LOGGED_IN = 'LOGGED_IN'
export const loggedIn = (accessToken) => {
	return {
		type: LOGGED_IN,
		accessToken
	}
}

export const SAVE_COOKIE = 'SAVE_COOKIE'
export const saveCookie = () => {
	return {
		type: SAVE_COOKIE
	}
}

export const LOG_OUT = 'LOG_OUT'
export const logOut = () => {
	return {
		type: LOG_OUT
	}
}

export const POPULATE_QUESTIONS = 'POPULATE_QUESTIONS'
export const populateQuestions = (data) => {
	return {
		type: POPULATE_QUESTIONS,
		data
	}
}

export const FETCH_QUESTION = 'FETCH_QUESTION'
export const fetchQuestion = () => {
	console.log("Access TOKEN::", localStorage.getItem('token'))
	return (dispatch) => {
		return fetch(URL + 'question', {headers: {'Accept': 'application/json',
			'Authorization': `Bearer ${localStorage.getItem('token')}`}}
		).then((res) => {
			if (res.status < 200 || res.status >= 300) {
				const error = new Error(res.statusText);
				error.res = res;
				console.error(error)
				throw error;
			}
			return res.json()
		}).then((data) => {
			return dispatch(populateQuestions(data))
		})
	}
}

export const SEND_USER_INPUT = 'SEND_USER_INPUT'
export const sendUserInput = (_id, isCorrect) => {
	return (dispatch) => {
		return fetch(URL + 'question', {
			method: 'PUT',
			body: JSON.stringify({_id, isCorrect}),
			headers: {'Accept': 'application/json', 'content-type': 'application/json',
			'Authorization': `Bearer ${localStorage.getItem('token')}`}
		}).then((res) => {
			if (res.status < 200 || res.status >= 300) {
				const error = new Error(res.statusText);
				error.res = res;
				console.error(error)
				throw error;
			}
			return res.json()
		}).then((data) => {
			return dispatch(populateQuestions(data))
		})
	}
}

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

export const DEMO = 'DEMO'
export const demo =() => {
  return (dispatch) => {
    return fetch(URL + 'demo/question', {
      method:'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
    .then((res) => {
      if(res.status !== 201) throw new Error(res.statusText);
      return res.json()
    })
    .then((res) => {
      dispatch({type: DEMO});
      return dispatch(loggedIn(res.id))
    })
    .catch((err) => {
      alert("problem with demo login: ", err);
    })
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

//get next quiz question
export const FETCH_QUESTION = 'FETCH_QUESTION'
export const fetchQuestion = (demoMode) => {
	console.log("Access TOKEN::", localStorage.getItem('token'))
	return (dispatch) => {
    console.log("demo: ", demoMode);
    let url = URL + (demoMode ? 'demo/question' : 'question')
    console.log("url: ", url);
		return fetch(url, {headers: {'Accept': 'application/json',
			'Authorization': `Bearer ${localStorage.getItem('token')}`}}
		).then((res) => {
			if (res.status !== 200) {
				throw new Error(res.statusText);
			}
			return res.json()
		}).then((data) => {
			return dispatch(populateQuestions(data))
		})
    .catch((err) => {
      alert("Server error in getting question: " + err)
    })
	}
}

export const SEND_USER_INPUT = 'SEND_USER_INPUT'
export const sendUserInput = (_id, isCorrect, demoMode) => {
	return (dispatch) => {
    let url = URL + (demoMode ? 'demo/question' : 'question')
		return fetch(url, {
			method: 'PUT',
			body: JSON.stringify({_id, isCorrect}),
			headers: {'Accept': 'application/json', 'content-type': 'application/json',
			'Authorization': `Bearer ${localStorage.getItem('token')}`}
		})
    .then((res) => {
      if (res.status !== 200) {
				throw new Error(res.statusText);
			}
			return res.json()
  	}).then((data) => {
			return dispatch(populateQuestions(data))
    })
    .catch((err) => {
        alert("Server error in submitting question: " + err)
    })
	}
}

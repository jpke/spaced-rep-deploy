import {
  CHECK_RESPONSE,
  LOGGED_IN,
  LOG_OUT,
  POPULATE_QUESTIONS
} from '../actions/actions';

export const initialState = {
  questions: [],
  numCorrect: 0,
  numIncorrect: 0,
  isLoggedIn: false,
  accessToken: undefined,
  score: 0
}

export const Reducer = function(state=initialState, action={}) {
  switch(action.type) {

    case CHECK_RESPONSE:
      let score = state.score
      let numCorrect = state.numCorrect
      let numIncorrect = state.numIncorrect
      if (action.isCorrect) {
        score += 5
        numCorrect++
      } else {
        score -= 5
        numIncorrect++
      }

      return { ...state, isCorrect: action.isCorrect,
              numCorrect: numCorrect, numIncorrect: numIncorrect, score: score }

    case LOGGED_IN:
    console.log(action.accessToken)
    localStorage.setItem('token', action.accessToken)
    localStorage.getItem('token')
      return {...state, isLoggedIn: true}

    case LOG_OUT:
      localStorage.removeItem('token')
      return {...state, isLoggedIn: false}

    case POPULATE_QUESTIONS:
      return {...state, questions: action.data}

    default:
      return state;
  }

}

import {
  CHECK_RESPONSE,
  LOGGED_IN,
  LOG_OUT,
  POPULATE_QUESTIONS,
  DEMO
} from '../actions/actions';

export const initialState = {
  question: "",
  numCorrect: 0,
  numIncorrect: 0,
  isLoggedIn: false,
  demoMode: false,
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
      return {
        ...state,
        isCorrect: action.isCorrect,
        numCorrect: numCorrect,
        numIncorrect: numIncorrect,
        score: score
      }
    case DEMO:
      return {
        ...state,
        demoMode: true
      };
    case LOGGED_IN:
    localStorage.setItem('token', action.accessToken)
    localStorage.getItem('token')
      return {
        ...state,
        isLoggedIn: true
      }
    case LOG_OUT:
      localStorage.removeItem('token')
      return {
        ...state,
        isLoggedIn: false,
        demoMode: false
      }
    case POPULATE_QUESTIONS:
      return {
        ...state,
        question: action.data
      }
    default:
      return state;
  }

}

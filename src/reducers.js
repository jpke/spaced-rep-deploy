import {
  CHECK_RESPONSE,
  LOGGED_IN,
  SAVE_COOKIE,
  LOG_OUT,
  POPULATE_QUESTIONS
} from './actions';

import cookie from 'react-cookie'

export const initialState = {
  questions: [],
  numCorrect: 0,
  numIncorrect: 0,
  isLoggedIn: (false),
  accessToken: undefined,
  score: 0
}

export const Reducer = function(state=initialState, action={}) {
console.log('cookie::::', cookie.load('accessToken'))
  switch(action.type) {

    case CHECK_RESPONSE:
      let questions;
      let score = state.score
      let numCorrect = state.numCorrect
      let numIncorrect = state.numIncorrect
      let multiplier = 2
      let oldQuestion = {...state.questions[0]}
      if (action.isCorrect) {
        score += 5
        multiplier = 3
        numCorrect++
      } else {
        score -= 5
        numIncorrect++
      }
      oldQuestion.mValue = oldQuestion.mValue * multiplier;
      questions = state.questions.slice(1, oldQuestion.mValue +  1);
      questions = questions.concat(oldQuestion, state.questions
        .slice(oldQuestion.mValue + 1, state.questions.length));

      return { ...state, questions: questions, isCorrect: action.isCorrect, 
              numCorrect: numCorrect, numIncorrect: numIncorrect, score: score }

    case LOGGED_IN:
      return {...state, isLoggedIn: true, accessToken: action.accessToken}
    
    // case SAVE_COOKIE:
    //   return {...state, isLoggedIn: cookie.load('accessToken') != null}

    case LOG_OUT:
      return {...state, isLoggedIn: false, accessToken: undefined}

    case POPULATE_QUESTIONS:
      return {...state, questions: action.data}
    
    default:
      return state;
  }

}

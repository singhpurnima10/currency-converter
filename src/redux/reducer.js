import { ADD_USER_ASYNC, GET_CURRENCY } from "./constant";


const intialState = {
  currency:{}
}

function userDataReducer(state=intialState, action) {
  switch (action.type) {
    case GET_CURRENCY:
      return Object.assign({}, state, {
        currency: action.value.data
      });
    default:
      return state;
  }
}

export default userDataReducer;

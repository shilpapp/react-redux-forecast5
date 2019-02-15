import { ADD_CITY,DATA_LOADED } from "../constants/action-types";
const initialState = {
  city: [],
  foreCastArray: []
};
function rootReducer(state = initialState, action) {
  if (action.type === ADD_CITY) {
    return Object.assign({}, state, {
      city: state.city.concat(action.payload)
    });
  }
  if (action.type === DATA_LOADED) {
    return Object.assign({}, state, {
      foreCastArray: state.foreCastArray.concat(action.payload)
    });
  }
  return state;
}
export default rootReducer;
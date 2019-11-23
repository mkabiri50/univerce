
import * as actionType from '../actions/actionTypes';


const initialState = {
  personInfo: [],

}
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.ADD_PERSON:
      return {
        ...state,
        personInfo: state.personInfo.concat(action.info),       
        modalVisible: false,

      }
    case actionType.DELETE_PERSON:
      return {
        ...state,
        personInfo: state.personInfo.filter((p,index) => {
          return index !== action.id
        }
        )
      }
    
    default:
      return state
  }

}

export default reducer;

import * as actionType from '../actions/actionTypes';


const initialState = {
  personInfo: [],
  data:[]

}
const reducer = (state = initialState, action) => {
state.personInfo.map(p=>console.log(p.id,'gggoooozzzz'))
  console.log(state.personInfo,'eeee')
  switch (action.type) {
    case actionType.ADD_PERSON:
      return {
        ...state,
        personInfo: state.personInfo.concat({firstName:action.info.firstName,family:action.info.family,email:action.info.email,age:action.info.age, id:Math.random()}),       

      }
    case actionType.DELETE_PERSON:
      return {
        ...state,
        personInfo: state.personInfo.filter((p,index) => {
          return index !== action.id
        }
        )
      }
      case actionType.START_EDITING:
      return {
        ...state,
        data:action.info
      }
      case actionType.EDIT_PERSON:
  
        return {
          ...state,
         personInfo: state.personInfo.map(p=>p.id===action.id?p=action.value:p)
        }
    
    default:
      return state
  }

}

export default reducer;
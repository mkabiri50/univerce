import * as actionTypes from './actionTypes';

export const addPerson =(info)=>{
    return{
        type:actionTypes.ADD_PERSON,
        info:info
    }
}
export const deletePerson =(id)=>{
    return{
        type:actionTypes.DELETE_PERSON,
        id:id
    }
}
export const editPerson =(id)=>{
    return{
        type:actionTypes.EDIT_PERSON,
        id:id
    }
}

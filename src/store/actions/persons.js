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
export const startEditing =(info,id)=>{
    return{
        type:actionTypes.START_EDITING,
        info:info,
        id:id
    }
}


export const editPerson =(value,id)=>{
    return{
        type:actionTypes.EDIT_PERSON,
        id:id,
        value:value
    }
}

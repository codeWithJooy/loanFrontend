import { USER_SUCCESS } from "../actionTypes/userTypes";

const initialize={
    userId:"",
    phoneNumber:"",
}

const userReducer=(state=initialize,action)=>{
    const payload=action.payload;

    switch(action.type){
        case USER_SUCCESS:
            return{
                userId:payload.userId,
                phoneNumber:payload.phoneNumber
            }
            default:
                return state
    }
}

export default userReducer;
import { UserActionTypes, UsersAction } from '../../types/usersTypes'
import { UsersState } from "../../types/usersTypes";


const usersState = {
    userList: [],
    loading: false,
    error: null,



}

export const usersReducer = (state = usersState, action: UsersAction): UsersState => {

    switch (action.type) {

        case UserActionTypes.GET_USERS:
            return {
                loading: true, error: null, userList: []
            }

        case UserActionTypes.GET_USERS_SUCCESS:
            return {
                loading: false, error: null, userList: action.userList
            }

        case UserActionTypes.GET_USERS_ERROR:
            return {
                loading: false, error: action.error, userList: []
            }

        default:
            return state
    }

}





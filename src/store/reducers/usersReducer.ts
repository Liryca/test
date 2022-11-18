import { UsersActionType } from '../../types/usersTypes'
import { UsersState } from "../../types/usersTypes";


const usersState = {
    userList: [],
    loading: false,
    error: null
}

export const usersReducer = (state = usersState, action: UsersActionType): UsersState => {
    console.log(action)
    switch (action.type) {
        case "GET_USERS":
            return { loading: true, error: null, userList: [] }
        case 'GET_USERS_SUCCESS':
            return { loading: false, error: null, userList: action.userList }
        case 'GET_USERS_ERROR':
            return { loading: false, error: action.error, userList: [] }
        default:
            return state
    }

}
import { UsersActionType } from '../../types/usersTypes'
import { UsersState } from "../../types/usersTypes";


export const usersState = [];

export const usersReducer = (state = usersState, action: UsersActionType): UsersState => {
    switch (action.type) {
        case "SORT_NAME_USERS":
            return [
                ...action.users]
            
        case "SORT_DATE_USERS": {
            return [
                ...action.users
            ]
        }
        default:
            return state
        }   
}
import { User, UserActionTypes } from "../../types/usersTypes";
import { Dispatch, } from 'redux';
import { fetchUsers, sotredUsersByName, sotredUsersByDay} from "../../api/api";
import { RootState } from "..";


export const getUsersAction = () => ({
    type: UserActionTypes.GET_USERS,
})

export const getUsersSuccessAction = (userList: User[]) => ({
    type: UserActionTypes.GET_USERS_SUCCESS,
    userList: userList
})

export const getUsersErrorAction = (error: string) => ({
    type: UserActionTypes.GET_USERS_ERROR,
    error: error
})


export function getUsersThunk() {
    return async function (dispatch: Dispatch, getState: () => RootState) {
        const { tabs, modal} = getState();
        try {
            dispatch(getUsersAction());
            const response = await fetchUsers(tabs.department);
            const result = modal.activeRadio === 'name' ? sotredUsersByName(response.items) : sotredUsersByDay(response.items);
            dispatch(getUsersSuccessAction(result));
        } catch (e) {
            dispatch(getUsersErrorAction('Error'));
        }
    }
}


// export function filterUsers() {
//     return async function (dispatch: Dispatch, getState: () => RootState) {
//         const { search } = getState();
//         const response = await fetchUsers()
//         const result = response.items.filter((user: User) => user.firstName.toLowerCase().includes(autocomplite.autocomplite.toLowerCase()) && autocomplite.autocomplite !== '');
//         dispatch(getUsersSuccessAction(result))
//     }

// }

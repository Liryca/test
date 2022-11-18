import { User } from "../../types/usersTypes";
import { Dispatch, } from 'redux';
import { fetchAllUsers, fetchDepartmentUsers, sotredUserDay, sotredUserName } from "../../api/api";
import { RootState } from "..";


// export const getAllUserAction=(users:User[],loading:boolean,error:null|string)=>({
//     type: 'GET_ALL_USERS',
//     users,
//     loading,
//     error

//  })
 
//  export const getDepartmentUsersAction =(users:User[],loading:boolean,error:null|string)=>({
//      type: 'GET_DEPARTMENT_USERS',
//      users,
//      loading,
//      error
//  })
 
 

 
//  export function getAllUserThunk() {
//      return async function (dispatch: Dispatch, getState: () => RootState) {
//          const response = await fetchAllUsers()
//          dispatch(getAllUserAction(response.items,true,null))
//      }
//  }
 
//  export function getUserDepartmentThunk() {
//      return async function (dispatch: Dispatch, getState: () => RootState) {
//          const { users, modal, sort } = getState()
//          const response = await fetchDepartmentUsers(sort.department)
//          dispatch(getDepartmentUsersAction(response.items,true,null))
//      }
//  }
 
export const getUsersAction =()=>({
    type: 'GET_USERS',
})

export const getUsersSuccessAction = (userList:User[]) => ({
    type: 'GET_USERS_SUCCESS',
    userList
})

export const getUsersErrorAction = (error:string) => ({
    type: 'GET_USERS_ERROR',
    error
})





 export function getUser() {
     return async function (dispatch: Dispatch, getState: () => RootState) {
        const { sort } = getState()
         try {
             dispatch(getUsersAction());
             if (sort.department === 'all') {
                const response = await fetchAllUsers();
                dispatch(getUsersSuccessAction(response.items));
            } else {
                const response = await fetchDepartmentUsers(sort.department);
                dispatch(getUsersSuccessAction(response.items));
            }

         } catch (e) {
             console.log(e)
             dispatch(getUsersErrorAction('Error'))
         }
         
         
       
      
     
    }
}


// export const getSortedNameUsers = (users:User[]) => ({
//     type: 'SORT_NAME_USERS',
//     users
  
// })

// export const getSortedDepartmentUsers = (users: User[]) => ({
//     type: 'SORT_DEPARTMENT_USERS',
//     users
// })

// export const getSortedAutocomplitUsers = (users: User[]) => ({
//     type: 'SORT_DEPARTMENT_USERS',
//     users
// })














// export function userNameThunk() {

//     return async function (dispatch: Dispatch, getState: () => RootState) {
//         console.log(getState())
//         const { users, modal, sort } = getState()
//         if (sort.department === 'all') {
//             const response = await fetchAllUsers()
//             dispatch(getSortedNameUsers(sotredUserName(response.items)))
//         } else {
//             const responsDepartment = await fetchUsersDepartment(getState().sort.department)
//             dispatch(getSortedDepartmentUsers(sotredUserName(responsDepartment.items)))
//      }  
//     };
// }

// export function userDateThunk() {
//     return async function (dispatch: Dispatch, getState: () => RootState) {
//         console.log(getState())
      
//         if (getState().sort.department === 'all') {
//             const responseAll = await fetchUsers()
//             dispatch(getSortedNameUsers(sotredUserDay(responseAll.items)))
//         } else {
//             const responsDepartment = await fetchUsersDepartment(getState().sort.department)
//             dispatch(getSortedDepartmentUsers(sotredUserDay(responsDepartment.items)))
            
//         }
        
       
              
//     };
// }


// export function sendUserDepartmentThunk(value: string) {
//     return async function (dispatch: Dispatch) {
//         const response = await fetchUsersAbout(value)
//         console.log(response)
//         dispatch(getSortedDepartmentUsers((response.items)))
              
//     };
// }

// export function sendUserAutocompliteThunk() {
//     return async function (dispatch: Dispatch) {
//         const response = await fetchUsers()
//         console.log(response)
//         dispatch(getSortedDepartmentUsers((response.items)))
              
//     };
// }

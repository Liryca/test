import { SortActionType, SortState } from "../../types/sortTypes";

export const sortState = {
    department:'all'
};

export function sortReducer(state = sortState, action: SortActionType): SortState {
    switch (action.type) {
        case 'CHOOSE_DEPARTMENT':
            return {
               department: action.department
            }
        default:
            return state
    }
}




// export const sortReducer = (state = sortState, action: SortActionType): SortState => {
//     switch (action.type) {
//         case 'CHOOSE_DEPARTMENT': {
//             return {
//                 ...state,
//                 department: action.department
//             }
//         }
//         default:
//             return state
//     }
// }

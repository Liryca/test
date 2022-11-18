import { FilterActionType, FilterState } from "../../types/filterTypes";

export const filterState = {
    department:'all'
};

export function filterReducer(state = filterState, action: FilterActionType): FilterState {
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

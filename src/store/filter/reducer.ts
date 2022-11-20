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
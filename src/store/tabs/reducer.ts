import { TabsActionType, TabsState } from "../../types/tabsTypes";

export const filterState = {
    department:'all'
};

export function tabsReducer(state = filterState, action: TabsActionType): TabsState {
    switch (action.type) {
        case 'CHOOSE_DEPARTMENT':
            return {
               department: action.department
            }
        default:
            return state
    }
}
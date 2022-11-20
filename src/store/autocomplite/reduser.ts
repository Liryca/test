import { AutocompliteAction, AutocompliteState } from "../../types/autocomplite";

const autocompliteState = {
    autocomplite:''
};

export const autocompliteReducer = (state = autocompliteState, action: AutocompliteAction): AutocompliteState => {
    switch (action.type) {
        case 'CHANGE_VALUE_AUTOCOMPLITE':
            return {
                autocomplite:action.autocomplite
            }
            default:
                return state
    }
   
}
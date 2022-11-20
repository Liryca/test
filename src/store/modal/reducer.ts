import { ModalAction, ModalState } from "../../types/modalTypes"

export const modalState = {
    show: false,
    radio:'name'
}

export const modalReducer = (state = modalState, action: ModalAction): ModalState => {

    switch (action.type) {
     
        case 'OPEN_MODAL': {
            return {
                ...state,
                show:true
            }
        }
        case 'CLOSE_MODAL': {
            return {
                ...state,
                show:false
            }
        }
        case 'CHECKED_RADIO': {
            return {
                ...state,
                 radio:action.radio
            }
            }
         
          
        default:
            return state
    }
}
export const openModalShow = (show: boolean) => ({
   
    type: 'OPEN_MODAL',
    show  
})

export const closeModalShow = (show:boolean) => ({
    type: 'CLOSE_MODAL',
    show
        
})

export const checkedRadioModal = (radio:string) => ({
    type: 'CHECKED_RADIO',
    radio
})
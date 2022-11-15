import React, { useEffect} from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/useSelectorTyped';
import { checkedRadioModal, closeModalShow } from '../../store/actions/modalAction';
import { sendUserDateThunk, sendUserNameThunk } from '../../store/actions/usersAction';
import './Modal.css';
import x from './x.svg';

const Modal: React.FC = () => {

    const show = useAppSelector((state: { modal: { show: boolean; }; }) => state.modal.show)
    const radio = useAppSelector((state: { modal: { radio:string}; }) => state.modal.radio)
    
    const dispatch = useAppDispatch();
    
    useEffect(() => {
        if (radio === 'name') {
            dispatch(sendUserNameThunk());
        } else {
            dispatch(sendUserDateThunk());
        }
    }, [radio, dispatch])

    function closeModal() {
        dispatch(closeModalShow(false));
    }

    function chahgeChecked(event: React.ChangeEvent<HTMLInputElement>) {
    
        dispatch(checkedRadioModal(event.target.value));
        setTimeout(() => dispatch(closeModalShow(false)), 100);
    }

    return (
        <div className='modal' style={!show ? { visibility: "hidden" } : { visibility: 'visible' }}>
            <div className='modal-content'  >
                <img onClick={closeModal} src={x} alt=''></img>
                <div className='modal-title'><h2>Сортировка</h2></div>

                <div className='modal-radio-button'>
                    <label className="radio"><input onChange={chahgeChecked} checked={radio === 'name' ? true : false} value='name' type="radio" /><span></span><p>По алфавиту</p> </label>
                    <label className="radio"> <input onChange={chahgeChecked} checked={radio === 'birthday' ? true : false} value='birthday' type="radio" /><span></span><p>По дню рождения</p></label>
                </div>
            </div>
        </div>
    );
};

export default Modal;
import { sotredUsersByDay, sotredUsersByName } from "../../api/api";
import { useAppDispatch, useAppSelector } from "../../hooks/useSelectorTyped";
import { checkedRadioButton, closeModalShow } from "../../store/modal/actions";
import { getUsersSuccessAction } from "../../store/users/actions";
import { User } from "../../types/usersTypes";
import "./Modal.css";
import x from "./x.svg";

const Modal: React.FC = () => {

    const dispatch = useAppDispatch();
   const {modal} = useAppSelector(state => state);

    function closeModal() {
        dispatch(closeModalShow(false));
    }

    function checkDay(event: React.ChangeEvent<HTMLInputElement>) {
        dispatch(checkedRadioButton(event.target.value));
        setTimeout(() => dispatch(closeModalShow(false)), 100);
    }

    function checkName(event: React.ChangeEvent<HTMLInputElement>) {
        dispatch(checkedRadioButton(event.target.value));
        setTimeout(() => dispatch(closeModalShow(false)), 100);   
    }

    return (
        <div className='modal' style={!modal.show ? { visibility: "hidden" } : { visibility: 'visible' }}>
            <div className='modal-content'  >
                <img onClick={closeModal} src={x} alt=''></img>
                <div className='modal-title'><h2>Сортировка</h2></div>

                <div className='modal-radio-buttons'>
                    <label className="radio-button"><input onChange={checkName} checked={modal.activeRadio === 'name' ? true : false} value='name' type="radio" /><span></span><p>По алфавиту</p> </label>
                    <label className="radio-button"> <input onChange={checkDay} checked={modal.activeRadio === 'birthday' ? true : false} value='birthday' type="radio" /><span></span><p>По дню рождения</p></label>
                </div>
            </div>
        </div>
    );
};

export default Modal;
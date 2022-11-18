import React from 'react';
import './SearchUser.css';
import search from './images/search.svg';
import filtered from './images/filtered.svg';
import filteredActive from './images/filtered2.svg';
import { useAppDispatch, useAppSelector} from '../../hooks/useSelectorTyped';
import { openModalShow } from '../../store/actions/modalAction';
import { User } from '../../types/usersTypes';

const SearchUser: React.FC = () => {
    
    const dispatch = useAppDispatch();
    const radio = useAppSelector((state: { modal: { radio: string }; }) => state.modal.radio);
    const users = useAppSelector((state: { users: {users:User }; }) => state.users);
    // const [autocomplit, setAutocomplit] = useState([]);
 
    function handleModalOpen(e: React.MouseEvent) {
        dispatch(openModalShow(true)); 
    }


    function searchUser(e: React.ChangeEvent<HTMLInputElement>) {
        console.log(users)
        // // const result = users.filter(user => user.firstName.toLowerCase().includes(e.target.value.toLowerCase()) && e.target.value !== '')
        // console.log(result)
}      


    return (
        <div className='search-user'>
            <img className='input-img-search' src={search} alt='search'></img>
            <input onChange={searchUser} className='input-search-user' placeholder='Введите имя, тег, почту...'></input>
            <img onClick={handleModalOpen} className='input-img-filtered' src={radio==='name'?filtered:filteredActive} alt='search'></img> 
        </div>
        
    );
};

export default SearchUser;


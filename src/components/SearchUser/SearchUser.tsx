import React from 'react';
import './SearchUser.css';
import search from './images/search.svg';
import filtered from './images/filtered.svg';
import filteredActive from './images/filtered2.svg';
import { useAppDispatch, useAppSelector} from '../../hooks/useSelectorTyped';
import { openModalShow } from '../../store/actions/modalAction';

const SearchUser: React.FC = () => {
    
    const dispatch = useAppDispatch();
    const radio = useAppSelector((state: { modal: { radio: string }; }) => state.modal.radio);
 
    function handleModalOpen(e: React.MouseEvent) {
        dispatch(openModalShow(true)); 
    }

    return (
        <div className='search-user'>
            <img className='input-img-search' src={search} alt='search'></img>
            <input className='input-search-user' placeholder='Введите имя, тег, почту...'></input>
            <img onClick={handleModalOpen} className='input-img-filtered' src={radio==='name'?filtered:filteredActive} alt='search'></img> 
        </div>
        
    );
};

export default SearchUser;


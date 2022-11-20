import React, { useEffect, useState } from "react";
import "./SearchUser.css";
import search from "./images/search.svg";
import filtered from "./images/filtered.svg";
import filteredActive from "./images/filtered2.svg";
import { useAppDispatch, useAppSelector } from "../../hooks/useSelectorTyped";
import { openModalShow } from "../../store/modal/actions";
import { User } from "../../types/usersTypes";
import { getUsers, getUsersAutocompliteAction } from "../../store/users/actions";
import { changeAutocompliteValue } from "../../store/autocomplite/actions";

const SearchUser: React.FC = () => {
    const [value, setValue] = useState<User[]>([])
    const dispatch = useAppDispatch();
    const radio = useAppSelector((state: { modal: { radio: string }; }) => state.modal.radio);
    const users = useAppSelector((state: { users: { [x: string]: any; users: User }; }) => state.users.userList);
    const autocomplite = useAppSelector((state: { autocomplite: { autocomplite: string }; }) => state.autocomplite.autocomplite);
 

    // useEffect(() => {
    //     if (autocomplite.length) {
    //         dispatch(getUsersAutocompliteAction(value))
    //     } else {
    //         dispatch(getUsers())
    //     }
    // }, [autocomplite, dispatch, value])




    function handleModalOpen(e: React.MouseEvent) {
        dispatch(openModalShow(true));
    }


    function searchUser(e: React.ChangeEvent<HTMLInputElement>) {


        // setAutocomplit(e.target.value)
        // const result = users.filter((user: User) => user.firstName.toLowerCase().includes(e.target.value.toLowerCase()) && e.target.value !== '');
        // setValue((prev) => {
        //     return [
              
        //         ...result
        //     ]
        // })
        dispatch(changeAutocompliteValue(e.target.value))


    }

    return (
        <div className='search-user'>
            <img className='input-img-search' src={search} alt='search'></img>
            <input onChange={searchUser} className='input-search-user' placeholder='Введите имя, тег, почту...'></input>
            <img onClick={handleModalOpen} className='input-img-filtered' src={radio === 'name' ? filtered : filteredActive} alt='search'></img>
        </div>

    );
};

export default SearchUser;


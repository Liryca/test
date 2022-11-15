import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/useSelectorTyped";
import { sendUserNameThunk } from "../../store/actions/usersAction";
import { User } from "../../types/usersTypes";
import "./UserList.css";
import Modal from "../Modal/Modal";
import { usersState } from "../../store/reducers/usersReducer";
import { getDayBirthday } from '../../api/api';


function checkDate(user: any) {
  return new Date(user.birthday).getMonth() + 1 > new Date().getMonth() + 1 ||
    (new Date(user.birthday).getMonth() + 1 === (new Date().getMonth() + 1) &&
      new Date(user.birthday).getDate() >= new Date().getDate())
}


const UserList: React.FC = () => {

  const dateNow = new Date();
  const nowmonth = dateNow.getMonth() + 1;
  const nextYear = dateNow.getFullYear() + 1;

  const dispatch = useAppDispatch();
  const userList = useAppSelector((state: any) => state.users);
  const radio = useAppSelector((state: { modal: { radio: string }; }) => state.modal.radio);

  useEffect(() => {
    setTimeout(() => {
      dispatch(sendUserNameThunk());
    }, 500);
  }, [dispatch]);

  console.log(userList);

  return (
    <section className="user-list">

      <Modal />
      {userList.map((user: User) => {
        return (
            <div key={user.id} className="user-card">
              <img className='user-card-avatar' src={user.avatarUrl} alt="avatar" />
              <div className="user-info">
                <div className="user-card-name">
                  <p>{user.firstName}</p>
                  <p>{user.lastName}</p>
                  <p>{user.userTag}</p>
                </div>
              <p className="user-card-department"><span>{user.department}</span></p>
             
            </div>
            {radio === 'birthday' && <p className='user-card-birthday'>{getDayBirthday(user.birthday)}</p>}
            </div> 
        

          

        )

      })}
    </section>





  );
};

export default UserList;












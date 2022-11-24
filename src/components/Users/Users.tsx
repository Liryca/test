import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/useSelectorTyped";
import { getUsersThunk } from "../../store/users/actions"
import { getDayBirthday } from "../../api/api";
import { User } from "../../types/usersTypes";
import "./Users.css";
import Modal from "../Modal/Modal";
import Error from "../Error/Error";
import 'react-loading-skeleton/dist/skeleton.css'
import SkeletonCard from "../Sceleton/Sceleton";

const Users: React.FC = () => {

  const dispatch = useAppDispatch();

  const userList = useAppSelector((state: { users: { userList: User[] } }) => state.users.userList);
  const { users, modal, tabs } = useAppSelector(state => state);
  const { error, loading } = users;


  useEffect(() => {
    dispatch(getUsersThunk())
  }, [tabs.department, dispatch]);

  console.log(users);

  function getDeteils() {
    console.log()
  }


  if (error === 'Error') {
    return <Error />
  }


  if (loading) {
    return <SkeletonCard />
  }




  return (
    <ul className="user-list">
      <Modal />
      {userList.map((user: User) => {
        return (
          <li onClick={getDeteils} key={user.id} className="user-card">
            <img className='user-card-avatar' src={user.avatarUrl} alt="avatar" />
            <div className="user-info">
              <div className="user-card-name">
                <p>{user.firstName}</p>
                <p>{user.lastName}</p>
                <p className="user-tag">{user.userTag.slice(0, 2).toLowerCase()}</p>
              </div>
              <p className="user-card-department"><span>{user.department}</span></p>

            </div>
            {modal.activeRadio === 'birthday' && <p className='user-card-birthday'>{getDayBirthday(user.birthday)}</p>}
          </li>
        )

      })}
    </ul>
  );
};

export default Users;



// const dateNow = new Date();
// const nowmonth = dateNow.getMonth() + 1;
// const nextYear = dateNow.getFullYear() + 1;

// function checkDate(user: any) {
//   return new Date(user.birthday).getMonth() + 1 > new Date().getMonth() + 1 ||
//     (new Date(user.birthday).getMonth() + 1 === (new Date().getMonth() + 1) &&
//       new Date(user.birthday).getDate() >= new Date().getDate())
// }









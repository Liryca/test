import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/useSelectorTyped";
import { getUsers} from "../../store/users/actions"
import { getDayBirthday } from "../../api/api";
import { User } from "../../types/usersTypes";
import "./Users.css";
import Modal from "../Modal/Modal";
import Error from "../Error/Error";

const UserList: React.FC = () => {

  const dispatch = useAppDispatch();
  const users = useAppSelector((state: { users: { userList: User[] } }) => state.users.userList);
  const radio = useAppSelector((state: { modal: { radio: string }; }) => state.modal.radio);
  const error = useAppSelector((state: { users: { error: string }; }) => state.users.error);
  const department = useAppSelector((state: { filter: { department: string }; }) => state.filter.department);
  const autocomplite = useAppSelector((state: { users: { autocomplite: User[] } }) => state.users.autocomplite);
  console.log(users)

  useEffect(() => {
   dispatch(getUsers()) 
  }, [department, dispatch]);

  if (error === 'Error') {
    return <Error />
  }


  return (

    <section className="user-list">
      <Modal />
     
      {users.map((user: User) => {
          return (
            <div key={user.id} className="user-card">
              <img className='user-card-avatar' src={user.avatarUrl} alt="avatar" />
              <div className="user-info">
                <div className="user-card-name">
                  <p>{user.firstName}</p>
                  <p>{user.lastName}</p>
                  <p className="user-tag">{user.userTag.slice(0, 2).toLowerCase()}</p>
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



// const dateNow = new Date();
// const nowmonth = dateNow.getMonth() + 1;
// const nextYear = dateNow.getFullYear() + 1;

// function checkDate(user: any) {
//   return new Date(user.birthday).getMonth() + 1 > new Date().getMonth() + 1 ||
//     (new Date(user.birthday).getMonth() + 1 === (new Date().getMonth() + 1) &&
//       new Date(user.birthday).getDate() >= new Date().getDate())
// }








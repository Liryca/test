import React, { useEffect, useState} from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/useSelectorTyped";
import { sendUserNameThunk } from "../../store/actions/usersAction";
import { User } from "../../types/usersTypes";
import "./UserList.css";
import Modal from "../Modal/Modal";
import { usersState } from "../../store/reducers/usersReducer";


function getDayBirthday(date: string) {
  
  const birthday = new Date(date); 


  const day = birthday.getDate();
  const month = new Date(date).toLocaleString('ru', { month: 'long' }).slice(0,3)
  return `${day} ${month}`
}






const UserList: React.FC = () => {

  const dispatch = useAppDispatch();
  const userList = useAppSelector((state: any) => state.users);
  const radio = useAppSelector((state: { modal: { radio: string }; }) => state.modal.radio);

  useEffect(() => {
    setTimeout(() => {
      dispatch(sendUserNameThunk());
    }, 500);
  }, [dispatch]);


  function compareDate(data:string) {
    const birthday = new Date(data); 
      const dateNow = new Date()
  
    const birthdayMonth = birthday.getMonth()+1;
    const nowmonth = dateNow.getMonth()+1;
    const nextYear = dateNow.getFullYear() + 1;
    
    if (birthdayMonth >= nowmonth) {
    return true
    } else {
      return false
  }
  
   
  
    // console.log(nowmonth, 'nowmonth');
    // console.log(nextYear, 'nowYear');
    // console.log(birthdayMonth, 'birthdayMonth');
  }
  console.log(compareDate(userList.birthday))

console.log(userList)
  return (
    <div className="user-list">
      <Modal/>
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
            {radio === 'birthday' && <p className='user-card-birthday'>{getDayBirthday(user.birthday) }</p>}
          </div>
      )
 
      })}
    </div>
  );
};

export default UserList;


 // useEffect(() => {
  //   async function fetchData() {
  //     setTimeout(async () => {
  //       const result = await fetchUsers()
  //       const sorted = sotredUserName(result.items)
  //       console.log(sorted)
  //       dispatch(getSortedNameUsers(sorted));

  //       },1000)

  //     }
  //   fetchData();

  //   }, [dispatch]);

  // if (loading) {
  //   return (
  //     <>
  //       <div className="cards">
        
  //         <Skeleton circle={true} height={20} width={50} />
  //         <Skeleton height={20} width={50} />
  //         <Skeleton height={20} width={50} />
  //         <Skeleton height={20} width={50} />
  //         <Skeleton height={20} width={50} />
     
  //       </div>
  //       {/* <div className="cards">
       
  //         <Skeleton count={4} />
  //         <Skeleton height={100} />
     
  //       </div>
      
  //         <div className="cards">
  //         <Skeleton count={4} />
  //         <Skeleton height={100} />
  //         </div>

    
  //         <div className="cards">
  //         <Skeleton count={4} />
  //         <Skeleton height={100} />
  //         </div> */}
     
  //     </>
  //   );
  // }
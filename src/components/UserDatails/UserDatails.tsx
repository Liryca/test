import React from 'react';
import { useParams } from 'react-router-dom';
import { getDayBirthday } from '../../api/api';
import { useAppSelector } from '../../hooks/useSelectorTyped';


const UserDatails: React.FC = () => {

    const params = useParams();
    console.log(params.id)
    const prodId = params.id;
    const { users } = useAppSelector(state => state);
    const { userList } = users;
    console.log(userList)
    const user = userList.find(i => i.id === prodId)
    const { avatarUrl, firstName, lastName, userTag, department, phone, birthday } = user

    return (
        <section className='user-datails'>
            <div>
                <p>{avatarUrl}</p>
                <p>{firstName} {lastName}</p>
                <p>{userTag}</p>
                <p>{department}</p>
            </div>
            <div>
                <p>{phone}</p>
                <p>{getDayBirthday(birthday)}</p>
                <p></p>
            </div>

        </section>
    );
};

export default UserDatails;
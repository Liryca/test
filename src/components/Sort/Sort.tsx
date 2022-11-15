import React, { useState } from 'react';
import './Sort.css';
import { useAppDispatch } from '../../hooks/useSelectorTyped';
import { sendUserDepartmentThunk, sendUserNameThunk } from '../../store/actions/usersAction';


const department = {
    android: 'Android',
    ios: 'iOS',
    design: 'Дизайн',
    management: 'Менеджмент',
    qa: 'QA',
    back_office: 'Бэк-офис',
    frontend: 'Frontend',
    hr: 'HR',
    pr: 'PR',
    backend: 'Backend',
    support: 'Техподдержка',
    analytics: 'Аналитика',
  }
  

const Sort: React.FC = () => {

    const [active, setActive] = useState<string|null>('Все');

    function sortedUserDepartment(e: React.MouseEvent, key: string) {
        const name  = (e.target as Element).textContent
        setActive(name)
        dispatch(sendUserDepartmentThunk(key))
    }

    function getAllUser(e: React.MouseEvent) {
        const name  = (e.target as Element).textContent
        setActive(name)
        dispatch(sendUserNameThunk())
    }

  const  dispatch = useAppDispatch()
    return (
        <div className='sort'>
          <p className={active==='Все'?'b':'a'} onClick={(e) =>getAllUser(e)}>Все</p>
          {Object.entries(department).map(([key, value],index) => {
            return <p key={index} className={active===value?'b':'a'} onClick={(e) => sortedUserDepartment(e,key)}>{value}</p>
          })}
        </div>
    );
};

export default Sort;



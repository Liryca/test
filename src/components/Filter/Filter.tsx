import React from "react";
import './Filter.css';
import { useAppDispatch, useAppSelector } from "../../hooks/useSelectorTyped";
import { getUsers} from "../../store/users/actions";
import { chooseDepartment } from "../../store/filter/actions"


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


const Filter: React.FC = () => {

    const active = useAppSelector(state => state.filter.department);
    const dispatch = useAppDispatch();

    function filteredUsers(key:string) {
        dispatch(chooseDepartment(key))
        dispatch(getUsers())
}


    return (
        <div className='sort'>
            <p className={active === 'all' ? 'b' : 'a'} onClick={(e) => filteredUsers('all')}>Все</p>
            {Object.entries(department).map(([key, value], index) => {
                return <p key={index} className={active === key ? 'b' : 'a'} onClick={() => filteredUsers(key)}>{value}</p>
            })}
        </div>
    );
};

export default Filter;



import React from 'react';
import './Filter.css';
import { useAppDispatch, useAppSelector } from '../../hooks/useSelectorTyped';
import { getUser} from '../../store/actions/usersAction';
import { chooseDepartment } from '../../store/actions/filterAction';


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

    function sortedUserDepartment(key: string) {
        dispatch(chooseDepartment(key))
        dispatch(getUser())
    }

    function getAllUser(key:string) {
        dispatch(chooseDepartment(key))
        dispatch(getUser())
    }

    return (
        <div className='sort'>
            <p className={active === 'all' ? 'b' : 'a'} onClick={(e) => getAllUser('all')}>Все</p>
            {Object.entries(department).map(([key, value], index) => {
                return <p key={index} className={active === key ? 'b' : 'a'} onClick={() => sortedUserDepartment(key)}>{value}</p>
            })}
        </div>
    );
};

export default Filter;



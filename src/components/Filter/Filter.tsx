import React from 'react';
import './Filter.css';
import { useAppDispatch, useAppSelector } from '../../hooks/useSelectorTyped';
import { getUser} from '../../store/actions/usersAction';
import { chooseDepartment } from '../../store/actions/sortAction';


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

    const active = useAppSelector(state => state.sort.department);
    const radio = useAppSelector(state => state.modal.radio);
    const dispatch = useAppDispatch();

    function sortedUserDepartment(key: string) {
        dispatch(chooseDepartment(key))
        dispatch(getUser())
        // radio==='name'?dispatch(userNameThunk()):dispatch(userDateThunk())
    }

    function getAllUser(key:string) {
        dispatch(chooseDepartment(key))
        dispatch(getUser())
        // radio==='name'?dispatch(userNameThunk()):dispatch(userDateThunk())
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



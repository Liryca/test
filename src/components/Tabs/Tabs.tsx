import React from "react";
import './Tabs.css';
import { useAppDispatch, useAppSelector } from "../../hooks/useSelectorTyped";
import { getUsersThunk} from "../../store/users/actions";
import { chooseDepartment } from "../../store/tabs/actions"

const departments = {
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


const Tabs: React.FC = () => {

    const {department} = useAppSelector(state=>state.tabs)

    const dispatch = useAppDispatch();

    function filteredUsersByDepartment(key:string) {
        dispatch(chooseDepartment(key))
        dispatch(getUsersThunk())
}

    return (
        <ul className='department-tabs'>
            <li className={department === 'all' ? 'all-department-tabs' : 'category-department-tabs'} onClick={(e) => filteredUsersByDepartment('all')}>Все</li>
            {Object.entries(departments).map(([key, value], index) => {
                return <li key={index} className={department === key ? 'category-department-tabs' : 'all-department-tabs'} onClick={() => filteredUsersByDepartment(key)}>{value}</li>
            })}
        </ul>
    );
};

export default Tabs;



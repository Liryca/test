import React from 'react';
import Skeleton from "react-loading-skeleton";
// import { useAppSelector } from '../../hooks/useSelectorTyped';


const SkeletonCardUser: React.FC = () => {

    // const userList = useAppSelector((state: any) => state.users);


    return (
        <div className="user-card">
            <Skeleton circle={true} height={20} width={50} />
            <Skeleton height={20} width={50} />
            <Skeleton height={20} width={50} />
            <Skeleton height={20} width={50} />
            <Skeleton height={20} width={50} />
        </div>
    );
};

export default SkeletonCardUser;
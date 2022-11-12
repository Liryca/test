import axios from 'axios';
import { User } from '../types/usersTypes';

export function fetchUsers() {
    const options = {
        method: 'GET',
        url: "https://stoplight.io/mocks/kode-frontend-team/koder-stoplight/86566464/users?__example=all",
        headers: {'Content-Type': 'application/json'}
      };
      
     return axios.request(options).then((response)=> {
       return response.data
      }).catch((error) =>{
       return error(error);
      });
    
}


export function sotredUserName(users: User[]) {
  return users.sort((a, b) => a.firstName > b.firstName ? 1 : -1);
  
}

export function sotredUserDay(users: User[]) {
  return users.sort((a, b) => Date.parse(a.birthday) < Date.parse(b.birthday) ? 1 : -1);
}
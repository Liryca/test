import axios from 'axios';
import { User } from '../types/usersTypes';

export async function fetchAllUsers() {    /// получение всех юзеров
  const options = {
    method: 'GET',
    url: "https://stoplight.io/mocks/kode-frontend-team/koder-stoplight/86566464/users?__example=all",
    // url:"https://stoplight.io/mocks/kode-frontend-team/koder-stoplight/86566464/users?__code=500&__dynamic=true",
    headers: { 'Content-Type': 'application/json' }
  };

  const response = await axios.request(options)
  console.log(response.data)
  return response.data
}


export async function fetchDepartmentUsers(d: string) {  // получение по департменту 

  const options = {
    method: 'GET',
    url: `https://stoplight.io/mocks/kode-frontend-team/koder-stoplight/86566464/users?__example=${d}`,
    headers: { 'Content-Type': 'application/json' }
  };

  const response = await axios.request(options)
  console.log(response.data)
  return response.data

}



export function getDayBirthday(date: string) {
  const birthday = new Date(date);
  const day = birthday.getDate();
  const month = new Date(date).toLocaleString('ru', { month: 'long' }).slice(0, 3);
  return `${day} ${month}`;

}





export function sotredUserName(users: User[]) {
  return users.sort((a, b) => a.firstName > b.firstName ? 1 : -1);

}

const date = new Date();
const monthNow = date.getMonth() + 1;
const dayNow = date.getDate();

export function sotredUserDay(users: User[]) {

  const a = users.filter((i) => {
    return new Date(i.birthday).getMonth() + 1 > monthNow ||
      (new Date(i.birthday).getMonth() + 1 === monthNow && new Date(i.birthday).getDate() >= dayNow)
  }).sort((a, b) => {
    if (new Date(a.birthday).getMonth() === new Date(b.birthday).getMonth()) {
      return new Date(a.birthday).getDate() > new Date(b.birthday).getDate() ? 1 : -1
    } else {
      return new Date(a.birthday).getMonth() > new Date(b.birthday).getMonth() ? 1 : -1
    }
  })

  const b = users.filter((i) => {
    return new Date(i.birthday).getMonth() + 1 < monthNow ||
      (new Date(i.birthday).getMonth() + 1 === monthNow && new Date(i.birthday).getDate() < dayNow)
  }).sort((a, b) => {
    if (new Date(a.birthday).getMonth() === new Date(b.birthday).getMonth()) {
      return new Date(a.birthday).getDate() > new Date(b.birthday).getDate() ? 1 : -1
    } else {
      return new Date(a.birthday).getMonth() > new Date(b.birthday).getMonth() ? 1 : -1
    }
  })

  return [...a, ...b]
}



// export function sortedUserDepartment(users: User[], value: string) {
//   console.log(users)
//   console.log(value)
//   return users.filter((user: any) => user.department === value)


// }

import axios from 'axios';
import { User } from '../types/usersTypes';

export function fetchUsers() {
  const options = {
    method: 'GET',
    url: "https://stoplight.io/mocks/kode-frontend-team/koder-stoplight/86566464/users?__example=all",
    headers: { 'Content-Type': 'application/json' }
  };

  return axios.request(options).then((response) => {
    return response.data
  }).catch((error) => {
    return error(error);
  });

}


export function sotredUserName(users: User[]) {
  return users.sort((a, b) => a.firstName > b.firstName ? 1 : -1);

}

const date = new Date('2022-07-24');
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
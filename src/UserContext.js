import { createContext } from 'react';

export const setUserContextFromLocalStorage = () => {
  const userTokenObject = JSON.parse(localStorage.getItem('userToken'))[0];
  console.log(userTokenObject);
  const updatedUser = {
    id: userTokenObject._id,
    username: userTokenObject.username,
    firstName: userTokenObject.firstName,
    lastName: userTokenObject.lastName,
    email: userTokenObject.email,
    password: userTokenObject.password,
    createdAt: userTokenObject.createdAt,
    updatedAt: userTokenObject.updatedAt,
  };
  return updatedUser;
};

export const UserContext = createContext(null);

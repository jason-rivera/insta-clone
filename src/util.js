export const removeUserFromLocalStorage = () => {
  localStorage.removeItem('accessToken');
  localStorage.removeItem('userToken');
};

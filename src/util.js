export const logoutUser = () => {
  localStorage.removeItem('accessToken');
  localStorage.removeItem('userToken');
};

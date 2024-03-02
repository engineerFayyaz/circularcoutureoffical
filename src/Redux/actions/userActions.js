// userActions.js
import axios from 'axios';

export const login = (formData) => async (dispatch) => {
  try {
    dispatch({ type: 'LOGIN_REQUEST' }); // Dispatch the request action
    const response = await axios.post('https://localhost:7220/api/users/login', formData);
    dispatch({ type: 'LOGIN_SUCCESS', payload: response.data }); // Dispatch the success action
    return response.data; // Return data for further processing if needed
  } catch (error) {
    dispatch({ type: 'LOGIN_FAILURE', payload: error.message }); // Dispatch the failure action
    throw error; // Re-throw the error for the component to handle
  }
};

export const logout = () => ({ type: 'LOGOUT' });

export const storeUserInfo = (userInfo) => ({
  type: 'STORE_USER_INFO',
  payload: userInfo
});
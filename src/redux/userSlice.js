import { createSlice } from '@reduxjs/toolkit';
import { useSelector, useDispatch } from 'react-redux';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    name: '',
    isLogged: false,
  },
  reducers: {
    logIn(state, action) {
      state.name = action.payload;
      state.isLogged = true;
    },
    logOut(state) {
      state.name = '';
      state.isLogged = false;
    },
  },
});

export const loggingReducer = userSlice.reducer;

const { logIn, logOut } = userSlice.actions;

const getIsLogged = state => state.user.isLogged;
const getName = state => state.user.name;

const useLoggingSlice = () => {
  const dispatch = useDispatch();
  const userName = useSelector(getName);
  const isLogged = useSelector(getIsLogged);
  const handleLogging = name => dispatch(logIn(name));
  const handleLogOut = () => dispatch(logOut());
  return { userName, isLogged, handleLogging, handleLogOut };
};

export default useLoggingSlice;

import { createSlice } from '@reduxjs/toolkit';
import { useSelector, useDispatch } from 'react-redux';

const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addItem(state, action) {
      const index = state.findIndex(item => item.id === action.payload.id);
      if (index === -1) {
        state.push(action.payload);
      } else {
        state[index].counter += action.payload.counter;
      }
    },
    deleteItem(state, action) {
      return state.filter(item => item.id !== action.payload);
    },
    increase(state, action) {
      state.map(item => {
        return action.payload === item.id
          ? { ...item, counter: (item.counter += 1) }
          : item;
      });
    },
    decrease(state, action) {
      state.map(item => {
        return action.payload === item.id
          ? { ...item, counter: (item.counter -= 1) }
          : item;
      });
    },
    clearCart(state) {
      state = [];
      return state;
    },
  },
});

export const cartReducer = cartSlice.reducer;
const { addItem, deleteItem, increase, decrease, clearCart } =
  cartSlice.actions;

const getTotalItems = state =>
  state.cart.reduce((acc, { counter }) => acc + counter, 0);

const getTotalValue = state =>
  state.cart.reduce((acc, { counter, price }) => acc + counter * price, 0);

const useCart = () => {
  const dispatch = useDispatch();
  const items = useSelector(state => state.cart);
  const totalItems = useSelector(getTotalItems);
  const totalValue = useSelector(getTotalValue);

  const handleAddItem = item => dispatch(addItem(item));
  const handleDeleteItem = id => dispatch(deleteItem(id));
  const handleIncrease = id => dispatch(increase(id));
  const handleDecrease = id => dispatch(decrease(id));
  const handleClearCart = () => dispatch(clearCart());

  return {
    items,
    totalItems,
    totalValue,
    handleAddItem,
    handleDeleteItem,
    handleIncrease,
    handleDecrease,
    handleClearCart,
  };
};
export default useCart;

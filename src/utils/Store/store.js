import { configureStore ,combineReducers} from '@reduxjs/toolkit';
import CartSlice from './CartSlice';



const Store = configureStore({
    reducer: {dajiUser: CartSlice}
})

// export type AppDispatch = typeof Store.dispatch;
// export const useAppDispatch: () => AppDispatch = useDispatch;
export default Store;
import {configureStore} from '@reduxjs/toolkit';
import requestsReducer from "./slices/requestsSlice";
import userReducer from "./slices/userSlice";

export const store = configureStore({
    reducer: {
        requests: requestsReducer,
        user: userReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
import { createSlice } from '@reduxjs/toolkit';
import { Factorial } from '../../lib/definitions';

export const factorialSlice = createSlice({
    name: 'factorial',
    initialState: {
        computedFactorials: [] as Factorial[],
    },
    reducers: {
        setComputedFactorials: (state, action) => {
            return {
                ...state,
                computedFactorials: [...state.computedFactorials, action.payload],
            };
        },
    },
});

// this is for dispatch
export const { setComputedFactorials } = factorialSlice.actions;

// this is for configureStore
export default factorialSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';

export const githubSlice = createSlice({
    name: 'github',
    initialState: {
        selectedUser: null,
    },
    reducers: {
        setSelectedUser: (state, action) => {
            const selectedUser = action.payload;

            return { ...state, selectedUser };
        },
    },
});

// this is for dispatch
export const { setSelectedUser } = githubSlice.actions;

// this is for configureStore
export default githubSlice.reducer;

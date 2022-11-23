import { createSlice } from '@reduxjs/toolkit';

export interface IMenuSlice {
    isOpen: boolean;
}

const menuSlice = createSlice({
    name: 'menu',
    initialState: {
        isOpen: false,
    },
    reducers: {
        toggleMenu: (state) => {
            state.isOpen = !state.isOpen
        },
    }
});

const { actions, reducer } = menuSlice;

export default reducer;
export const { toggleMenu } = actions;

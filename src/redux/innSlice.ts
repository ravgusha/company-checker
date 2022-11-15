import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

interface IInn {
    inn?: string;
    id: string;
}

export type IInnSlice = IInn[];

const initialState: IInnSlice = JSON.parse(window.localStorage.getItem('innSlice') ?? "[]");

const inputSlice = createSlice({
    name: 'inns',
    initialState,
    reducers: {
        addInn: (state, action) => {
            const id = uuidv4();

            state.push({
                id: id,
                inn: action.payload
            });
        }
    }
});

const { actions, reducer } = inputSlice;

export default reducer;
export const { addInn } = actions;

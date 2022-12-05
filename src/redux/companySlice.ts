import { createSlice } from '@reduxjs/toolkit';

interface ICompany {
    inn?: string;
    id: string;
    name?: string;
    okved?: number;
    status?: boolean;
}

export type ICompanySlice = ICompany[];

const initialState: ICompanySlice = JSON.parse(window.localStorage.getItem('companySlice') ?? "[]");

const companySlice = createSlice({
    name: 'inns',
    initialState,
    reducers: {
        addCompany: (state, action) => {
            state.push({
                inn: action.payload.inn,
                id: action.payload.id,
                name: action.payload.name,
                okved: action.payload.okved,
                status: action.payload.status,
            });
        },
        deleteCompany: (state, action) => {
            // state.push({
            //     inn: action.payload.inn,
            //     id: action.payload.id,
            //     name: action.payload.name,
            //     okved: action.payload.okved,
            //     status: action.payload.status,
            // });
            return state = state.filter(item => item.id !== action.payload.id)
        },
    }
});

const { actions, reducer } = companySlice;

export default reducer;
export const { addCompany, deleteCompany } = actions;

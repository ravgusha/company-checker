import { createSlice } from '@reduxjs/toolkit';
import { getCompanyStatus } from 'src/helpers';
interface ICompany {
    inn?: string;
    id: string;
    name?: string;
    okved?: number;
    status?: string;
    liquidationDate?: string;
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
                status: getCompanyStatus(action.payload.status),
                liquidationDate: new Date(action.payload.liquidationDate).toLocaleDateString("ru-RU")
            });
        },
        
        deleteCompany: (state, action) => {
            return state = state.filter(item => item.id !== action.payload)
        },
    }
});

const { actions, reducer } = companySlice;

export default reducer;
export const { addCompany, deleteCompany } = actions;

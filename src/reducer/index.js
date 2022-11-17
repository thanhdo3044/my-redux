
import { createSlice } from "@reduxjs/toolkit";


export const filtersRedcer = createSlice({
    name: 'filters',
    initialState: {
        search: '',
        history: [],
        result: 0,
        showHistory: false,
    },
    reducers: {
        ADD: (state, action) => {
            state.search += action.payload;
        },
        ADD_CHO: (state, action) => {
            const cho = state.search.slice(-1) === '-'
                || state.search.slice(-1) === '+'
                || state.search.slice(-1) === 'x'
                || state.search.slice(-1) === '/'
            if (cho) {
                return
            }
            else {
                state.search += action.payload;
            }
        },
        EQUALS: (state, action) => {
            if (state.search.length === 0) {
                state.result = action.payload;
            }
            else {
                state.result = eval(state.search.replace('x', '*'));
            }
        },
        CLEARS: (state, action) => {
            state.search = "";
            state.result = 0;
        },
        DELETE: (state, action) => {
            state.search = state.search.slice(0, state.search.length - 1);
        },
        HISTORY: (state, action) => {
            state.history.push(`${state.search}=${state.result}`)
        },
        SHOW_HISTORY: (state, action) => {
            state.showHistory = !state.showHistory;
        }


    }
})

export default filtersRedcer.reducer;
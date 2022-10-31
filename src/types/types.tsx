import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface ExpenseState {
    balance: number,
    expense: number,
    income: number,
    expenseHistory: {
        expenseName: string,
        amount: number,
        id: number,
    }[]
}



export interface Iexpense {
    expenseName: string,
    amount: number | string,
    id: number,
}

const initialState: ExpenseState = {
    balance: 0,
    expense: 0,
    income: 0,
    expenseHistory: [],
}



export const expenseSlice = createSlice({
    name: "expense",
    initialState,
    reducers: {
        addTransactionHistory: (state, action: PayloadAction<Iexpense>) => {
            if (typeof action.payload.amount !== 'number') {
                state.expenseHistory.push({
                    expenseName: action.payload.expenseName,
                    amount: parseFloat(action.payload.amount),
                    id: action.payload.id,
                })
            }
        },
        Delete: (state, action: PayloadAction<Iexpense>) => {
            state.expenseHistory.splice(state.expenseHistory.findIndex((item) => item.id === action.payload.id), 1)
            //    state.expenseHistory.splice(state.expenseHistory.findIndex((arrow) => arrow.id === action.payload.id), 1);
        },
        CalculateBalance: (state, action: PayloadAction<void>) => {
            state.balance = state.expenseHistory.reduce(
                (acc, ex) => acc + ex.amount,
                0
            )
        },
        CalculateIncome: (state, action: PayloadAction<void>) => {
            state.income = state.expenseHistory.reduce((acc, ex) => {
                if (ex.amount > 0) {
                    return Math.abs(acc + ex.amount)
                }
                return acc
            }, 0)
        },
        CalculateExpense: (state, action: PayloadAction<void>) => {
            state.expense = state.expenseHistory.reduce((acc, ex) => {
                if (ex.amount < 0) {
                    return Math.abs(acc - ex.amount)
                }
                return acc
            }, 0)
        },
    }
})

export const {
    addTransactionHistory,
    CalculateBalance,
    CalculateIncome,
    CalculateExpense,
    Delete
} = expenseSlice.actions

export default expenseSlice.reducer;

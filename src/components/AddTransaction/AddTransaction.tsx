import React, { useState } from 'react'
import './AddTransaction.css';
import { Iexpense, addTransactionHistory, CalculateBalance, CalculateIncome, CalculateExpense } from '../../types/types';
import { useDispatch } from 'react-redux';
import Form from 'react-bootstrap/Form';



const AddTransaction = () => {
    const dispatch = useDispatch()
    const [expense, setexpense] = useState<Iexpense>({
        expenseName: "",
        amount: "",
        id: 0,
    })
    const onChange = <K extends keyof Iexpense>(key: K, value: Iexpense[K]) => {
        setexpense({ ...expense, [key]: value })

    }


    return (
        <div>
            <h3>Add New Transaction</h3>
            <hr />
            <form onSubmit={(evt) => {
                evt.preventDefault();
                if (typeof expense.amount === "string" && !isNaN(parseFloat(expense.amount))) {
                } dispatch(addTransactionHistory({ ...expense, id: Math.round(Math.random() * 100) }))
                dispatch(CalculateBalance())
                dispatch(CalculateIncome())
                dispatch(CalculateExpense())
            }}>
                <div >
                    <label htmlFor="">Decription</label><br />
                    <Form.Control
                        onChange={(e) =>
                            onChange(e.target.name as keyof Iexpense, e.target.value)
                        }
                        name='expenseName'
                        placeholder='Detail of Transaction'
                        type="text"
                        required
                    />
                </div>
                <div >
                    <label htmlFor="">Transaction Amount</label><br />
                    <Form.Control
                        onChange={(e) =>
                            onChange(e.target.name as keyof Iexpense, e.target.value)
                        }
                        name='amount'
                        placeholder='Dollar value of Transaction'
                        type="number"
                        required />
                </div>
                <button className="btn bg-primary">Add Transaction</button>
            </form>
        </div>
    )
}

export default AddTransaction;
import React from 'react'
import './AccountSummary.css';
import { useAppSelector } from '../../hooks/hooks';
const  AccountSummary=()=>{
    const income=useAppSelector((state)=>state.expense.income)
    const expense=useAppSelector((state)=>state.expense.expense)
return (
    <div className='container'>
        <div className='income '>
            <h4>INCOME</h4>
            <p className='plus'>${income}.00</p>
        </div>
        <hr/>
        <div className='expense'>
            <h4>EXPENSE</h4>
            <p className='minus'>${Math.abs(expense)}.00</p>
        </div>
    </div>
)
}
export default AccountSummary;




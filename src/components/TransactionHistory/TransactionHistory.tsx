import React from 'react'
import { useAppSelector } from '../../hooks/hooks';
import './TransactionHistory.css';
import { useDispatch } from 'react-redux';
import {Delete,CalculateBalance,CalculateIncome,CalculateExpense} from '../../types/types';


const history: string = "Transaction History"

const TransactionHistory = () => {
  let dispatch = useDispatch()

  const myDelete = (acc:any) => {
  dispatch(Delete(acc))
  dispatch(CalculateBalance())
  dispatch(CalculateIncome())
  dispatch(CalculateExpense())
  }
  const data = useAppSelector((state) => state.expense.expenseHistory);
  // console.log(data);
  
  // if (data.length===0) {
  //   return <div>
  //     <h4>No transaction yet</h4>
  //   </div>
  // }

  return (
    <>
      <h3 id='history'>{history}</h3>
      <hr />
      <ul className='list'>
        {data.map((acc => {
          return <li key={acc.id}
            className={
              acc.amount < 0
                ? "red" : "blue"
            }
          >
            <li className='mylist'>
              <span className='left'>{acc.expenseName}</span>
              <span>{acc.amount}</span>
              <span onClick={() => myDelete(acc)} className='delete'>X</span>

            </li>
          </li>
        }))}
      </ul>
    </>
  )
}

export default TransactionHistory;
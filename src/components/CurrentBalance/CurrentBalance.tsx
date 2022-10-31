import React from 'react'
import { useAppSelector } from '../../hooks/hooks';
import './Currentbalance.css';


const  CurrentBalance=()=>{
 
  const balance: string = "Current balance"
  const data=useAppSelector((state)=>state.expense.balance);
 

  return (
    <div className='balance'>
    <b>{balance}</b>  
    <h2>${data}.00</h2>
    </div>
  )
}

export default CurrentBalance;
import React from 'react'
import LabelAndInput from './LabelAndInput'

function AddTransaction({transactionTitle, transactionAmount, handleTransactionInputValue, handleAddTransaction}) {
  return (
    <div className='my-7'>
        <h2 className='text-xl text-left text-black'>Add New Transaction</h2>
        <hr></hr>
        <LabelAndInput 
            labelText='Enter Transaction Title:'
            placeholder='Shopping'
            type='text'
            value={transactionTitle}
            handleTransactionInputValue={handleTransactionInputValue}
            />
        <LabelAndInput 
            labelText='Enter Transaction Amount:'
            subLabel='(E.g.: Expense: -200 and Income: 200)'
            placeholder='-150'
            type='number'
            value={transactionAmount}
            handleTransactionInputValue={handleTransactionInputValue}
            />
        <input 
            type='button'
            value='Add'
            className='py-2 px-5 mt-4 bg-violet-500 text-white font-semibold rounded w-full hover:bg-violet-600 focus:outline-none focus:ring focus:ring-violet-400 focus:ring-opacity-75'
            onClick={handleAddTransaction}
            />
    </div>
  )
}

export default AddTransaction
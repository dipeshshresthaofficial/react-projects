import React from 'react'
import HistoryCard from './HistoryCard'

function ExpenseHistory({ transactions }) {
  return (
    <div className='my-7'>
        <h2 className='text-left text-xl text-black'>History</h2>
        <hr className='mb-3 '></hr>
        <div className=' max-h-96 overflow-scroll'>
            {
                transactions.map( transaction => (
                    <HistoryCard key={transaction.id} transactionTitle={transaction.title} transactionAmount={transaction.amount} />
                ))
            }
        </div>
    </div>
  )
}

export default ExpenseHistory
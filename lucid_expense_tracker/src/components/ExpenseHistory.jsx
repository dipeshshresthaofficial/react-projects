import React from 'react'
import HistoryCard from './HistoryCard'

function ExpenseHistory() {
  return (
    <div className='my-7'>
        <h2 className='text-left text-xl text-black'>History</h2>
        <hr className='mb-3 '></hr>
        <HistoryCard transactionTitle='Shopping' transactionAmount={-200} />
        <HistoryCard transactionTitle='Lending Return' transactionAmount={400} />
    </div>
  )
}

export default ExpenseHistory
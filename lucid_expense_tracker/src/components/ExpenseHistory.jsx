import React from 'react'
import HistoryCard from './HistoryCard'

function ExpenseHistory({ transactions }) {
  return (
    <div className='my-7'>
        <h2 className='text-left text-xl'>History</h2>
        <hr className='mb-3 '></hr>
        <div className=' max-h-96 overflow-y-scroll custom-scrollbar'>
            {
                transactions.map( transaction => (
                    <HistoryCard 
                        key={transaction.id} 
                        transactionTitle={transaction.title} 
                        transactionAmount={transaction.amount} 
                        />
                ))
            }
        </div>
    </div>
  )
}

export default ExpenseHistory
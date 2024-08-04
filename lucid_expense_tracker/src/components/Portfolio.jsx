import React from 'react'

function Portfolio({totalIncome=0.00, totalExpense=0.00, currentBalance=0.00}) {
  return (
    <div className='my-7'>
        <div className='current-balance text-start'>
            <p className='text-base text-semibold'>YOUR BALANCE</p>
            <p className='text-3xl text-extrabold'>${currentBalance.toFixed(2)}</p>
        </div>
        <div className='mt-5 text-base income-expense flex flex-row justify-around border'>
            <div className='income'>
                <p>INCOME</p>
                <p className='text-xl text-emerald-500'>${totalIncome.toFixed(2)}</p>
            </div>
            <div className='border-r h-10 my-auto'></div>
            <div className='expense'>
                <p>EXPENSE</p>
                 {/* add '-' to explicitly remove '-' sign from negative numbers */}
                <p className='text-xl text-red-600'>${-totalExpense.toFixed(2)}</p>
            </div>
        </div>
    </div>
  )
}

export default Portfolio
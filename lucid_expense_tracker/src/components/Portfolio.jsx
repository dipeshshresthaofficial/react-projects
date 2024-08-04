import React from 'react'

function Portfolio() {
  return (
    <div className='my-5'>
        <div className='current-balance text-start'>
            <p>YOUR BALANCE</p>
            <p className='my-2 text-2xl text-extrabold'>$3000</p>
        </div>
        <div className='income-expense flex flex-row justify-around border'>
            <div className='income'>
                <p>INCOME</p>
                <p className='text-emerald-500'>$500</p>
            </div>
            <div className='expense'>
                <p>EXPENSE</p>
                <p className='text-red-600'>$200</p>
            </div>
        </div>
    </div>
  )
}

export default Portfolio
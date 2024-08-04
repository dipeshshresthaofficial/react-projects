import React from 'react'

function HistoryCard({transactionTitle, transactionAmount}) {
  return (
    <div className="mb-2 border flex flex-row w-full items-center shadow-md">
        <div 
            className={`w-full p-2 flex flex-row justify-between border-r-4 ${transactionAmount<0? 'border-custom-red':'border-custom-green'}`}
            >
            <div className="text-base font-medium">{transactionTitle}</div>
            <div className="text-base text-gray-600">{transactionAmount>0? '+':''}{transactionAmount}</div>
        </div>
    </div>
  )
}

export default HistoryCard
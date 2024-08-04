import React from 'react'

function LabelAndInput({labelText='', subLabel='', placeholder='', type='text', value, handleTransactionInputValue}) {
  return (
    <div className='mt-3 text-left flex flex-col'>
        <label className=''>{labelText}</label>
        <span className='sub-text text-gray-400 italic mb-1'>{subLabel}</span>
        <input 
            type={type}
            value={value}
            placeholder={placeholder}
            className='border rounded py-1 px-3 hover:border-2 focus:outline-none focus:border-2'
            onChange={e => handleTransactionInputValue(e.target.value, type)}
            />
    </div>
  )
}

export default LabelAndInput
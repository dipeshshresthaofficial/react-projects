import React from 'react'

function InputBox({
    type, 
    title, 
    value, 
    suffix, 
    min='0', 
    max='200', 
    step='1',
    options=[],
    handleSliderChange}) {
  return (
    <div className='my-3 flex flex-col gap-2'>
        <>
        { type == "range"?
          <>
            <label className='text-start'>{title+": "+value + suffix}</label>
            <input 
              type={type}
              value={value} //data binding
              min={min}
              max={max}
              step={step}
              onChange={ e => handleSliderChange(e.target.value,title)}
              />
          </>
            :
          type == "select" ?
          <>
            <label className='text-start'>{title+":"}</label>
            <select 
              name='gender'
              value={value}
              className='py-1 px-2 border-2 border-gray-400 rounded hover:border-gray-500 focus:outline-none focus:border-gray-500'
              onChange={ e => handleSliderChange(e.target.value, title)}
              >
              {options.map(option => (
                <option key={option.id} value={option.id}>{option.value}</option>
              ))}
            </select>
          </>
          :
          <>
            <label className='text-start'>{title+":"}</label>
            <input 
              type = {type}
              value = {value}
              onChange={ e => handleSliderChange(e.target.value, title)}
              className='py-1 px-2 border-2 border-gray-400 rounded hover:border-gray-500 focus:outline-none focus:border-gray-500'
              />
          </>
          }
        </>
    </div>
  )
}

export default InputBox
import React from 'react'

function Slider({sliderTitle, sliderValue = '40', sliderSuffix, min='40', max='200', step='1', handleSliderChange}) {
  return (
    <div className='my-3 flex flex-col gap-2'>
        <label className='text-start'>{sliderTitle+": "+sliderValue + sliderSuffix}</label>
        <input 
            type="range"
            value={sliderValue} //data binding
            min={min}
            max={max}
            step={step}
            onChange={ e => handleSliderChange(e.target.value, sliderTitle)}
            />
    </div>
  )
}

export default Slider
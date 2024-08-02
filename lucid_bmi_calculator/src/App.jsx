import { useState } from 'react'
import './App.css'
import Slider from './components/Slider'

function App() {

  const DEFAULT_SLIDER_VALUE = '40';
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBmi] = useState(0);

  // calculate BMI
  function handleCalculateBMI(){
    console.log(height+ " "+ weight);
    // convert cm to m
    const heightInMeter = height/100;
    let res = 0;
    if(weight !== 0 && height !== 0) res = (weight/ (heightInMeter * heightInMeter)).toFixed(2);
    setBmi(res);
  }

  // update state based on slider changed value
  function handleSliderChange(value, title){
    if(title == "Weight") setWeight(value);
    else if (title == "Height") setHeight(value);
  }

  return (
    <div className='border rounded-md'>
      <h1 className='py-5 px-10 bg-violet-500 text-white'>BMI Calculator</h1>
      <div className='p-5'>
        <Slider 
          sliderTitle='Weight' 
          sliderValue={weight}
          sliderSuffix='kg'
          handleSliderChange = {handleSliderChange}
          />
        <Slider 
          sliderTitle='Height' 
          sliderValue={height}
          sliderSuffix='cm'
          max='250'
          handleSliderChange = {handleSliderChange}
          />
        <p className='my-6'>Your BMI is: {bmi}</p>
        <div className='flex flex-row justify-center gap-4'>
          <input 
            type='button' 
            value= "Calculate" 
            onClick={handleCalculateBMI}
            className='bg-violet-600 text-white rounded-full py-2 px-5 font-semibold hover:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-400 focus:ring-opacity-75'
            />
          <input 
            type='button' 
            value= "Reset"
            onClick={handleResetFields}
            className='bg-slate-800 text-white rounded-full py-2 px-5 text-semibold hover:bg-slate-950 focus:outline-none focus:ring focus:ring-slate-600 focus:ring-opacity-75'
            />
        </div>
      </div>
    </div>
  )
}

export default App

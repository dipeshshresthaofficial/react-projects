import { useState } from 'react'
import './App.css'
import Slider from './components/Slider'

function App() {

  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);

  function handleSliderChange(value, title){
    console.log(value +" " + title);
    if(title == "Weight") setWeight(value);
    else if (title == "Height") setHeight(value);
  }

  return (
    <div className='border rounded-md'>
      <h1 className='py-5 px-10 bg-violet-500 text-white'>BMI Calculator</h1>
      <div className='p-5'>
        <Slider 
          sliderTitle='Weight' 
          sliderValue='40'
          sliderSuffix='kg'
          handleSliderChange = {handleSliderChange}
          />
        <Slider 
          sliderTitle='Height' 
          sliderValue='40'
          sliderSuffix='cm'
          max='250'
          handleSliderChange = {handleSliderChange}
          />
      </div>
    </div>
  )
}

export default App

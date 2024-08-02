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
    <>
      <h1>BMI Calculator</h1>
      <div>
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
    </>
  )
}

export default App

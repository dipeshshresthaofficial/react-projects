import { act, useEffect, useState } from 'react'
import './App.css'
import InputBox from './components/InputBox'

function App() {

  const DEFAULT_SLIDER_VALUE = '0';
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBmi] = useState(0);
  const [gender, setGender] = useState(0);
  const [ageGroup, setAgeGroup] = useState(0);
  const [feedback, setFeedback] = useState("");

  const genderOptions = [
    {
      id:-1,
      value:""
    },
    {
      id:1,
      value:"Male",
    },
    {
      id:2,
      value:"Female"
    }];

  const maleAgeGroup = [
    {
      id:-1,
      value:"",
      optimalBMI:"",
      acceptableBMI:""
    },
    {
      id:1,
      value:"18-34",
      optimalBMI:"23.0-25.9",
      acceptableBMI:"21.0-28.9"
    },
    {
      id:2,
      value:"35-44",
      optimalBMI:"23.0-26.9",
      acceptableBMI:"22.0-28.9"
    },
    {
      id:3,
      value:"45-54",
      optimalBMI:"24.0-27.9",
      acceptableBMI:"23.0-28.9"
    },
    {
      id:4,
      value:"55-64",
      optimalBMI:"24.0-28.9",
      acceptableBMI:"23.0-31.4"
    },
    {
      id:5,
      value:"65-74",
      optimalBMI:"25.0-28.9",
      acceptableBMI:"23.0-31.4"
    },
    {
      id:6,
      value:"75-99",
      optimalBMI:"25.0-32.9",
      acceptableBMI:"24.0-34.9"
    }
  ]

  const femaleAgeGroup = [
    {
      id:-1,
      value:"",
      optimalBMI:"",
      acceptableBMI:""
    },
    {
      id:1,
      value:"18-34",
      optimalBMI:"15.5-24.9",
      acceptableBMI:"15.5-25.9"
    },
    {
      id:2,
      value:"35-44",
      optimalBMI:"19.0-23.9",
      acceptableBMI:"17.5-25.9"
    },
    {
      id:3,
      value:"45-49",
      optimalBMI:"20.0-25.9",
      acceptableBMI:"19.0-26.9"
    },
    {
      id:4,
      value:"50-54",
      optimalBMI:"22.0-26.9",
      acceptableBMI:"21.0-27.9"
    },
    {
      id:5,
      value:"55-64",
      optimalBMI:"23.0-27.9",
      acceptableBMI:"22.0-29.9"
    },
    {
      id:6,
      value:"65-74",
      optimalBMI:"24.0-28.9",
      acceptableBMI:"22.0-31.4"
    },
    {
      id:7,
      value:"75-99",
      optimalBMI:"24.0-29.9",
      acceptableBMI:"22.0-36.4"
    }
  ]
  // useEffect gets called everytime there is a change in height and weight value.
  // Allowing user to calculate or reset only if user selects at least height or both
  useEffect(()=>{
    const actionBtns = document.getElementsByClassName("action-btn");
    // In the case were just height is 0 it results in infinity case so we should let the button stay disabled
    if((weight == 0 || height == 0)){
      for(let i=0; i<actionBtns.length; i++){
        actionBtns[i].disabled = true;
        actionBtns[i].style.opacity = '0.2';
      }                    
    } else{
      for(let i=0; i<actionBtns.length; i++){
        actionBtns[i].disabled = false;
        actionBtns[i].style.opacity = '1';
      }  
    }
  },[weight,height]);

  // resetting fields back to default
  function handleResetFields(){
    setHeight(DEFAULT_SLIDER_VALUE);
    setWeight(DEFAULT_SLIDER_VALUE);
    setBmi(0);
  }

  function handleFeedbackWithGenderAndAge(bmi){
    // gender
    // age group
    // bmi
    let data = [];
    // Male = 1 and Female = 2
    if(Number(gender) === 1){
      data = maleAgeGroup.filter( item => Number(item.id) == ageGroup)
    } else{
      data = femaleAgeGroup.filter( item => Number(item.id) == ageGroup) 
    }
    if(Number(gender) === 1 || Number(gender) === 2){
      // Destructuring assignment (object destructuring)
      const {optimalBMI, acceptableBMI} = data[0];
      const optimalBMIArr = optimalBMI.split("-");
      const acceptableBMIArr = acceptableBMI.split("-");
      if(bmi >= optimalBMIArr[0] && bmi <= optimalBMIArr[1]) 
          setFeedback("Your BMI is optimal range: "+optimalBMIArr[0]+"-"+optimalBMIArr[1]);
      else if(bmi >= acceptableBMIArr[0] && bmi <= acceptableBMIArr[1]) 
          setFeedback("Your BMI is acceptable range: "+acceptableBMIArr[0]+"-"+acceptableBMIArr[1]);
      else setFeedback("Your BMI is neither in optimal nor in acceptable range");
    }
  }

  // calculate BMI
  function handleCalculateBMI(){
    // convert cm to m
    const heightInMeter = height/100;
    let res = 0;
    if(weight !== 0 && height !== 0) res = (weight/ (heightInMeter * heightInMeter)).toFixed(2);
    handleFeedbackWithGenderAndAge(res);
    setBmi(res);
  }

  // Callback function that gets data from child component: Slider
  // update state based on slider changed value
  function handleSliderChange(value, title){
    // const actionBtns = document.getElementsByClassName("action-btn");
    // for(let i=0; i<actionBtns.length; i++){
    //   actionBtns[i].disabled = false;
    // }
    if(title == "Weight") setWeight(value);
    else if (title == "Height") setHeight(value);
    else if (title == "Gender") setGender(value);
    else if (title == "Age Group") setAgeGroup(value);
    
  }

  return (
    <div className='border rounded-md'>
      <h1 className='py-5 px-10 bg-violet-500 text-white'>BMI Calculator</h1>
      <div className='p-5'>
        <InputBox
          type="range"
          title='Weight' 
          value={weight}
          suffix='kg'
          handleSliderChange = {handleSliderChange}
          />
        <InputBox
          type="range"
          title='Height' 
          value={height}
          suffix='cm'
          max='250'
          handleSliderChange = {handleSliderChange}
          />
        
        <span className='block text-left text-gray-400 italic'>*Optional*</span>
        <InputBox
          type="select"
          title="Gender"
          options = {genderOptions}
          handleSliderChange={handleSliderChange}
        />
        {
          // Male = 1 and Female = 2
          gender == 1?
          <InputBox
            type="select"
            title="Age Group"
            options = {maleAgeGroup}
            handleSliderChange={handleSliderChange}
            />
          : Number(gender) === 2?

          <InputBox
            type="select"
            title="Age Group"
            options={femaleAgeGroup}
            handleSliderChange={handleSliderChange}
            />
          :
          <InputBox
            type="select"
            title="Age Group"
            options = {[]}
            handleSliderChange={handleSliderChange}
            />
        }
        
        {/* <InputBox 
          type="number"
          title="Age"
          value={age}
          suffix=" years"
          handleSliderChange = {handleSliderChange}
          /> */}
        <p className='mt-6'>Your BMI is: {bmi}</p>
        <p className='my-4'>{feedback}</p>
        <div className='flex flex-row justify-center gap-4'>
          <input 
            type='button' 
            value= "Calculate" 
            onClick={handleCalculateBMI}
            className='action-btn bg-violet-600 text-white rounded-full py-2 px-5 font-semibold hover:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-400 focus:ring-opacity-75'
            />
          <input 
            type='button' 
            value= "Reset"
            onClick={handleResetFields}
            // id='action-btn'
            className='action-btn bg-slate-800 text-white rounded-full py-2 px-5 text-semibold hover:bg-slate-950 focus:outline-none focus:ring focus:ring-slate-600 focus:ring-opacity-75'
            />
        </div>
      </div>
    </div>
  )
}

export default App

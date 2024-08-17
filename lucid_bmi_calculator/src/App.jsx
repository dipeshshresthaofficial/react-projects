import { useEffect, useState } from 'react'
import './App.css'
import InputBox from './components/InputBox'
import moon from './assets/moon.svg';
import sun from './assets/sun.svg';

function App() {

  const DEFAULT_SLIDER_VALUE = '0';
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBmi] = useState(0);
  const [gender, setGender] = useState(-1);
  const [ageGroup, setAgeGroup] = useState(-1);
  const [feedback, setFeedback] = useState("");
  const [isDarkModeEnabled, setIsDarkModeEnabled] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

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

  useEffect(() =>{
    const htmlRef = document.documentElement;
    if(isDarkModeEnabled){
      htmlRef.classList.add("dark");
    } else{
      htmlRef.classList.remove("dark");
    }
  },[isDarkModeEnabled])

  // resetting fields back to default
  function handleResetFields(){
    setHeight(DEFAULT_SLIDER_VALUE);
    setWeight(DEFAULT_SLIDER_VALUE);
    setBmi(0);
    setGender(-1);
    setAgeGroup(-1);
    setFeedback("");
  }

  function handleFeedbackWithGenderAndAge(bmi){
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
          setFeedback("Your BMI is in optimal range: "+optimalBMIArr[0]+"-"+optimalBMIArr[1]);
      else if(bmi >= acceptableBMIArr[0] && bmi <= acceptableBMIArr[1]) 
          setFeedback("Your BMI is in acceptable range: "+acceptableBMIArr[0]+"-"+acceptableBMIArr[1]);
      else setFeedback("Your BMI is neither in optimal nor in acceptable range");
    }
  }

  // calculate BMI
  function handleCalculateBMI(){
    // convert cm to m
    const heightInMeter = height/100;
    let res = 0;
    if(weight !== 0 && height !== 0) res = (weight/ (heightInMeter * heightInMeter)).toFixed(2);
    if(gender != -1)  {
      if(ageGroup == -1) alert("For feedback make sure to select AgeGroup as well.");
      else handleFeedbackWithGenderAndAge(res);
    };
    setBmi(res);
  }

  // Callback function that gets data from child component: InputBox
  // update state based on input fields changed value
  function handleInputChange(value, title){
    if(title == "Weight") setWeight(value);
    else if (title == "Height") setHeight(value);
    else if (title == "Gender") setGender(value);
    else if (title == "Age Group") setAgeGroup(value);
  }

  // handles dark mode switch toggle
  function handleToggleTheme(){
    setFadeOut(true);
    setTimeout(() => {
      setIsDarkModeEnabled(!isDarkModeEnabled);
      setFadeOut(false);
    }, 250);
  }

  return (
    <div className='w-96 border rounded-md text-secondary dark:text-white'>
      <button 
      className={`absolute top-4 right-4 text-white px-2 py-2 border rounded-full focus:outline-none ${isDarkModeEnabled? 'bg-gray':"bg-yellow"
      }`}
      onClick={()=> handleToggleTheme()}>
        <img
          src={sun}
          alt="Light Mode"
          width={25}
          className={`icon ${!isDarkModeEnabled && !fadeOut? 'fade-in':'fade-out'}`}
          style={{ display: !isDarkModeEnabled? 'block':'none' }}
          />
        <img
          src={moon}
          alt="Dark Mode"
          width={25}
          className={`icon ${isDarkModeEnabled && !fadeOut? 'fade-in':'fade-out'}`}
          style={{ display: isDarkModeEnabled? 'block':'none' }}
          />
      </button>
      <h2 className='text-2xl py-5 px-10 bg-primary text-white'>BMI Calculator</h2>
      <div className='px-5 py-2'>
        <InputBox
          type="range"
          title='Weight' 
          value={weight}
          suffix='kg'
          handleInputChange = {handleInputChange}
          />
        <InputBox
          type="range"
          title='Height' 
          value={height}
          suffix='cm'
          max='250'
          handleInputChange = {handleInputChange}
          />
        
        <span className='mt-8 block text-left text-gray-400 italic'>*Below fields are optional*</span>
        <InputBox
          type="select"
          title="Gender"
          value={gender}
          options = {genderOptions}
          handleInputChange={handleInputChange}
        />
        {
          // Male = 1 and Female = 2
          gender == 1?
          <InputBox
            type="select"
            title="Age Group"
            value={ageGroup}
            options = {maleAgeGroup}
            handleInputChange={handleInputChange}
            />
          : Number(gender) === 2?

          <InputBox
            type="select"
            title="Age Group"
            value={ageGroup}
            options={femaleAgeGroup}
            handleInputChange={handleInputChange}
            />
          :
          <InputBox
            type="select"
            title="Age Group"
            options = {[]}
            handleInputChange={handleInputChange}
            />
        }
        <p className='mt-6'>Your BMI is: {bmi}</p>
        <p className='my-4'>{feedback}</p>
        <div className='mt-5 flex flex-row justify-center gap-4'>
          <input 
            type='button' 
            value= "Calculate" 
            onClick={handleCalculateBMI}
            className='action-btn bg-primary text-white rounded-full py-2 px-5 font-semibold cursor-pointer hover:bg-primary-dark focus:outline-none focus:ring focus:ring-primary focus:ring-opacity-75'
            />
          <input 
            type='button' 
            value= "Reset"
            onClick={handleResetFields}
            className='action-btn bg-secondary text-white rounded-full py-2 px-5 text-semibold cursor-pointer hover:bg-secondary-dark focus:outline-none focus:ring focus:ring-secondary focus:ring-opacity-75'
            />
        </div>
        <div className='notes mt-8 mb-3'>
          <span className='block text-left italic text-gray-400'>References:</span>
          <div className=' max-h-28 overflow-y-scroll'>
            <p className='text-left text-xs mt-2'>
              <span className='text-primary'><b>Optimal BMI:</b></span> It is considered the ideal BMI range for <u>maintaining good health</u>. It refers to the BMI range that is associated with the lowest risk of morbidity and mortality.</p>
            <p className='text-left text-xs mt-2'>
              <span className='text-primary'><b>Acceptable BMI:</b></span> It is a broader range that includes both the optimal range and slightly higher values that are still considered acceptable but may carry a <u>higher health risk</u>.
            </p>
            <p className='text-left text-xs mt-2'>
              Yi, S., Ohrr, H., Shin, S., & Yi, J. (2015). <cite className='text-primary'>Sex-age-specific association of body mass index with all-cause mortality among 12.8 million Korean adults: a prospective cohort study</cite>. International Journal of Epidemiology, 44(5), 1696–1705. https://doi.org/10.1093/ije/dyv138
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App

import { useEffect, useState } from 'react'
import './App.css'
import Portfolio from './components/Portfolio'
import ExpenseHistory from './components/ExpenseHistory'
import AddTransaction from './components/AddTransaction'

import sun from './assets/icons/sun.svg'
import moon from './assets/icons/moon.svg'

function App() {

  const [income,setIncome] = useState(0);
  const [expense, setExpense] = useState(0);
  const [balance, setBalance] = useState(0);

  const [transactionTitle, setTransactionTitle] = useState("");
  const [transactionAmount, setTransactionAmount] = useState("");
  const [transactions, setTransactions] = useState([]);
  const [isDarkModeEnabled, setIsDarkModeEnabled] = useState(false)
  const [fadeOut, setFadeOut] = useState(false);

  // Fetching data from "./../data.json" which is simulated to be present in server for asynchronous call
  useEffect(()=>{
    console.log("running useEffect");
    async function fetchData(){
      try{
        let resp = await fetch("./../data.json");
        if(!resp.ok){
          console.log("Unable to fetch data");
        }
        let data = await resp.json();

        // Update Portfolio
        let totalExpense = 0;
        let totalIncome = 0;
        let totalBalance = 0;

        data.data.forEach( transaction => {
          // updatePortfolio(transaction);
          if(transaction.type === "expense")  totalExpense += transaction.amount;
          else totalIncome += transaction.amount;
        })
        totalBalance = totalIncome + totalExpense;
        setIncome(totalIncome);
        setExpense(totalExpense);
        setBalance(totalBalance);

        setTransactions([...data.data]); 
  
      } catch(err){
        console.log(err);
      }
    }
    fetchData();
  },[])

  // updating dark model state
  useEffect(()=>{
    const root = document.documentElement;
    if (isDarkModeEnabled) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  },[isDarkModeEnabled])

  // called for updating the profile section
  function updatePortfolio(transaction){
    if(transaction.type == "income"){
      setIncome( prevIncome => transaction.amount + prevIncome);
      setBalance(prevBalance => prevBalance + transaction.amount);
    } else{
      setExpense(prevExpense => transaction.amount + prevExpense);
      setBalance(prevBalance => prevBalance + transaction.amount);
    }
  }

  // called when any changes occur in input box in LabelAndInput component
  function handleTransactionInputValue(value,inputType){
    if(inputType === 'text') setTransactionTitle(value);
    else if(inputType === 'number') setTransactionAmount(value);
  }

  // called when "add" button is clicked in AddTransaction component
  function handleAddTransaction(){
    if (transactionAmount == "" && transactionTitle == "")
      alert("Please make sure to add Transaction Title and Amount.")
    else if(transactionAmount == ""){
      alert("Please make sure to add Transaction Amount.")
    } else if(transactionTitle == ""){
      alert("Please make sure to add Transaction Title.")
    } else{
      // generate random Id
      let randomValue = Math.floor(Math.random()*1000);
      let todayDate = Date.now();
      let id = randomValue.toString()+todayDate.toString();
      let type = transactionAmount < 0? "expense":"income";
      let newTransaction = {
        "id": Number(id),
        "title": transactionTitle,
        "amount": Number(transactionAmount),
        "type": type
      }

      // Update portfolio
      updatePortfolio(newTransaction);

      // reset title and amount state
      setTransactionAmount("");
      setTransactionTitle("");
      setTransactions([newTransaction, ...transactions]);
    }
  }

  const toggleThemeMode = () => {
    setFadeOut(true); // Start fade-out
    setTimeout(() => {
      setIsDarkModeEnabled(!isDarkModeEnabled); // Toggle theme
      setFadeOut(false); // Reset fade-out
    }, 250); // Match this duration with the transition duration
  };

  return (
    <div className=''>
      <button 
        className='h-10 w-10 absolute top-2 right-2 p-2 bg-amber-200 bg-opacity-85 text-white rounded-full hover:bg-opacity-100 cursor-pointer focus:outline-none dark:bg-zinc-200 dark:text-black'
        onClick={toggleThemeMode}>
        <img 
          src={sun} 
          className={`icon ${!isDarkModeEnabled && !fadeOut ? 'fade-in' : 'fade-out'}`} 
          alt="Sun Icon"
          style={{ display: isDarkModeEnabled || fadeOut ? 'none' : 'block' }} 
        />
        <img 
          src={moon} 
          className={`icon ${isDarkModeEnabled && !fadeOut ? 'fade-in' : 'fade-out'}`} 
          alt="Moon Icon"
          style={{ display: isDarkModeEnabled ? 'block' : 'none' }} 
        />
      </button>
      <h2 className='text-2xl mb-1'>Lucid Expense Tracker</h2>
      <div className='mb-10 border-t-2 w-24 mx-auto border-violet-400 border-opacity-80'></div>
      <div className='flex flex-row gap-14 p-5'>
        <div className='w-80'>
          <Portfolio totalExpense={expense} totalIncome={income} currentBalance={balance} />
          <ExpenseHistory transactions = {transactions} />
        </div>
        <AddTransaction 
            transactionTitle={transactionTitle} 
            transactionAmount={transactionAmount} 
            handleTransactionInputValue={handleTransactionInputValue}
            handleAddTransaction = {handleAddTransaction}
            />
      </div>
    </div>
  )
}

export default App

import { useState } from 'react'
import './App.css'
import Portfolio from './components/Portfolio'
import ExpenseHistory from './components/ExpenseHistory'
import AddTransaction from './components/AddTransaction'

function App() {

  const [transactionTitle, setTransactionTitle] = useState("")
  const [transactionAmount, setTransactionAmount] = useState("")
  const [transactions, setTransactions] = useState([
    {
      "id": 1,
      "title": "Shopping",
      "amount": -150,
      "type": "expense"
    },
    {
      "id": 2,
      "title": "Food",
      "amount": -70,
      "type": "expense"
    },
    {
      "id": 3,
      "title": "Salary",
      "amount": 450,
      "type": "income"
    }
  ])

  function handleTransactionInputValue(value,inputType){
    if(inputType === 'text') setTransactionTitle(value);
    else if(inputType === 'number') setTransactionAmount(value);
  }

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
      // reset title and amount state
      setTransactionAmount("");
      setTransactionTitle("");
      setTransactions([newTransaction, ...transactions]);
    }
  }

  return (
    <div className=''>
      <h2 className='text-2xl mb-1'>Lucid Expense Tracker</h2>
      <div className='mb-10 border-t-2 w-24 mx-auto border-violet-400 border-opacity-80'></div>
      <div className='flex flex-row gap-14 p-5'>
        <div className='w-80'>
          <Portfolio totalExpense={-300} totalIncome={500} currentBalance={2000} />
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

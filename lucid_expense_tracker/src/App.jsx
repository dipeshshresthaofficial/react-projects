import { useState } from 'react'
import './App.css'
import Portfolio from './components/Portfolio'
import ExpenseHistory from './components/ExpenseHistory'
import AddTransaction from './components/AddTransaction'

function App() {

  const [transactionTitle, setTransactionTitle] = useState('')
  const [transactionAmount, setTransactionAmount] = useState(0)

  function handleTransactionInputValue(value,inputType){
    if(inputType === 'text') setTransactionTitle(value);
    else if(inputType === 'number') setTransactionAmount(value);
  }

  function handleAddTransaction(){
    console.log(transactionTitle+" "+transactionAmount);
  }

  return (
    <div>
      <h2 className='text-2xl mb-1'>Lucid Expense Tracker</h2>
      <div className='mb-10 border-t-2 w-24 mx-auto border-violet-400 border-opacity-80'></div>
      <Portfolio totalExpense={-300} totalIncome={500} currentBalance={2000} />
      <AddTransaction 
        transactionTitle={transactionTitle} 
        transactionAmount={transactionAmount} 
        handleTransactionInputValue={handleTransactionInputValue}
        handleAddTransaction = {handleAddTransaction}
        />
      <ExpenseHistory />
    </div>
  )
}

export default App

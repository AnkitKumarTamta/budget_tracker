import React,{useState,useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'


const AddTransaction = () => {
    const [text, setText] = useState("")
    const [amount, setamount] = useState(0);
    const {addTransaction} = useContext(GlobalContext);

    const onSubmit = e =>{
      e.preventDefault();
      const newTransaction = {
        id: Math.floor(Math.random() * 100000000),
        text,
        amount: +amount
      }

      addTransaction(newTransaction)
      setText('')
      setamount('')
      
    }

  return (
    <>
        <h3>Add Transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Expense/Income</label>
          <input type="text" value={text} onChange={(e)=> setText(e.target.value)} placeholder="Enter text..." />
        </div>
        <div className="form-control">
          <label htmlFor="amount"
            >Amount <br />
            (Add - Sign for Expense)
            </label>
          <input type="number" value={amount} onChange={(e)=> setamount(e.target.value)}  placeholder="Enter amount..." />
        </div>
        <button className="btn">Add Transaction</button>
      </form>
    </>
  )
}

export default AddTransaction
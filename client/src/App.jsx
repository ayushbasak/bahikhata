import { useState } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [item, setItem] = useState('')
  const [date, setDate] = useState('')
  const [amount, setAmount] = useState('')
  const [category, setCategory] = useState('')
  const [split, setSplit] = useState('')

  async function handleSubmit() {
    await axios.post('http://localhost:5000/api/v1/dataupload', {
      item: item,
      date: date,
      amount: amount,
      category: category,
      split: split
    }).then((res) => {
      alert('Data uploaded successfully')
      console.log(res)
    }).catch((err) => {
      alert('Data upload failed')
      console.log(err)
    });
  };

  return (
    <div>
      <h1>Bahikhata</h1>
      <div>
        <span>Item</span>
        <input type="text" />
      </div>
      <div>
        <span>Date</span>
        <input type="date" />
      </div>
      <div>
        <span>Amount</span>
        <input type="number" />
      </div>
      <div>
        <span>Category</span>
        <input type="text" />
      </div>
      <div>
        <span>Split</span>
        <input type="text" />
      </div>
      <button type="submit" onClick={()=> handleSubmit()}>Add</button>
    </div>
  )
}

export default App

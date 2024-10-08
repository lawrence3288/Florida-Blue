import React, { useState } from 'react';
import './ExpenseForm.css';

function ExpenseForm({ onAddExpense }) {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate)
    };

    onAddExpense(expenseData);
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
  };

  return (
    <form onSubmit={submitHandler}>
      <div className='form-group'>
        <label>Title</label>
        <input
          type='text'
          value={enteredTitle}
          onChange={titleChangeHandler}
        />
      </div>
      <div className='form-group'>
        <label>Amount</label>
        <input
          type='number'
          value={enteredAmount}
          onChange={amountChangeHandler}
        />
      </div>
      <div className='form-group'>
        <label>Date</label>
        <input
          type='date'
          value={enteredDate}
          onChange={dateChangeHandler}
        />
      </div>
      <div>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;

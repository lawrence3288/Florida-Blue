import React from 'react';
import './ExpenseList.css';

function ExpenseList({ expenses }) {
  return (
    <ul className='expense-list'>
      {expenses.map((expense) => (
        <li key={expense.id} className='expense-item'>
          <div>{expense.title}</div>
          <div>${expense.amount.toFixed(2)}</div>
          <div>{expense.date.toLocaleDateString()}</div>
        </li>
      ))}
    </ul>
  );
}

export default ExpenseList;

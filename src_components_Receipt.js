import React from 'react';
import './Receipt.css';

function Receipt({ expenses }) {
  const totalAmount = expenses.reduce((sum, expense) => {
    return sum + expense.amount;
  }, 0);

  return (
    <div className='receipt'>
      <h2>Total Expenses: ${totalAmount.toFixed(2)}</h2>
      <p>Total Items: {expenses.length}</p>
    </div>
  );
}

export default Receipt;

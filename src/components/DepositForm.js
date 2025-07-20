import React, { useState } from 'react';

const DepositForm = ({ goals, onMakeDeposit }) => {
  const [selectedGoalId, setSelectedGoalId] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedGoalId && amount && parseFloat(amount) > 0) {
      onMakeDeposit(selectedGoalId, parseFloat(amount));
      setAmount('');
      setSelectedGoalId('');
    }
  };

  return (
    <div className="deposit-form">
      <h3>Make a Deposit</h3>
      <form onSubmit={handleSubmit}>
        <select
          value={selectedGoalId}
          onChange={(e) => setSelectedGoalId(e.target.value)}
          required
        >
          <option value="">Select Goal</option>
          {goals.map(goal => (
            <option key={goal.id} value={goal.id}>
              {goal.name}
            </option>
          ))}
        </select>
        <input
          type="number"
          placeholder="Deposit Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          min="0"
          step="0.01"
          required
        />
        <button type="submit">Make Deposit</button>
      </form>
    </div>
  );
};

export default DepositForm;
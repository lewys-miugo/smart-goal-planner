import React, { useState } from 'react';

const AddGoalForm = ({ onAddGoal }) => {
  const [formData, setFormData] = useState({
    name: '',
    targetAmount: '',
    category: '',
    deadline: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.targetAmount && formData.category && formData.deadline) {
      onAddGoal({
        ...formData,
        targetAmount: parseFloat(formData.targetAmount)
      });
      setFormData({ name: '', targetAmount: '', category: '', deadline: '' });
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="add-goal-form">
      <h3>Add New Goal</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Goal Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="targetAmount"
          placeholder="Target Amount"
          value={formData.targetAmount}
          onChange={handleChange}
          min="0"
          step="0.01"
          required
        />
        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
          required
        >
          <option value="">Select Category</option>
          <option value="Travel">Travel</option>
          <option value="Emergency">Emergency</option>
          <option value="Electronics">Electronics</option>
          <option value="Real Estate">Real Estate</option>
          <option value="Vehicle">Vehicle</option>
          <option value="Education">Education</option>
          <option value="Shopping">Shopping</option>
          <option value="Retirement">Retirement</option>
          <option value="Home">Home</option>
        </select>
        <input
          type="date"
          name="deadline"
          value={formData.deadline}
          onChange={handleChange}
          required
        />
        <button type="submit">Add Goal</button>
      </form>
    </div>
  );
};

export default AddGoalForm;
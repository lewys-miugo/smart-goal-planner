import React, { useState } from 'react';

const GoalCard = ({ goal, onUpdateGoal, onDeleteGoal }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState({
    name: goal.name,
    targetAmount: goal.targetAmount,
    category: goal.category,
    deadline: goal.deadline
  });

  const progress = (goal.savedAmount / goal.targetAmount) * 100;
  const isCompleted = goal.savedAmount >= goal.targetAmount;
  const remaining = goal.targetAmount - goal.savedAmount;

  const handleEdit = () => {
    if (isEditing) {
      onUpdateGoal(goal.id, {
        ...editData,
        targetAmount: parseFloat(editData.targetAmount)
      });
    }
    setIsEditing(!isEditing);
  };

  const handleChange = (e) => {
    setEditData({
      ...editData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className={`goal-card ${isCompleted ? 'completed' : ''}`}>
      {isEditing ? (
        <div className="edit-form">
          <input
            type="text"
            name="name"
            value={editData.name}
            onChange={handleChange}
          />
          <input
            type="number"
            name="targetAmount"
            value={editData.targetAmount}
            onChange={handleChange}
          />
          <select
            name="category"
            value={editData.category}
            onChange={handleChange}
          >
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
            value={editData.deadline}
            onChange={handleChange}
          />
        </div>
      ) : (
        <div className="goal-info">
          <h3>{goal.name}</h3>
          <p className="category">{goal.category}</p>
          <p className="deadline">Deadline: {goal.deadline}</p>
        </div>
      )}

      <div className="progress-section">
        <div className="amounts">
          <span>${goal.savedAmount.toLocaleString()} / ${goal.targetAmount.toLocaleString()}</span>
          {!isCompleted && <span className="remaining">${remaining.toLocaleString()} remaining</span>}
        </div>
        <div className="progress-bar">
          <div 
            className="progress-fill" 
            style={{ width: `${Math.min(progress, 100)}%` }}
          ></div>
        </div>
        <span className="progress-text">{progress.toFixed(1)}%</span>
      </div>

      <div className="goal-actions">
        <button onClick={handleEdit}>
          {isEditing ? 'Save' : 'Edit'}
        </button>
        <button onClick={() => onDeleteGoal(goal.id)} className="delete-btn">
          Delete
        </button>
      </div>
    </div>
  );
};

export default GoalCard;
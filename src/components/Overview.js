import React from 'react';

const Overview = ({ goals }) => {
  const totalGoals = goals.length;
  const totalSaved = goals.reduce((sum, goal) => sum + goal.savedAmount, 0);
  const completedGoals = goals.filter(goal => goal.savedAmount >= goal.targetAmount).length;
  
  const getTimeLeft = (deadline) => {
    const today = new Date();
    const deadlineDate = new Date(deadline);
    const diffTime = deadlineDate - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  const urgentGoals = goals.filter(goal => {
    const daysLeft = getTimeLeft(goal.deadline);
    return daysLeft <= 30 && daysLeft > 0 && goal.savedAmount < goal.targetAmount;
  });

  const overdueGoals = goals.filter(goal => {
    const daysLeft = getTimeLeft(goal.deadline);
    return daysLeft < 0 && goal.savedAmount < goal.targetAmount;
  });

  return (
    <div className="overview">
      <h2>Overview</h2>
      <div className="overview-stats">
        <div className="stat">
          <h3>{totalGoals}</h3>
          <p>Total Goals</p>
        </div>
        <div className="stat">
          <h3>${totalSaved.toLocaleString()}</h3>
          <p>Total Saved</p>
        </div>
        <div className="stat">
          <h3>{completedGoals}</h3>
          <p>Goals Completed</p>
        </div>
      </div>
      
      {urgentGoals.length > 0 && (
        <div className="alerts urgent">
          <h4>⚠️ Urgent Goals (30 days or less)</h4>
          {urgentGoals.map(goal => (
            <p key={goal.id}>{goal.name} - {getTimeLeft(goal.deadline)} days left</p>
          ))}-
        </div>
      )}
      
      {overdueGoals.length > 0 && (
        <div className="alerts overdue">
          <h4>🚨 Overdue Goals</h4>
          {overdueGoals.map(goal => (
            <p key={goal.id}>{goal.name} - {Math.abs(getTimeLeft(goal.deadline))} days overdue</p>
          ))}
        </div>
      )}
    </div>
  );
};

export default Overview;
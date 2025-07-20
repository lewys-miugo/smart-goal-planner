import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import GoalList from './components/GoalList';
import AddGoalForm from './components/AddGoalForm';
import DepositForm from './components/DepositForm';
import Overview from './components/Overview';

const API_URL = 'http://localhost:3001/goals';

function App() {
  const [goals, setGoals] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchGoals();
  }, []);

  const fetchGoals = async () => {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      setGoals(data);
    } catch (error) {
      console.error('Error fetching goals:', error);
    } finally {
      setLoading(false);
    }
  };

  const addGoal = async (goalData) => {
    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...goalData,
          id: Date.now().toString(),
          savedAmount: 0,
          createdAt: new Date().toISOString().split('T')[0]
        })
      });
      const newGoal = await response.json();
      setGoals([...goals, newGoal]);
    } catch (error) {
      console.error('Error adding goal:', error);
    }
  };

  const updateGoal = async (id, updates) => {
    try {
      const response = await fetch(`${API_URL}/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updates)
      });
      const updatedGoal = await response.json();
      setGoals(goals.map(goal => goal.id === id ? updatedGoal : goal));
    } catch (error) {
      console.error('Error updating goal:', error);
    }
  };

  const deleteGoal = async (id) => {
    try {
      await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
      setGoals(goals.filter(goal => goal.id !== id));
    } catch (error) {
      console.error('Error deleting goal:', error);
    }
  };

  const makeDeposit = async (goalId, amount) => {
    const goal = goals.find(g => g.id === goalId);
    if (goal) {
      await updateGoal(goalId, { 
        savedAmount: goal.savedAmount + amount 
      });
    }
  };

  if (loading) return <div className="loading">Loading...</div>;

  return (
    <div className="App">
      <Header />
      <main className="App-main">
        <Overview goals={goals} />
        <div className="forms-container">
          <AddGoalForm onAddGoal={addGoal} />
          <DepositForm goals={goals} onMakeDeposit={makeDeposit} />
        </div>
        <GoalList 
          goals={goals} 
          onUpdateGoal={updateGoal}
          onDeleteGoal={deleteGoal}
        />
      </main>
      <Footer />
    </div>
  );
}

export default App;

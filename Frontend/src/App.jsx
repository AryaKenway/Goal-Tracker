import React, { useState, useEffect } from 'react';
import API from './api';
import GoalItem from './components/GoalItem';

export default function App() {
  const [goals, setGoals] = useState([]);
  const [text, setText] = useState('');

  useEffect(() => { fetchGoals(); }, []);

  async function fetchGoals() {
    const res = await API.get('/goals');
    setGoals(res.data);
  }

  async function addGoal(e) {
    e.preventDefault();
    if (!text.trim()) return;
    await API.post('/goals', { text });
    setText('');
    fetchGoals();
  }

  async function toggle(id) {
    await API.patch(`/goals/${id}/toggle`);
    fetchGoals();
  }

  return (
    <div style={{ padding: 20, maxWidth: 600 }}>
      <h3>Goal Tracker</h3>
      <form onSubmit={addGoal}>
        <input
          value={text}
          onChange={e => setText(e.target.value)}
          placeholder="Add goal"
        />
        <button type="submit">Add</button>
      </form>

      <div style={{ marginTop: 16 }}>
        {goals.map(g => (
          <GoalItem key={g._id} goal={g} onToggle={toggle} />
        ))}
      </div>
    </div>
  );
}

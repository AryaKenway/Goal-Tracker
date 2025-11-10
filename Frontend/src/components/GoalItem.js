import React from 'react';

export default function GoalItem({ goal, onToggle }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
      <input
        type="checkbox"
        checked={!!goal.completed}
        onChange={() => onToggle(goal._id)}
      />
      <span style={{ textDecoration: goal.completed ? 'line-through' : 'none' }}>
        {goal.text}
      </span>
    </div>
  );
}

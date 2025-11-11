import React from 'react';

export default function GoalItem({ goal, onToggle }) {
  return (
    <div className="goal-item">
      <input
        type="checkbox"
        checked={!!goal.completed}
        onChange={() => onToggle(goal._id)}
        className="goal-checkbox"
      />
      <span
        className={`goal-text ${goal.completed ? 'completed' : ''}`}
      >
        {goal.text}
      </span>
    </div>
  );
}

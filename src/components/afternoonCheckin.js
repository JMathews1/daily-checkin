import { useState } from 'react';

function AfternoonCheckin() {
  const [achievements, setAchievements] = useState('');
  const [bestThing, setBestThing] = useState('');
  const [unexpectedAchievement, setUnexpectedAchievement] = useState('');
  const [difficulties, setDifficulties] = useState('');
  const [activeGoal, setActiveGoal] = useState('');
  const [goalStrategy, setGoalStrategy] = useState('');
  const [newGoal, setNewGoal] = useState('');
  const [firstStep, setFirstStep] = useState('');
  const [otherGoals, setOtherGoals] = useState('');
  const [approach, setApproach] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const response = await fetch('/api/checkin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        achievements,
        bestThing,
        unexpectedAchievement,
        difficulties,
        activeGoal,
        goalStrategy,
        newGoal,
        firstStep,
        otherGoals,
        approach
      }),
    });

    // Handle response (e.g., show success message, redirect, etc.)
  };

  return (
    <form className="afternoonform" onSubmit={handleSubmit}>
      <h1>Afternoon Checkin</h1>
      <div>
        <label htmlFor="achievements">Q1: Rate your achievement:</label>
        <input className="input" type="text" id="achievements" value={achievements} onChange={(e) => setAchievements(e.target.value)} />
      </div>
      <div>
        <label htmlFor="bestThing">Q2: What was the best work-related thing that happened to you today at work?</label>
        <input className="input" type="text" id="bestThing" value={bestThing} onChange={(e) => setBestThing(e.target.value)} />
      </div>
      <div>
        <label htmlFor="unexpectedAchievement">Q3: Was there anything else that you achieved but didn't plan for in the morning?</label>
        <input className="input" type="text" id="unexpectedAchievement" value={unexpectedAchievement} onChange={(e) => setUnexpectedAchievement(e.target.value)} />
      </div>
      <div>
        <label htmlFor="difficulties">Q4: Was there something that made it difficult to achieve what you planned to do?</label>
        <input className="input" type="text" id="difficulties" value={difficulties} onChange={(e) => setDifficulties(e.target.value)} />
      </div>
      <div>
        <label htmlFor="activeGoal">Q5: Did you actively try to achieve the goal?</label>
        <select id="activeGoal" value={activeGoal} onChange={(e) => setActiveGoal(e.target.value)}>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
      </div>
      <div>
        <label htmlFor="goalStrategy">Q6: How did you carry out your strategy? Did it positively influence your workday?</label>
        <input className="input" type="text" id="goalStrategy" value={goalStrategy} onChange={(e) => setGoalStrategy(e.target.value)} />
      </div>
      <div>
        <label htmlFor="newGoal">Q7: Is there a goal that you would like to set for yourself?</label>
        <input className="input" type="text" id="newGoal" value={newGoal} onChange={(e) => setNewGoal(e.target.value)} />
      </div>
      <div>
        <label htmlFor="firstStep">Q8: What's the first step you will take towards reaching this goal?</label>
        <input className="input" type="text" id="firstStep" value={firstStep} onChange={(e) => setFirstStep(e.target.value)} />
      </div>
      <div>
        <label htmlFor="otherGoals">Q9: Did any other goals come to mind today that you would like to mention?</label>
        <input className="input" type="text" id="otherGoals" value={otherGoals} onChange={(e) => setOtherGoals(e.target.value)} />
      </div>
      <div>
        <label htmlFor="approach">Q10: How did you approach assessing your achievements and the progress you've made today?</label>
        <input className="input" type="text" id="approach" value={approach} onChange={(e) => setApproach(e.target.value)} />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default AfternoonCheckin;

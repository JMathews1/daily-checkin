import { useState } from 'react';

function MorningCheckin() {
  const [answers, setAnswers] = useState(['']);
  const [goal, setGoal] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e, index) => {
    const newAnswers = [...answers];
    newAnswers[index] = e.target.value;
    setAnswers(newAnswers);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('/api/checkin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ answers, goal }),
    });

    if (response.ok) {
      // Reset the form state
      setAnswers(['']);
      setGoal('');
      setSuccessMessage('Check-in submitted successfully!');
      setErrorMessage(''); // Clear any previous error message
    } else {
      const data = await response.json();
      setErrorMessage(data.error || 'An error occurred while submitting the check-in.');
      setSuccessMessage(''); // Clear any previous success message
    }
  };

  return (
    <form className="morningform" onSubmit={handleSubmit}>
      <h1>Morning Checkin</h1>
      {answers.map((answer, index) => (
        <div key={index}>
          <label htmlFor={`answer${index}`}>Q{index + 1}: What do you plan to achieve today?</label>
          <input
            type="text"
            id={`answer${index}`}
            className = "input"
            value={answer}
            onChange={(e) => handleInputChange(e, index)}
          />
        </div>
      ))}
      <div>
        <label htmlFor="goal">Goal to improve/maintain good habits at work:</label>
        <input  className = "input" type="text" id="goal" value={goal} onChange={(e) => setGoal(e.target.value)} />
      </div>
      <button type="submit">Submit</button>
      {successMessage && <div className="success-message">{successMessage}</div>}
      {errorMessage && <div className="error-message">{errorMessage}</div>}
    </form>
  );
}

export default MorningCheckin;

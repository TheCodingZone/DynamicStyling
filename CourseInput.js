import React, { useState } from 'react';
import Button from '../../UI/Button/Button';
import './CourseInput.css';

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isClicked, setIsClicked] = useState(false);

  const goalInputChangeHandler = event => {
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    setIsClicked(true);
    if (enteredValue.trim().length === 0) {
      return;
    }
    props.onAddGoal(enteredValue);
    setEnteredValue('');
    setIsClicked(false);
  };

  let buttonStyle = 'red';

  if (isClicked && enteredValue.trim().length === 0) {
    buttonStyle = 'lightred';
  }

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="form-control">
        <label style={{ color: isClicked && enteredValue.trim().length === 0 ? 'red' : 'black' }}>Course Goal</label>
        <input
          type="text"
          onChange={goalInputChangeHandler}
          value={enteredValue}
          style={{ background: isClicked && enteredValue.trim().length === 0 ? '#fdd' : 'white' }}
        />
      </div>
      <Button type="submit" style={{ backgroundColor: buttonStyle }}>
        Add Goal
      </Button>
    </form>
  );
};

export default CourseInput;

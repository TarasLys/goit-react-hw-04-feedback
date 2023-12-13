import { useCallback } from 'react';
import css from './FeedbackOptions.module.css';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {

  const handleClick = useCallback((options) => {
    onLeaveFeedback(options);
  }, [onLeaveFeedback]);


  return (
    <ul className={css.list}>
      {options.map(option => (
        <li className={css.position} key={option}>
          <button className={css.choice} onClick={() => handleClick(option)}>{option}</button>
        </li>
      ))}
    </ul>
  );
};



import { Statistics } from './Statistics/Statistics.jsx';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions.jsx';
import { Section } from './Section/Section.jsx';
import { useState } from 'react';

export  function App () {
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

const handleFeedback = options => { 
  switch (options) {
    case 'good':
      setGood(prevGood => prevGood + 1);
      break;
    case 'neutral':
      setNeutral(prevNeutral => prevNeutral + 1);
      break;
    case 'bad':
      setBad(prevBad => prevBad + 1);
      break;
    default:
      break;
  }
} 

 const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    return total ? Math.round((good / total) * 100) : 0;
  };
    
    const total = countTotalFeedback();
    const positivePercentage = countPositiveFeedbackPercentage();

    const options = ['good', 'neutral', 'bad'];

    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={options}
            onLeaveFeedback={handleFeedback}
          />
        </Section>

        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        </Section>
      </div>
    );
    }



import { useState } from "react";
import Section from "./Section/Section";
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";
import Statistics from "./Statistics/Statistics";


export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onLeaveFeedback = (e) => {
    const key = e.target.name;
    switch (key) {
      case "good":
        setGood(good + 1);
        break;
      case "neutral":
        setNeutral(neutral + 1);
        break;
      case "bad":
        setBad(bad + 1);
        break;
    
      default:
        break;
    }
  }
  const countTotalFeedback = () => {
    const totalFeedback = good + neutral + bad
    return totalFeedback;
  }

  const countPositiveFeedbackPercentage = () => {
    return Math.round((good * 100)/ countTotalFeedback())
  }
 

  const options = ["good", "neutral", "bad"];
  const totalFeedback = countTotalFeedback();
  const positivFeedback = countPositiveFeedbackPercentage();

  return (
    <div>
      <Section title="Please leave feedback">
        <FeedbackOptions onLeaveFeedback={onLeaveFeedback} options={options} />
      </Section>
      <Section title="Statistics">
      <Statistics good={good} neutral={neutral} bad={bad} total={totalFeedback} positiv={positivFeedback} />
      </Section>
    </div>
  );
};

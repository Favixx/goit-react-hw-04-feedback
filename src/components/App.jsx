import React, { Component } from "react";
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";
import Section from "./Section/Section";
import Statistics from "./Statistics/Statistics";
import Notification from './Notification/Notification';


export class App extends Component {
  constructor() {
    super();
    this.state = {
      good: 0,
      neutral: 0,
      bad: 0
    };
  }
  onLeaveFeedback = (option) => {
    this.setState((prevState) => ({
      [option]: prevState[option] + 1
    }));
  };
  
  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    return total;
  };
  
  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    const positiveFeedback = Math.round((good / total) * 100) || 0;
    return positiveFeedback;
  };
  
  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const options = Object.keys(this.state);
    
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.onLeaveFeedback}
            />
        </Section>

          <Section title="Statistics">
        {total > 0 ? (
          <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          positivePercentage={this.countPositiveFeedbackPercentage()} // Добавлены скобки для вызова функции
              total={total}
            />
            ) : (
              <Notification message="There is no feedback" />
              )}
              </Section>
      </>
    );
  }
}
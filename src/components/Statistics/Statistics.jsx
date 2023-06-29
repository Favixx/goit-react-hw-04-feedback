import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Statistics.module.css'
class Statistics extends Component {
  static propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
  }
  render() {
    const { good, neutral, bad, total, positivePercentage } = this.props;

    return (
      <>
        <ul className={styles.list}>
          <li>Good: {good}</li>
          <li>Neutral: {neutral}</li>
          <li>Bad: {bad}</li>
        </ul>
        <p>Total: {total}</p>
        <h3>Positive feedback: {positivePercentage}%</h3>
      </>
    );
  }
}

export default Statistics;

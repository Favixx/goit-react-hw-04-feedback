import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './FeedbackOptions.module.css';
export default class FeedbackOptions extends Component {
  static propTypes ={
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
  }
  render() {
    return (
      <>
        <ul className={styles.list}>
          {this.props.options.map(option => (
            <li key={option}>
              <button
                type="button"
                name={option}
                onClick={() => this.props.onLeaveFeedback(option)}
                className={styles.button}
              >
                {option}
              </button>
            </li>
          ))}
        </ul>
      </>
    );
  }
}
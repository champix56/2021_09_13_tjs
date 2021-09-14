import React from 'react';
import PropTypes from 'prop-types';
import styles from './MessageInput.module.scss';

const MessageInput = () => (
  <div className={styles.MessageInput} data-testid="MessageInput">
    MessageInput Component
  </div>
);

MessageInput.propTypes = {};

MessageInput.defaultProps = {};

export default MessageInput;

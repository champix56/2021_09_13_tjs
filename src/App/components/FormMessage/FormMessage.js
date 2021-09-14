import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './FormMessage.module.scss';

export const formMessageInitialState = {};

const FormMessage = (props) => {
  const [formMessageState, setFormMessageState] = useState(formMessageInitialState);

  return (
    <div className={styles.FormMessage} data-testid="FormMessage">
      FormMessage Component
      {JSON.stringify(formMessageState)}
    </div>
  );
}

FormMessage.propTypes = {};

FormMessage.defaultProps = {};

export default FormMessage;

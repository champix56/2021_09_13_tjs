import React from 'react';
import PropTypes from 'prop-types';
import styles from './SelectUser.module.scss';

const SelectUser = () => (
  <div className={styles.SelectUser} data-testid="SelectUser">
    SelectUser Component
  </div>
);

SelectUser.propTypes = {};

SelectUser.defaultProps = {};

export default SelectUser;

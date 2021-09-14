import React from 'react';
import PropTypes from 'prop-types';
import styles from './FlexContainer.module.scss';

const FlexContainer = () => (
  <div className={styles.FlexContainer} data-testid="FlexContainer">
    FlexContainer Component
  </div>
);

FlexContainer.propTypes = {};

FlexContainer.defaultProps = {};

export default FlexContainer;

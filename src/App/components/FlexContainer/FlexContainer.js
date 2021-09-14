import React from 'react';
import PropTypes from 'prop-types';
import styles from './FlexContainer.module.scss';

const FlexContainer = (props) => (
  <div className={styles.FlexContainer}
    style={{
      flexDirection: (props.type === 'vertical' ? 'row' : 'column'),
      ...props.style
    }}
    data-testid="FlexContainer"
  >
    {props.children}
  </div>
);

FlexContainer.propTypes = {
  children: PropTypes.array.isRequired,
  type: PropTypes.string,
  style:PropTypes.object,
};

export default FlexContainer;

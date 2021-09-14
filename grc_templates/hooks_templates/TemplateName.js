import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './TemplateName.module.scss';

export const templateNameInitialState = {};

const TemplateName = (props) => {
  const [templateNameState, setTemplateNameState] = useState(templateNameInitialState);

  return (
    <div className={styles.TemplateName} data-testid="TemplateName">
      TemplateName Component
      {JSON.stringify(templateNameState)}
    </div>
  );
}

TemplateName.propTypes = {};

TemplateName.defaultProps = {};

export default TemplateName;

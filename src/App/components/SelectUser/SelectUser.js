import React from 'react';
import PropTypes from 'prop-types';
import styles from './SelectUser.module.scss';

const SelectUser = (props) => (
  <select className={styles.SelectUser} data-testid="SelectUser" value={props.value} onChange={props.onChange}>
    {props.users.map((e, i) => <option value={e.id} key={'opt-usr-' + i}>{e.nick}</option>)}
  </select>
);

SelectUser.propTypes = {
  users: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
};

SelectUser.defaultProps = {};

export default SelectUser;

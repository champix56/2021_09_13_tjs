import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './UserList.module.scss';

export const userListInitialState = {};

const UserList = (props) => {
  const [userListState, setUserListState] = useState(userListInitialState);

  return (
    <div className={styles.UserList} data-testid="UserList">
      UserList Component
      {JSON.stringify(userListState)}
    </div>
  );
}

UserList.propTypes = {};

UserList.defaultProps = {};

export default UserList;

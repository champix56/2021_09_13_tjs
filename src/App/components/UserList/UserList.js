import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './UserList.module.scss';
import User from '../User/User';



const UserList = (props) => {
  // const [userListState, setUserListState] = useState(userListInitialState);

  return (
    <div className={styles.UserList} data-testid="UserList">
      <h2>Users</h2>{
        props.users.map((e, i) => <User user={e} key={'user-' + i} />)
      }
    </div>
  );
}

UserList.propTypes = {};

UserList.defaultProps = {};

export default UserList;

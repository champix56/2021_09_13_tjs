import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styles from './UserList.module.scss';
import User from '../User/User';
import store, { initialState } from '../../store/store';


const UserList = (props) => {
  const [userListState, setUserListState] = useState(initialState.users);
  useEffect(() => {
    setUserListState(store.getState().tchat.users)
    store.subscribe(() => {
      setUserListState(store.getState().tchat.users)

    })
  }, [])
  return (
    <div className={styles.UserList} data-testid="UserList">
      <h2>Users</h2>{
        userListState.map((e, i) => <User user={e} key={'user-' + i} />)
      }
    </div>
  );
}

UserList.propTypes = {};

UserList.defaultProps = {};

export default UserList;

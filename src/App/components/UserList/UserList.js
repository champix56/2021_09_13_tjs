import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './UserList.module.scss';
import User from '../User/User';

export const userListInitialState = [
  {
    id: 0,
    nick: 'champix',
    img: 'https://th.bing.com/th/id/OIP.mqWZQ5y4TvDkGdva0j58AwAAAA?pid=ImgDet&rs=1'
  },
  {
    id: 1,
    nick: 'pas champix',
    img: 'https://th.bing.com/th/id/R.6a9dc998ff60ee9aa9902f05b9265b47?rik=Lm2cJFFhRSCHTw&riu=http%3a%2f%2fwww.questhandi.fr%2fwp-content%2fuploads%2f2016%2f07%2finconnu.jpg&ehk=MXxqrxoNbSOo5ntO4sfa69VfcMsv5mx9WBM5d2IiNFg%3d&risl=&pid=ImgRaw&r=0'

  }
];

const UserList = (props) => {
  const [userListState, setUserListState] = useState(userListInitialState);

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

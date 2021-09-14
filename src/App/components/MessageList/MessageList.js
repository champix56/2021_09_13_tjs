import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './MessageList.module.scss';
import Message from '../Message/Message';

export const messageListInitialState = [
  {
    id: 0,
    text: 'Voici le message',
    dateTime: new Date().toString(),
    userId: 0,
    user: {
      id: 0,
      nick: 'champix',
      img: 'https://th.bing.com/th/id/OIP.mqWZQ5y4TvDkGdva0j58AwAAAA?pid=ImgDet&rs=1'
    }
  },
  {
    id: 1,
    text: 'Voici le message2',
    dateTime: new Date().toString(),
    userId: 1,
    user: {
      id: 1,
      nick: 'pas champix',
      img: 'https://th.bing.com/th/id/R.6a9dc998ff60ee9aa9902f05b9265b47?rik=Lm2cJFFhRSCHTw&riu=http%3a%2f%2fwww.questhandi.fr%2fwp-content%2fuploads%2f2016%2f07%2finconnu.jpg&ehk=MXxqrxoNbSOo5ntO4sfa69VfcMsv5mx9WBM5d2IiNFg%3d&risl=&pid=ImgRaw&r=0'
    }
  }
];

const MessageList = (props) => {
  const [messageListState, setMessageListState] = useState(messageListInitialState);

  return (
    <div className={styles.MessageList} data-testid="MessageList">
     <h2><u>MessageList</u></h2>
      <div style={{height:'100%', overflowY:'scroll'}}>
        {
          messageListState.map((e, i) => <Message message={e} key={`mess-${i}`} />)
        }
      </div>
    </div>
  );
}

MessageList.propTypes = {};

MessageList.defaultProps = {};

export default MessageList;

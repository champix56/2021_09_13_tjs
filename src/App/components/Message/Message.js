import React from 'react';
import PropTypes from 'prop-types';
import styles from './Message.module.scss';

const Message = (props) => (
  <div className={styles.Message} data-testid="Message">
     <img src={props.message.user.img}/>
     <div>
       <div className={styles.messageHeader}>
         <b>{props.message.user.nick}</b> à {props.message.dateTime}
       </div>
       <div className={styles.message}>
         {props.message.text}
       </div>
     </div>
  </div>
);

Message.propTypes = {};

Message.defaultProps = {};

export default Message;

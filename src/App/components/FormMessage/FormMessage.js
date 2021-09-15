import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styles from './FormMessage.module.scss';
import SelectUser from '../SelectUser/SelectUser';
import { userListInitialState } from '../UserList/UserList';
import MessageInput from '../MessageInput/MessageInput'
import Button from '../Button/Button';
import store, { ACTIONS, initialState } from '../../store/store';
import {useParams} from 'react-router-dom'

export const formMessageInitialState = {
  text: 'new text',
  destId: 0,
  userId:-1
};

const FormMessage = (props) => {
  console.log(useParams())
  const [formMessageState, setFormMessageState] = useState(formMessageInitialState);
  const userId=Number(useParams().id);
  const [users, setusers] = useState(initialState.users)
  useEffect(() => {
    setFormMessageState({...formMessageState, userId:userId})
    setusers(store.getState().tchat.users)
    store.subscribe(() => {
      setusers(store.getState().tchat.users)
   
    })
  }, [])
  return (
    <div className={styles.FormMessage} data-testid="FormMessage">
      {JSON.stringify(formMessageState)}
      <form onSubmit={(evt) => {
        evt.preventDefault();
        store.dispatch({type:ACTIONS.SAVE_MESSAGE,value:{...formMessageState,dateTime:new Date().toString()}});
      }}>
        <MessageInput value={formMessageState.text}
          onChange={(evt) => { setFormMessageState({ ...formMessageState, text: evt.target.value }) }} />

        <SelectUser users={users}
          value={formMessageState.destId}
          onChange={evt => {
            setFormMessageState({ ...formMessageState, destId: Number(evt.target.value) })
          }} />
        <Button type="submit">Envoyer</Button>
      </form>
    </div>
  );
}

FormMessage.propTypes = {};

FormMessage.defaultProps = {};

export default FormMessage;

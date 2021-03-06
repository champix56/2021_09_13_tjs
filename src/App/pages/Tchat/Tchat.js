import React from 'react';
import PropTypes from 'prop-types';
import styles from './Tchat.module.scss';
import FlexContainer from '../../components/FlexContainer/FlexContainer';
import MessageList from '../../components/MessageList/MessageList';
import UserList from '../../components/UserList/UserList';
import FormMessage from '../../components/FormMessage/FormMessage';

const Tchat = () => (
  <div className={styles.Tchat} data-testid="Tchat">
    <FlexContainer type="horizontal" style={{height:'98vh'}}>
          {/* partie superieur */}
          <FlexContainer type="vertical">
            <MessageList/>
            <UserList/>
          </FlexContainer>
          {/* partie inferieur */}
          <FormMessage/>
        </FlexContainer>
  </div>
);

Tchat.propTypes = {};

Tchat.defaultProps = {};

export default Tchat;

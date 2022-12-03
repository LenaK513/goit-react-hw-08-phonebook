import React from 'react';

import PropTypes from 'prop-types';
// import { deleteContact } from 'redux/contactsSlice';
import { Item, Button } from './ContactItem.styled';

export const ContactItem = ({ id, name, number, onDeleteContact }) => {
  // const contacts = useSelector(state => state.contacts);
  // const { id, name, number } = contacts;
  return (
    <Item id={id} key={name}>
      {name} : {number}
      <Button onClick={() => onDeleteContact(id)}>Delete</Button>
    </Item>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
  onDeleteContact: PropTypes.func,
};

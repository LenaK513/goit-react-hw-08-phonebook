import React from 'react';
import PropTypes from 'prop-types';
import { deleteContact } from 'redux/contactsSlice';
import { ContactItem } from 'components/ContactItem/ContactItem';
import { List } from './ContactList.styled';
import { useSelector, useDispatch } from 'react-redux';

export const ContactList = () => {
  const contacts = useSelector(state => state.contacts);
  const dispatch = useDispatch();
  console.log(contacts);
  return (
    <List>
      <h2>Contacts</h2>
      {contacts.length > 0 &&
        contacts.map(({ id, name, number }) => (
          <ContactItem
            key={id}
            id={id}
            name={name}
            number={number}
            onDeleteContact={() => dispatch(deleteContact(id))}
          ></ContactItem>
        ))}
    </List>
  );
};

ContactList.propTypes = {
  deleteContact: PropTypes.func,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      key: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.number.isRequired,
    })
  ),
};

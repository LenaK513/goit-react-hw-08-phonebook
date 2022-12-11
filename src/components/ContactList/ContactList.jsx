import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/contacts/operations';
import { deleteContact } from 'redux/contacts/operations';
import { ContactItem } from 'components/ContactItem/ContactItem';
import { selectContacts, selectInputFilter } from 'redux/contacts/selectors';
import { List } from './ContactList.styled';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  console.log(contacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const filter = useSelector(selectInputFilter);

  const getContactFromFilter = (contacts, filter) => {
    let normalizedFilter = filter?.toLowerCase();

    return contacts?.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const visibleContacts = getContactFromFilter(contacts, filter);

  return (
    <List>
      <h2>Contacts</h2>
      {visibleContacts.length > 0 &&
        visibleContacts.map(({ id, name, phone }) => (
          <ContactItem
            key={id}
            id={id}
            name={name}
            phone={phone}
            onDeleteContact={() => dispatch(deleteContact(id))}
          ></ContactItem>
        ))}
    </List>
  );
};

ContactList.propTypes = {
  getContactFromFilter: PropTypes.func,
};

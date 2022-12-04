import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setStatusFilter } from 'redux/filterSlice';
// import PropTypes from 'prop-types';
import { InputFilter } from './Filter.styled';
import { Input } from 'components/ContactForm/ContactForm.styled';
export const Filter = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter.text);
  console.log(filter);
  console.log(contacts);

  // const findNameByFilter = event => {
  //   console.log(event.currentTarget.value);
  // };

  const handleFilterCheck = event =>
    dispatch(setStatusFilter(event.currentTarget.value));

  const normalizedFilter = filter.toLowerCase();
  const contactsForFilter = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );
  console.log(filter);
  console.log(normalizedFilter);
  console.log(contactsForFilter);
  return (
    <InputFilter>
      Find contacts by name
      <Input type="text" onChange={handleFilterCheck} />
    </InputFilter>
  );
};

// Filter.propTypes = {
//   value: PropTypes.string.isRequired,
// };

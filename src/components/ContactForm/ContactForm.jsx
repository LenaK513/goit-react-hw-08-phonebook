// import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Btn } from 'components/Button/Button';
import { addContact } from 'redux/contactsSlice';
import { FormStyle, Input } from './ContactForm.styled';

export function ContactForm({ onSubmitForApp }) {
  const getContacts = state => state.contacts;
  const contactInfo = useSelector(getContacts);
  console.log(contactInfo);
  const dispatch = useDispatch();

  const handleChange = event => {
    // console.log(event.currentTarget.value.toLowerCase());
    // const input = event.currentTarget.value.toLowerCase();
    // switch (name) {
    //   case 'name':
    //     setName(value);
    //     break;
    //   case 'number':
    //     setNumber(value);
    //     break;
    //   default:
    //     return;
    // }
  };

  const handleSubmit = event => {
    event.preventDefault();
    // onSubmitForApp({ name, number });

    const form = event.currentTarget;
    console.log(form.elements['name'].value);
    console.log(form.elements['name'].value);
    console.log(form.elements['number'].value);
    dispatch(
      addContact(
        form.elements['name'].value,
        Number(form.elements['number'].value)
      )
    );
    form.reset();
  };

  return (
    <FormStyle onSubmit={handleSubmit}>
      <label htmlFor="1"> Name</label>

      <Input
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        //  value={name}
        onChange={handleChange}
        id="1"
      />
      <label htmlFor="2"> Number</label>
      <Input
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        // value={number}
        onChange={handleChange}
        id="2"
      />
      <Btn type="submit">Add contact </Btn>
    </FormStyle>
  );
}

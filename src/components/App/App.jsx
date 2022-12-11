import { useSelector } from 'react-redux';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { selectLoading, selectError } from 'redux/contacts/selectors';

import { Container } from 'components/App/App.styled';

export const App = () => {
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);

  return (
    <Container>
      <ContactForm />
      {isLoading && !error && <b>Request in progress...</b>}
      <ContactList />
      <Filter />
    </Container>
  );
};

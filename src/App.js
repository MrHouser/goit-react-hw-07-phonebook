import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from './redux/contactsOperations';
import Form from './components/Form/Form';
import Contacts from './components/Contacts/Contacts';
import Search from './components/Search/Search';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, []);

  const contacts = useSelector(state => state.items);
  const filter = useSelector(state => state.filter);

  const lowerCasedFilter = filter.toLowerCase();
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(lowerCasedFilter),
  );

  return (
    <div className="wrapper">
      <h1 className="main-title">Phonebook</h1>
      <Form contactList={contacts} />
      <h2 className="title">Contacts</h2>
      <Search value={filter} />
      <Contacts contacts={filteredContacts} />
    </div>
  );
}

export default App;

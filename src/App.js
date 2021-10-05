import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from './redux/contactsOperations';
import {
  getContacts,
  getFilter,
  getFilteredContacts,
  getLoading,
} from './redux/selectors';
import Form from './components/Form/Form';
import Contacts from './components/Contacts/Contacts';
import Search from './components/Search/Search';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, []);

  const contacts = useSelector(state => getContacts(state));
  const filter = useSelector(state => getFilter(state));
  const isLoading = useSelector(state => getLoading(state));
  const filteredContacts = useSelector(state => getFilteredContacts(state));

  const setLoader = () => {
    if (isLoading) {
      document.body.style.cursor = 'wait';
    } else document.body.style.cursor = 'default';
  };

  setLoader();

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

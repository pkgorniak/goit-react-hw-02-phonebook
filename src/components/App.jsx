import { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  handleAddContact = (name, number) => {
    if (
      this.state.contacts.some(
        contac => contac.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      return alert(`${name} is alredy in contacts!`);
    } else {
      const contactId = nanoid();
      const contact = { id: contactId, name: name, number: number };
      this.setState(prevState => ({
        contacts: [...prevState.contacts, contact],
      }));
    }
  };

  handleDeleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  handleFilterChange = e => {
    this.setState({ filter: e.target.value });
  };

  filterContacts = () => {
    const { filter, contacts } = this.state;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  render() {
    const { filter } = this.state;

    return (
      <>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.handleAddContact} />
        <h1>Contacts</h1>
        <Filter filterValue={filter} onFilterChange={this.handleFilterChange} />
        <ContactList
          contacts={this.filterContacts}
          onDeleteContact={this.handleDeleteContact}
        />
      </>
    );
  }
}

export default App;

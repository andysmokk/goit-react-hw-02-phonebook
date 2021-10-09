import React, { Component } from 'react';
import s from './Phonebook.module.css';
import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import Filter from '../Filter/Filter';

class Phonebook extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  deleteContact = contactId => {
    console.log(this);
    this.setState(prev => ({
      contacts: prev.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  formSubmitHandler = contact => {
    const { contacts } = this.state;
    this.setState({ contacts: [contact, ...contacts] });
  };

  changeFilter = ({ target }) => {
    this.setState({ filter: target.value });
  };

  getFilteredContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLocaleLowerCase();
    return contacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(normalizedFilter),
    );
  };

  render() {
    const {
      state,
      formSubmitHandler,
      changeFilter,
      deleteContact,
      getFilteredContacts,
    } = this;
    const { contacts, filter } = state;

    return (
      <div className={s.box}>
        <div>
          <h1 className={s.title}>Phonebook</h1>
          <ContactForm onSubmit={formSubmitHandler} contacts={contacts} />
        </div>
        <div className={s.divBox}>
          <h2 className={s.title}>Contacts</h2>
          <div className={s.boxList}>
            <Filter value={filter} onChange={changeFilter} />
            <ContactList
              contacts={getFilteredContacts()}
              onDeleteContact={deleteContact}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Phonebook;

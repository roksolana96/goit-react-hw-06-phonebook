// import React from 'react';
import React, { useState } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { useLocalStorage } from './LocalStorage/LocalStorage';

export const App = () =>{
  const [contacts, setContacts] = useLocalStorage('contacts', '')
  const [filter, setFilter] = useState('')

const AddContact = contact => {
  setContacts([...contacts, contact])
  };

const handleFilter = e => {
  setFilter(e.currentTarget.value);
  // this.setState({ filter: e.currentTarget.value });
  };

const getVisibleContact = () => {
    // const { filter, contacts } = this.state;
    const normalizeFilter = filter.toLowerCase();
    
    return contacts.filter(el =>
      el.name.toLowerCase().includes(normalizeFilter)
    );
  };


const deleteContact = contactId => {
    setContacts(contacts.filter(contact => contact.id !== contactId));
    // this.setState(prevState => ({
    //   contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    // }));
  };

  const visibleContact = getVisibleContact();
  return (
    <>
    <div>
      <h1>Phonebook</h1>
      <ContactForm add={AddContact} contacts={contacts} />

      <h2>Contacts</h2>
      <Filter value={filter} onChange={handleFilter} />
      <ContactList
        visibleContact={visibleContact}
        deleteContacts={deleteContact}
      />
    </div>
  </>
);

  }

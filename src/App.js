import './App.css';
import React, { Component } from 'react';
import ContactForm from './components/ContactForm/ContactForm';
import Filter from './components/Filter/Filter';
import ContactList from './components/ContactList/ContactList';
import Toast from './components/Toast/Toast';
import { CSSTransition } from 'react-transition-group';
import './App.css';

export default class App extends Component {
  state = {
    contacts: [],
    filter: '',
    haveError: false,
  };

  // componentDidMount() {
  //   const parsedContacts = JSON.parse(localStorage.getItem('contacts'));
  //   if (parsedContacts) {
  //     this.setState(() => {
  //       return {
  //         contacts: parsedContacts,
  //       };
  //     });
  //   }
  // }

  // componentDidUpdate(prevProps, prevState) {
  //   if (prevState.contacts !== this.state.contacts) {
  //     localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
  //   }
  // }

  // addContact = (name, number) => {
  //   const contact = {
  //     id: uuidv4(),
  //     name,
  //     number,
  //   };

  //   if (name === '' || number === '') {
  //     this.showToast("Name or number can't be empty string");

  //     return;
  //   }

  //   if (this.state.contacts.find(item => item.name === name)) {
  //     this.showToast(`${name} is already in contacts`);
  //     return;
  //   }

  //   this.setState(prev => {
  //     return { contacts: [...prev.contacts, contact] };
  //   });
  // };

  showToast = message => {
    this.setState(prev => ({
      haveError: !prev.haveError,
      errorMessage: message,
    }));
    setTimeout(() => {
      this.setState(prev => ({
        haveError: !prev.haveError,
      }));
    }, 1500);
  };

  // deleteContact = contactId => {
  //   this.setState(prev => {
  //     return {
  //       contacts: prev.contacts.filter(({ id }) => id !== contactId),
  //     };
  //   });
  // };

  // changeFilter = filter => {
  //   this.setState({ filter });
  // };

  // getVisibleContacts = () => {
  //   const { contacts, filter } = this.state;

  //   return contacts.filter(contact =>
  //     contact.name.toLowerCase().includes(filter.toLowerCase()),
  //   );
  // };

  render() {
    // const visibleContacts = this.getVisibleContacts();
    const { errorMessage, haveError } = this.state;

    return (
      <div className="App">
        <div className="Container">
          <CSSTransition
            in={haveError}
            timeout={250}
            classNames="toast"
            unmountOnExit
          >
            <Toast message={errorMessage} />
          </CSSTransition>

          <CSSTransition
            in={true}
            appear={true}
            timeout={500}
            classNames="title"
            unmountOnExit
          >
            <h1>Phonebook</h1>
          </CSSTransition>

          <ContactForm />

          <h1>Contacts</h1>
          <CSSTransition
            in={true}
            // appear={true}
            timeout={500}
            classNames="filter"
            unmountOnExit
          >
            <Filter />
          </CSSTransition>

          <CSSTransition
            in={true}
            timeout={700}
            classNames="contactList"
            unmountOnExit
          >
            <ContactList />
          </CSSTransition>

          <CSSTransition
            in={false}
            timeout={700}
            classNames="message-empty"
            unmountOnExit
          >
            <p>Contact list empty for now</p>
          </CSSTransition>
        </div>
      </div>
    );
  }
}

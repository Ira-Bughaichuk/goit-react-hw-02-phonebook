import { Component } from 'react';
import { nanoid } from 'nanoid';

import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';



export class App extends Component {
    state = {
        contacts: [],
        filter:'',
    }
    handleAddContact = (newContact) => {
        if (this.state.contacts.some((contact) => 
            contact.name.toLowerCase().trim() ===
            newContact.name.toLowerCase().trim() || contact.number.trim() === newContact.number.trim()
        )) {
             return alert(`${newContact.name} already exists`);
        }
    
       this.setState((prevState) => ({
           contacts:[...prevState.contacts, newContact]
        }))     
    }
    handleDeleteContact = (id) => {
        this.setState((prevState) => ({
           contacts: prevState.contacts.filter(contact=> contact.id !== id)
        }))
       
    }
    handleFilter = ({target})=> {
        this.setState({filter: target.value})
    }
  
    render() {
       
      return (
    <div>
        <h1>Phonebook</h1>
            <ContactForm onAddContact={this.handleAddContact}  /> 

        <h2>Contacts</h2>
        <Filter  handleChange={this.handleFilter}/>
              <ContactList contacts={this.state.contacts} onDeleteContact={this.handleDeleteContact} />
    </div>
  );
 }
};



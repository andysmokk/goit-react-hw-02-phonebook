import React, { Component } from 'react';
import shortid from 'shortid';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  nameInputId = shortid.generate();
  numberInputId = shortid.generate();

  addContact = () => {
    const newContactId = shortid.generate();
    const { name, number } = this.state;
    const newContact = { name, number, id: newContactId };
    this.props.onSubmit(newContact);
  };

  checkContactList = () => {
    const { contacts } = this.props;
    const { name } = this.state;
    const normalizedName = name.toLocaleLowerCase();
    contacts.find(
      contact => contact.name.toLocaleLowerCase() === normalizedName,
    )
      ? alert(`${name} is already in contacts`)
      : this.addContact();
  };

  onFormChange = e => {
    const { name, value } = e.currentTarget;

    this.setState({
      [name]: value,
    });
  };

  onSubmitForm = e => {
    e.preventDefault();
    this.resetForm();
    this.checkContactList();
  };

  resetForm = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <form onSubmit={this.onSubmitForm}>
        <label htmlFor={this.nameInputId}>
          Name
          <input
            type="text"
            name="name"
            placeholder="Григор Григорян"
            value={this.state.name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
            onChange={this.onFormChange}
            id={this.nameInputId}
          />
        </label>
        <label htmlFor={this.numberInputId}>
          Number
          <input
            type="tel"
            name="number"
            placeholder="111-22-33"
            value={this.state.number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
            onChange={this.onFormChange}
            id={this.numberInputId}
          />
        </label>
        <button type="submit">Add contact</button>
      </form>
    );
  }
}

export default ContactForm;

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import s from './ContactForm.module.css';
import { connect } from 'react-redux';
import { addContact } from '../../redux/phonebook/phonebook-actions';

class ContactForm extends Component {
  static propTypes = {
    onAddContact: PropTypes.func.isRequired,
  };

  state = {
    name: '',
    number: '',
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onAddContact(this.state.name, this.state.number);

    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className={s.form}>
        <label className={s.label}>
          Name
          <input
            className={s.input}
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
        </label>
        <label className={s.label}>
          Number
          <input
            className={s.input}
            type="text"
            name="number"
            value={this.state.number}
            onChange={this.handleChange}
          />
        </label>
        <button type="submit" className={s.button}>
          Add contact
        </button>
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  onAddContact: (name, phone) => dispatch(addContact(name, phone)),
});

export default connect(null, mapDispatchToProps)(ContactForm);

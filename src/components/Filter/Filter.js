import React from 'react';
import PropTypes from 'prop-types';
import s from './Filter.module.css';
import { connect } from 'react-redux';
import { changeFilter } from '../../redux/phonebook/phonebook-actions';

function Filter({ value = '', onChangeFilter }) {
  return (
    <div>
      <h3>Find contact by name</h3>
      <input
        className={s.input}
        type="text"
        value={value}
        onChange={onChangeFilter}
      />
    </div>
  );
}

Filter.propTypes = {
  value: PropTypes.string,
  onChangeFilter: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  value: state.contacts.filter,
});

const mapDispatchToProps = dispatch => ({
  onChangeFilter: e => dispatch(changeFilter(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);

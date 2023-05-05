import { useState } from 'react';
import css from './Searchbar.module.css';
import Notiflix from 'notiflix';
import PropTypes from "prop-types";

export default function Searchbar ({onSubmit}) {

const [searchQuery, setSearchQuery] = useState('');
const [disabledBtn, setDisabledBtn] = useState(false);

const handleQueryChange = evt => {
  setSearchQuery(evt.currentTarget.value.toLowerCase());
  setDisabledBtn(false);
};

const handleSubmit = evt => {
  evt.preventDefault();

  if(searchQuery.trim() === '') {
    Notiflix.Notify.warning('Please enter search query');
    return;
  }

  onSubmit(searchQuery);
  setDisabledBtn(true);

};

    return (
        <header className={css.searchbar}>
        <form onSubmit={handleSubmit} className={css.form}>
        
          <input
            className={css.input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={handleQueryChange}
            value={searchQuery}
          />
          <button type="submit" className={css.button} disabled={disabledBtn}>
            <span className={css['button__label']}>Search</span>
          </button>
        </form>
      </header>
          );
};


Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
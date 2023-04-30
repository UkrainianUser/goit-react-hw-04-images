import React from 'react';
import css from './Button.module.css';
import PropTypes from "prop-types";

const Button = ({ onLoadMore }) => {
  return (
    <button type="button" className={css['load-btn']} onClick={onLoadMore}>
      <span>Load more</span>
    </button>
  );
};

export default Button;

Button.propTypes = {
  onLoadMore: PropTypes.func.isRequired,
}
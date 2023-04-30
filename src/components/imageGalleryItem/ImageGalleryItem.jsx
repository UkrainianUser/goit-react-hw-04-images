import React from 'react';
import css from './ImageGalleryItem.module.css';
import PropTypes from "prop-types";

const ImageGalleryItem = ({webformatURL, largeImageURL, tags, openModal, toggleOnLoading,}) => {
  return (
    <li className={css['gallery__item']}>
      <img
        className={css['gallery__item-img']}
        src={webformatURL}
        data-large={largeImageURL}
        alt={tags}
        onClick={(evt) => {
          openModal(evt.currentTarget.dataset.large);
          toggleOnLoading();
        }}
      />
    </li>
  );
}

export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  toggleOnLoading: PropTypes.func.isRequired,
  openModal: PropTypes.func.isRequired,
};
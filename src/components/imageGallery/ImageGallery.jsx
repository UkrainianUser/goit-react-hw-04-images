import React from 'react';
import css from './ImageGallery.module.css';
import ImageGalleryItem from 'components/imageGalleryItem/ImageGalleryItem';
import PropTypes from "prop-types";


const ImageGallery = ({ images, toggleOnLoading, openModal }) => {
  return (
    <ul className={css.gallery}>
      {images.map(({ id, webformatURL, largeImageURL, tags }) => (
        <ImageGalleryItem key={id} webformatURL={webformatURL}  largeImageURL={largeImageURL} tags={tags} openModal={openModal}
        toggleOnLoading={toggleOnLoading}/>
      ))}
    </ul>
  );
};


export default ImageGallery;

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.shape(PropTypes.string.isRequired)),
  toggleOnLoading: PropTypes.func.isRequired,
  openModal: PropTypes.func.isRequired,
}
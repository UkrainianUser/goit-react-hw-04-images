import React from 'react';
import css from './ImageGallery.module.css';
import ImageGalleryItem from 'components/imageGalleryItem/ImageGalleryItem';
import PropTypes from "prop-types";


const ImageGallery = ({ images, openModal }) => {
  console.log(images);
  return (
    <ul className={css.gallery}>
      {images.map(({ id, webformatURL, largeImageURL, tags }) => (
        <ImageGalleryItem key={id} webformatURL={webformatURL}  largeImageURL={largeImageURL} tags={tags} openModal={openModal}/>
      ))}
    </ul>
  );
};


export default ImageGallery;

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
    tags: PropTypes.string,
  })),
  openModal: PropTypes.func.isRequired,
}
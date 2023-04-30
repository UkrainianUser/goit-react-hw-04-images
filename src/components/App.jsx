import { useState, useEffect, useRef } from 'react';
import Searchbar from './searchbar/Searchbar';
import ImageGallery from './imageGallery/ImageGallery';
import Button from './button/Button';
import Modal from './modal/Modal';
import css from './App.module.css';
import api from '../services/imagesApi';
import Loader from './loader/Loader';

export default function App() {

  const [searchQuery, setSearchQuery] = useState('');
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [isEmpty, setIsEmpty] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showLoadMore, setShowLoadMore] = useState(false);
  const [urlModal, setUrlModal] = useState('');
  
  const prevSearchQuery = useRef('');
  const prevPage = useRef(1);

  const handleFormSubmit = query => {
    setSearchQuery(query);
    setImages([]);
    setPage(1);
    setShowLoadMore(false);
    setIsEmpty(false);
    setError('');
  };
  
  const handleGetImages = async (searchQuery, page) => {
    setIsLoading(true);
    
    try {
      const response = await api.fetchApi(searchQuery, page);
      if (!response.hits.length) {
        setIsEmpty(true);
        return;
      }
      setImages((prevImages) => [...prevImages, ...response.hits]);
      setShowLoadMore(response.totalHits && page < Math.ceil(response.totalHits / 12));
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
    
  };
  
  useEffect(() => {
    if (prevSearchQuery.current !== searchQuery || prevPage.current !== page) {
      handleGetImages(searchQuery, page);
    }
    prevSearchQuery.current = searchQuery;
    prevPage.current = page;
  }, [searchQuery, page]);

  const toggleOnLoading = () => {
    setIsLoading(!isLoading);
  };
  
  const onLoadMore = () => {
    setPage(page + 1);
  };
  
  const openModal = (url) => {
    setShowModal(true);
    setUrlModal(url);
  };

  const closeModal = () => {
    setShowModal(false);
    setUrlModal('');
  };

    return (
      <div className={css.app}>
        <Searchbar onSubmit={handleFormSubmit}/>
        <ImageGallery 
          images={images} openModal={openModal} toggleOnLoading={toggleOnLoading}
        />
        {showLoadMore && <Button onLoadMore={onLoadMore} />}
        {isLoading && <Loader />}
        {showModal && (
          <Modal onClose={closeModal}>
            <img
              onLoad={toggleOnLoading}
              src={urlModal}
              alt=""
              className={css['modal-img']}
            />
          </Modal>
        )}
      </div>
    );
};
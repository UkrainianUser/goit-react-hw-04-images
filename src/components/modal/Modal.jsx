import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import css from './Modal.module.css';
import PropTypes from 'prop-types';

const modalRoot = document.querySelector('#modal-root');

export default function Modal({onClose, children}) {

  useEffect(() => {
    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
    }
  }, [onKeyDown]);

  const onKeyDown = (evt) => {
    if (evt.code === "Escape") {
      onClose();
    }
  };

  const onBackdropClick = (evt) => {
    if (evt.currentTarget === evt.target) {
      onClose();
    }
  };

    return createPortal(
      <div className={css.overlay} onClick={onBackdropClick}>
        <div className={css.modal}>
					<button
            type="button"
            className={css.button}
            onClick={onClose}
          >Close
          </button>
          {children}
        </div>
      </div>,
      modalRoot
    );
}


Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  children: PropTypes.element,
}

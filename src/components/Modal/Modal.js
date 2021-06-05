import './Modal.css';

import { useModal } from '../../contexts/ModalContext';
import { useEffect } from 'react';

const Modal = () => {
  const { modalWindow, resetModal } = useModal();

  const closeModal = () => resetModal();

  useEffect(() => {
    setTimeout(()=>{
      resetModal();
    }, 6000);
  }, [modalWindow.isOpen])

  return (
    <div className={`modal ${modalWindow.isOpen ? 'modal_active':''}`}>
        <div className={`modal__indicator ${modalWindow.isBad ? 'modal__indicator_bad' : '' }`}></div>
        <p className="modal__message">{modalWindow.message}</p>
        <button className="modal__close-button" type="button" onClick={closeModal}></button>
    </div>
  )
}

export default Modal;

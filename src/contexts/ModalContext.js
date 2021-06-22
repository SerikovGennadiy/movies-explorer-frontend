import { createContext, useState, useContext} from 'react';

const ModalContext = createContext();

export const ModalProvider = ({children}) => {
  const [modalWindow, setModalWindow] = useState({
    message: 'Тестовый режим',
    isOpen: false, //true,
    isBad: true
  });

  const setModal = ({message = '', isBad = false }) => {
    resetModal();
    setModalWindow({
      ...modalWindow,
        message,
        isBad,
        isOpen: true
    });
  }

  const resetModal = () => {
    setModalWindow({
      ...modalWindow,
        message: '',
        isOpen: false,
        isBad: true
      });
  }

  return (
    <ModalContext.Provider value={{ modalWindow, setModal, resetModal }}>
      {children}
    </ModalContext.Provider>
  )
}

export const useModal = () => useContext(ModalContext);

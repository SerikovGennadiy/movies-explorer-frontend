import { createContext, useState, useContext} from 'react';

const ModalContext = createContext();

export const ModalProvider = ({children}) => {
  const [modalWindow, setModalWindow] = useState({
    message: 'Тестовый режим',
    isOpen: true,
    isBad: true
  });

  const setModal = ({message = '', isBad = false }) => {
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

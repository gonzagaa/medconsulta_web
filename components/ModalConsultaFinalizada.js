// components/SecondModalComponent.js
import React, { useState } from 'react';
import Modal from 'react-modal';
import styles from '../styles/ModalConsultaFinalizada.module.css';


Modal.setAppElement('#__next');

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    padding: '20px',
    borderRadius: '10px',
    backgroundColor: '#fff',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    border: 'none',
    outline: 'none',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.25)',
    backdropFilter: 'blur(10px)',
    WebkitBackdropFilter: 'blur(10px)',
  },
};

const ModalConsultaFinalizada = () => {
  const [modalIsOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div className={styles.Modal}>
        <button className={styles.buttonOpen} onClick={openModal}>
            <img className={styles.imageCarinha} src="./images/perfilcarinha.svg" />
        </button>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className={styles.modalView}>
            <button className={styles.buttonVoltar} onClick={closeModal}>Voltar</button>

            <div className={styles.buttons}>
                <button className={styles.button}> Editar perfil</button>
                <button className={styles.button}> Consultas realizadas</button>
            </div>

            <button className={styles.buttonSair} onClick={closeModal}>Sair da conta</button>
        </div>
      </Modal>
    </div>
  );
};


export default ModalConsultaFinalizada;

// geral
import React, { useState } from 'react';
import Modal from 'react-modal';

//icons react
import { SlArrowLeft } from "react-icons/sl";
import { FaRegUser, FaCheck } from "react-icons/fa6";

//css
import styles from '../styles/ModalPerfil.module.css';
import { display } from '@splidejs/splide/src/js/utils';
import { BiBorderAll } from 'react-icons/bi';

Modal.setAppElement('#__next');

const ModalComponent = () => {
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
            <button className={styles.buttonVoltar} onClick={closeModal}><SlArrowLeft/> Voltar</button>

            <div className={styles.buttons}>
                <button className={styles.button}><FaRegUser /> Editar perfil</button>
                <button className={styles.button}><FaCheck /> Consultas realizadas</button>
            </div>

            <button className={styles.buttonSair} onClick={closeModal}>Sair da conta</button>
        </div>
      </Modal>
    </div>
  );
};

const customStyles = {
    content: {
      top: '0',
      right: '0',
      left: 'auto',
      bottom: 'auto',
      boxShadow: '-10px 10px 30px rgba(0, 0, 0, 0.1)',
      borderRadius: '0 0 0 35px',
      backgroundColor: "transparent",      
      border: 'none',
      outline: 'none',
      padding: 0, 
      margin: 0, 
    },
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.05)',
      backdropFilter: 'blur(2px)', 
      WebkitBackdropFilter: 'blur(2px)', 
    },
  };

export default ModalComponent;

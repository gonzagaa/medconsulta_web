// components/SecondModalComponent.js
import React, { useState } from 'react';
import Modal from 'react-modal';
import styles from '../styles/ModalConsultaFinalizada.module.css';
import { IoClose } from "react-icons/io5";

Modal.setAppElement('#__next');

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    outline: 'none',
    padding: 0, 
    margin: 0, 
    borderRadius: '10px',
    backgroundColor: 'transparent',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    border: 'none',
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
            teste
        </button>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className={styles.modalView}>
            <div className={styles.head}>
              <img className={styles.logoMed} src="./images/logoescrita.svg" />
              <button className={styles.buttonFechar} onClick={closeModal}><IoClose /></button>
            </div>

            <h2 className={styles.h2}>Consulta finalizada!</h2>
            <select className={styles.select} id="problemas" name="problemas">
              <option className={styles.option} value="" disabled selected hidden>Escolha uma das opções:</option>
              <option className={styles.option} value="qualidade_conexao">Problemas com qualidade de conexão</option>
              <option className={styles.option} value="audio">Problemas com áudio</option>
              <option className={styles.option} value="video">Problemas com vídeo</option>
              <option className={styles.option} value="consulta_sucesso">Consulta realizada com sucesso!</option>
            </select>
            <textarea
              className={styles.textarea}
              rows={5} 
              cols={50} 
              placeholder="Descrição..."
              required 
            />

            <button className={styles.buttonConcluir} onClick={closeModal}>CONCLUIR</button>
        </div>
      </Modal>
    </div>
  );
};


export default ModalConsultaFinalizada;

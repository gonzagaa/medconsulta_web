// components/SecondModalComponent.js
import React, { useState } from 'react';
import Modal from 'react-modal';
import styles from '../styles/DetalhesConsulta.module.css';

import { IoClose } from "react-icons/io5";
import { RiCalendarScheduleLine } from "react-icons/ri";
import { TbClockHour4 } from "react-icons/tb";
import { RiHeartsLine } from "react-icons/ri";
import { FaRegUser, FaUsersRectangle } from "react-icons/fa6";
import { FiPhone, FiAlertCircle } from "react-icons/fi";
import { IoCheckmarkOutline } from "react-icons/io5";

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

const ModalDetalhes = () => {
  const [modalIsOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div className={styles.Modal}>
        <button className={styles.status} onClick={openModal}>
            <h4>PACIENTE AGUARDANDO</h4>
        </button>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className={styles.modalView}>
              <button className={styles.buttonFechar} onClick={closeModal}><IoClose /></button>

              <div className={styles.content}>
                    <h1 className={styles.h1}>Detalhes da consulta</h1>

                    <div className={styles.buttons}>
                        <button className={styles.buttonIniciar}>Iniciar Atendimento</button>
                        <h3 className={styles.textStatus}>O Paciente está aguardando <IoCheckmarkOutline /></h3>
                    </div>

                    <div className={styles.dadosConsulta}>
                        <p className={styles.p}><RiCalendarScheduleLine /> Consulta <span className={styles.span}>agendada</span></p>
                        <p className={styles.p}><TbClockHour4 /> <span className={styles.span}>Hoje,</span> às 14:30</p>
                        <p className={styles.p}><RiHeartsLine /> Clinica <span className={styles.span}>Médica</span></p>
                    </div>

                    <div className={styles.dadosPaciente}>
                        <h3 className={styles.h3}>PACIENTE</h3>

                        <div className={styles.dadosPacienteContent}>
                            <p className={styles.p}><FaRegUser /> Gonzaguinha</p>
                            <p className={styles.p}><FaUsersRectangle /> 19 aninhos</p>
                            <p className={styles.p}><FiPhone /> (62) 9 8646-4678</p>
                        </div>
                    </div>

                    <div className={styles.foot}>
                        <div className={styles.historico}>
                            <h3 className={styles.h3}>HISTÓRICO DE CONSULTAS</h3>
                            <div className={styles.historicoContent}>
                                <p className={styles.p}><FiAlertCircle /> Nenhuma consulta anterior</p>
                            </div>
                        </div>

                        <div className={styles.arquivos}>
                            <h3 className={styles.h3}>ARQUIVOS ADICIONADOS</h3>
                            <div className={styles.arquivosContent}>
                                <p className={styles.p}><FiAlertCircle /> Nenhuma consulta anterior</p>
                            </div>
                        </div>
                    </div>
                </div>

        </div>
      </Modal>
    </div>
  );
};


export default ModalDetalhes;

import styles from '../styles/Chamada.module.css';
import Head from 'next/head';
import { FaRegUser, FaUsersRectangle } from "react-icons/fa6";
import { FiPhone } from "react-icons/fi";
import { PiPill } from "react-icons/pi";
import { LiaFileMedicalSolid } from "react-icons/lia";
import { MdHistory } from "react-icons/md";

import ModalConsultaFinalizada from '../components/ModalConsultaFinalizada';

export default function Chamada() {
    
    return (
        <div className={styles.container}>
            <Head>
                <title>MedConsulta - Acesso Médico</title>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
                <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet"></link>
            </Head>


            <main className={styles.wrapper}>
                <div className={styles.content}>
                    <div className={styles.camera}>
                        <img className={styles.testeImagem} src="./images/testeimagem.jpg" />
                    </div>

                    <div className={styles.prontuario}>

                    </div>

                    <div className={styles.detalhes}>
                        <div className={styles.dadosPaciente}>
                        <ModalConsultaFinalizada />
                            <h3 className={styles.h3}><FaRegUser /> Gonzaguinha</h3>
                            <p className={styles.p}><FaUsersRectangle /> 19 aninhos</p>
                            <p className={styles.p}><FiPhone /> (62) 9 8646-4678</p> 
                        </div>

                        <div className={styles.buttons}>
                            <button className={styles.button}><PiPill/> Prontuário</button>
                            <button className={styles.button}><LiaFileMedicalSolid /> Prescrição</button>
                            <button className={styles.button}><MdHistory /> Historico de Consultas</button>
                        </div>
                    </div>
                </div>
            </main>

      <style jsx global>{`
        * {
          font-family: "Montserrat", sans-serif;
          box-sizing: border-box;
          padding: 0;
          margin: 0;
        },
      `}</style>
      
        </div>
    )
}
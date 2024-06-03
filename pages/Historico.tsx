import styles from '../styles/Historico.module.css';
import Head from 'next/head';
import { SlArrowLeft } from "react-icons/sl";
import React from 'react';


export default function Historico() {
    return (
        <div className={styles.container}>
            <Head>
                <title>MedConsulta - Acesso Médico</title>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com"/>
                <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet"></link>
                
            </Head>

            <main className={styles.wrapper}>

            <div className={styles.head}>
                <a className={styles.a} href='http://localhost:3000/Home'>
                    <SlArrowLeft className={styles.iconArrow} />
                    Voltar
                </a>
            </div>

            <h1 className={styles.h1}>Esse é seu histórico de consultas:</h1>
            
            <details className={styles.details}>
                <summary className={styles.summary}>Últimas 24 horas</summary>
                <div className={styles.card}>
                    <div className={styles.card_content}>
                        <h3 className={styles.textPaciente}>Nome do Paciente</h3>
                        <p className={styles.textEspecialidade}>Especialidade</p>
                        <p className={styles.textData}><span className={styles.textDataSpan}>Hoje,</span> as 21:30</p>
                    </div>
                    <a className={styles.textDetalhes}>Ver detalhes</a>
                </div>

                <div className={styles.card}>
                    <div className={styles.card_content}>
                        <h3 className={styles.textPaciente}>Nome do Paciente</h3>
                        <p className={styles.textEspecialidade}>Especialidade</p>
                        <p className={styles.textData}><span className={styles.textDataSpan}>Hoje,</span> as 21:30</p>
                    </div>
                    <a className={styles.textDetalhes}>Ver detalhes</a>
                </div>
            </details>

            <details className={styles.details}>
                <summary className={styles.summary}>Última semana</summary>
                <div className={styles.card}>
                    <div className={styles.card_content}>
                        <h3 className={styles.textPaciente}>Nome do Paciente</h3>
                        <p className={styles.textEspecialidade}>Especialidade</p>
                        <p className={styles.textData}><span className={styles.textDataSpan}>Hoje,</span> as 21:30</p>
                    </div>
                    <a className={styles.textDetalhes}>Ver detalhes</a>
                </div>

                <div className={styles.card}>
                    <div className={styles.card_content}>
                        <h3 className={styles.textPaciente}>Nome do Paciente</h3>
                        <p className={styles.textEspecialidade}>Especialidade</p>
                        <p className={styles.textData}><span className={styles.textDataSpan}>Hoje,</span> as 21:30</p>
                    </div>
                    <a className={styles.textDetalhes}>Ver detalhes</a>
                </div>
            </details>

            <details className={styles.details}>
                <summary className={styles.summary}>Último mes</summary>
                <div className={styles.card}>
                    <div className={styles.card_content}>
                        <h3 className={styles.textPaciente}>Nome do Paciente</h3>
                        <p className={styles.textEspecialidade}>Especialidade</p>
                        <p className={styles.textData}><span className={styles.textDataSpan}>Hoje,</span> as 21:30</p>
                    </div>
                    <a className={styles.textDetalhes}>Ver detalhes</a>
                </div>

                <div className={styles.card}>
                    <div className={styles.card_content}>
                        <h3 className={styles.textPaciente}>Nome do Paciente</h3>
                        <p className={styles.textEspecialidade}>Especialidade</p>
                        <p className={styles.textData}><span className={styles.textDataSpan}>Hoje,</span> as 21:30</p>
                    </div>
                    <a className={styles.textDetalhes}>Ver detalhes</a>
                </div>
            </details>
               
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
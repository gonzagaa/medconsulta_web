import styles from '../styles/Home.module.css';
import Head from 'next/head';
import React, { useState } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/sea-green';
import ModalComponent from '../components/ModalComponent';
import ModalDetalhes from '../components/modalDetalhes';


export default function Home() {
    const [mostrarConteudo, setMostrarConteudo] = useState(false);

    // Função para mudar a visibilidade
    const toggleConteudo = () => {
        setMostrarConteudo(true);
    };

    return (
        <div className={styles.container}>
            <Head>
                <title>MedConsulta - Acesso Médico</title>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com"/>
                <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet"></link>
            </Head>

            <main className={styles.wrapper}>
               <div className={styles.content}>
                    <div className={styles.header}>
                            <div className={styles.headText}>
                                <h2 className={styles.h2}><span className={styles.h2Span}>Olá, </span>Dr(a) Mateus Aquino</h2>
                                <p className={styles.p}>Que bom te ver novamente!</p>
                            </div>

                            <div className={styles.boxCarinha}>
                                <a>
                                    <ModalComponent />
                                </a>
                            </div>
                    </div>

                    <div className={styles.boxContent}>
                        {!mostrarConteudo && (
                            <button onClick={toggleConteudo} className={styles.buttonPlantao}>
                                Iniciar plantão clínico
                                <p className={styles.paragraphyButtonPlantao}>Clique aqui para começar os atendimentos</p>

                                <img className={styles.logoSmall} src="./images/logosmall.svg" />
                            </button>
                        )}
                        {mostrarConteudo && (
                            <div className={styles.listaPacientes}>
                                <Splide
                                 options={{
                                    rewind: false,
                                    gap: '1rem',
                                  }}
                                 className={styles.splide}>
                                    <SplideSlide className={styles.splideSlide}>
                                        <h3 className={styles.textPacienteAguardando}>Nome do Paciente</h3>
                                        <h3 className={styles.textPaciente}>Nome do Paciente</h3>
                                        <h3 className={styles.textPacienteAguardando}>Nome do Paciente</h3>
                                        <h3 className={styles.textPaciente}>Nome do Paciente</h3>
                                        <h3 className={styles.textPacienteAguardando}>Nome do Paciente</h3>
                                    </SplideSlide>
                                    <SplideSlide className={styles.splideSlide}>
                                        <h3 className={styles.textPacienteAguardando}>Nome do Paciente</h3>
                                        <h3 className={styles.textPaciente}>Nome do Paciente</h3>
                                        <h3 className={styles.textPacienteAguardando}>Nome do Paciente</h3>
                                        <h3 className={styles.textPaciente}>Nome do Paciente</h3>
                                        <h3 className={styles.textPacienteAguardando}>Nome do Paciente</h3>
                                    </SplideSlide>
                                </Splide> 
                            </div>
                        )}
                    </div>

                    <div className={styles.agenda}>
                        <h3 className={styles.h3}>Sua agenda para o dia de hoje:</h3>

                        <div className={styles.cards}>
                            <div className={styles.card_aguardando}>
                                <h4 className={styles.status}>PACIENTE AINDA NÃO ENTROU</h4>

                                <div className={styles.dados}>
                                    <h5 className={styles.textNome}>NOME DO PACIENTE</h5>
                                    <p className={styles.textEspecialidade}>Especialidade</p>
                                </div>

                                <div className={styles.data}>
                                    <p className={styles.textData}><span className={styles.textDataSpan}>Hoje,</span> as 21:30</p>
                                    <a className={styles.textDetalhes}>Ver detalhes</a>
                                </div>
                            </div>

                            <div className={styles.card}>
                                <ModalDetalhes />

                                <div className={styles.dados}>
                                    <h5 className={styles.textNome}>NOME DO PACIENTE</h5>
                                    <p className={styles.textEspecialidade}>Especialidade</p>
                                </div>

                                <div className={styles.data}>
                                    <p className={styles.textData}><span className={styles.textDataSpan}>Hoje,</span> as 21:30</p>
                                    <a className={styles.textDetalhes}>Ver detalhes</a>
                                </div>
                            </div>

                            <div className={styles.card_aguardando}>
                                <h4 className={styles.status}>PACIENTE AINDA NÃO ENTROU</h4>

                                <div className={styles.dados}>
                                    <h5 className={styles.textNome}>NOME DO PACIENTE</h5>
                                    <p className={styles.textEspecialidade}>Especialidade</p>
                                </div>

                                <div className={styles.data}>
                                    <p className={styles.textData}><span className={styles.textDataSpan}>Hoje,</span> as 21:30</p>
                                    <a className={styles.textDetalhes}>Ver detalhes</a>
                                </div>
                            </div>

                            <div className={styles.card}>
                                <h4 className={styles.status}>PACIENTE AGUARDANDO</h4>

                                <div className={styles.dados}>
                                    <h5 className={styles.textNome}>NOME DO PACIENTE</h5>
                                    <p className={styles.textEspecialidade}>Especialidade</p>
                                </div>

                                <div className={styles.data}>
                                    <p className={styles.textData}><span className={styles.textDataSpan}>Hoje,</span> as 21:30</p>
                                    <a className={styles.textDetalhes}>Ver detalhes</a>
                                </div>
                            </div>

                            
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
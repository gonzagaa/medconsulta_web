import styles from '../styles/DetalhesConsulta.module.css';
import Head from 'next/head';

export default function DetalhesConsulta() {
    
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
                    <h1 className={styles.h1}>Detalhes da consulta</h1>

                    <div className={styles.buttons}>
                        <button className={styles.buttonIniciar}>Iniciar Atendimento</button>
                        <h3 className={styles.textStatus}>O Paciente está pronto</h3>
                    </div>

                    <div className={styles.dadosConsulta}>
                        <p className={styles.p}>Consulta <span className={styles.span}>agendada</span></p>
                        <p className={styles.p}><span className={styles.span}>Hoje,</span> às 14:30</p>
                        <p className={styles.p}>Clinica <span className={styles.span}>Médica</span></p>
                    </div>

                    <div className={styles.dadosPaciente}>
                        <h3 className={styles.h3}>PACIENTE</h3>

                        <div className={styles.dadosPacienteContent}>
                            <p className={styles.p}>Gonzaguinha</p>
                            <p className={styles.p}>19 aninhos</p>
                            <p className={styles.p}>(62) 9 8646-4678</p>
                        </div>
                    </div>

                    <div className={styles.foot}>
                        <div className={styles.historico}>
                            <h3 className={styles.h3}>HISTÓRICO DE CONSULTAS</h3>
                            <div className={styles.historicoContent}>
                                <p className={styles.p}>Nenhuma consulta anterior</p>
                            </div>
                        </div>

                        <div className={styles.arquivos}>
                            <h3 className={styles.h3}>ARQUIVOS ADICIONADOS</h3>
                            <div className={styles.arquivosContent}>
                                <p className={styles.p}>Nenhuma consulta anterior</p>
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
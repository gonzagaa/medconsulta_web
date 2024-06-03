import React from 'react';
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import TextareaAutosize from '@mui/material/TextareaAutosize';

import styles from '../styles/DrawerMenu.module.css';

const MenuDrawer = ({ open, onClose }) => {
  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={onClose}
    >
      <Box className={styles.Menu} sx={{ width: 400, padding: '25px' }}>
        <img className={styles.logoMed} src="./images/logomedescritaazul.svg" />
        <h2 className={styles.h2}>Prontuário</h2>

        <div className={styles.boxFormulario}>
            <h3 className={styles.h3}>Queixa</h3>
            <TextField label="Sintomas" className={styles.inputField}/>
            <TextField label="Outro" className={styles.inputField}/>

            <TextareaAutosize
              aria-label="Histórico da doença atual"
              placeholder="Histórico da doença atual"
              minRows={3}
              maxRows={5}
              className={styles.textareaField}
            />
        </div>

        <div className={styles.boxFormulario}>
            <h3 className={styles.h3}>Antecedentes</h3>
            <TextareaAutosize
              aria-label="Antecedentes"
              placeholder="Antecedentes"
              minRows={3}
              maxRows={5}
              className={styles.textareaField}
            />
            <TextareaAutosize
              aria-label="Outro"
              placeholder="Outro"
              minRows={3}
              maxRows={5}
              className={styles.textareaField}
            />
        </div>

        <div className={styles.boxFormulario}>
            <h3 className={styles.h3}>Estado Geral</h3>
            
            <Select value="" fullWidth displayEmpty variant="outlined" className={styles.selectField}>
              <MenuItem value="" disabled>
                Escolha o estado
              </MenuItem>
              <MenuItem value={10}>Bom estado geral (BEG)</MenuItem>
              <MenuItem value={20}>Regular estado geral (REG)</MenuItem>
              <MenuItem value={30}>Mau estado geral (MEG)</MenuItem>
            </Select>
        </div>

        <div className={styles.boxFormulario}>
            <h3 className={styles.h3}>Padrão de Icteria</h3>
            
            <Select value="" fullWidth displayEmpty variant="outlined" className={styles.selectField}>
              <MenuItem value="" disabled>
                Escolha uma opção
              </MenuItem>
              <MenuItem value={10}>Anictério</MenuItem>
              <MenuItem value={20}>Ictério</MenuItem>
            </Select>
        </div>

        <div className={styles.boxFormulario}>
            <h3 className={styles.h3}>Grau de polidez</h3>
            
            <Select value="" fullWidth displayEmpty variant="outlined" className={styles.selectField}>
              <MenuItem value="" disabled>
                Escolha uma opção
              </MenuItem>
              <MenuItem value={10}>Corado</MenuItem>
              <MenuItem value={20}>Descorado</MenuItem>
            </Select>
        </div>

        <div className={styles.boxFormulario}>
            <h3 className={styles.h3}>Padrão da cionose</h3>
            
            <Select value="" fullWidth displayEmpty variant="outlined" className={styles.selectField}>
              <MenuItem value="" disabled>
                Escolha uma opção
              </MenuItem>
              <MenuItem value={10}>Acionótico</MenuItem>
              <MenuItem value={20}>Cionótico</MenuItem>
            </Select>
        </div>

        <div className={styles.boxFormulario}>
            <h3 className={styles.h3}>Padrão respiratório</h3>
            
            <Select value="" fullWidth displayEmpty variant="outlined" className={styles.selectField}>
              <MenuItem value="" disabled>
                Escolha uma opção
              </MenuItem>
              <MenuItem value={10}>Eupneico</MenuItem>
              <MenuItem value={20}>Dispeneico</MenuItem>
            </Select>
        </div>

        <div className={styles.boxFormulario}>
            <h3 className={styles.h3}>Conduta</h3>
            <TextareaAutosize
              aria-label="Orientação"
              placeholder="Orientação"
              minRows={3}
              maxRows={5}
              className={styles.textareaField}
            />

            <TextField label="Indicar Especialidade" className={styles.inputField}/>
            <TextField label="Acompanhar evolução" className={styles.inputField}/>
        </div>

        <div className={styles.boxFormulario}>
            <h3 className={styles.h3}>Hipótese Diagnóstica (HD)</h3>
            <TextareaAutosize
              aria-label="Hipótese Diagnóstica (HD)"
              placeholder="Hipótese Diagnóstica (HD)"
              minRows={3}
              maxRows={5}
              className={styles.textareaField}
            />
        </div>

        <div className={styles.boxFormulario}>
            <h3 className={styles.h3}>Desfecho</h3>
            
            <Select value="" fullWidth displayEmpty variant="outlined" className={styles.selectField}>
              <MenuItem value="" disabled>
                Escolha uma opção
              </MenuItem>
              <MenuItem value={10}>Orientação</MenuItem>
              <MenuItem value={20}>Pronto atendimento</MenuItem>
            </Select>
        </div>
      </Box>
    </Drawer>
  );
};

export default MenuDrawer;

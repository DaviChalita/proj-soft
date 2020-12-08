import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import { Icon } from '../../Estilizacao/icon';
import { modal } from '../../Estilizacao/estilizacao'

import DialogContentText from '@material-ui/core/DialogContentText';

const styles = () => ({
    root: {
        margin: 0,
        padding: 20 + 'px',
    },
    closeButton: {
        position: 'absolute',
        right: 10 + 'px',
        top: 10 + 'px',
        color: '#9e9e9e',
    },
});

const DialogTitle = withStyles(styles)((props) => {
    const { children, classes, onClose, ...other } = props;
    return (
        <MuiDialogTitle disableTypography className={classes.root} {...other}>
            <Typography variant="h6">{children}</Typography>
            {onClose ? (
                <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
                    <Icon.Fechar />
                </IconButton>
            ) : null}
        </MuiDialogTitle>
    );
});

export default function Modal(props) {
    return (
        <Dialog onClose={props.fecharModal} fullWidth aria-labelledby="customized-dialog-title" open={props.aberto}>
            <DialogTitle id="customized-dialog-title" onClose={props.fecharModal}>
                {props.titulo}
            </DialogTitle>
            <DialogContent dividers style={modal.conteudo}>
                <DialogContentText>
                    {props.descricao}
                </DialogContentText>
                {props.conteudo}
            </DialogContent>
            <DialogActions styles={modal.acoes}>
                <Button autoFocus onClick={props.onClick} style={modal.botao}>
                    {props.botao}
                </Button>
                {
                    props.possuiOutroBotao && 
                    <Button autoFocus onClick={props.onClickOutroBotao} style={modal.botao}>
                        {props.outroBotao}
                    </Button>
                }
            </DialogActions>
        </Dialog>
    );
}
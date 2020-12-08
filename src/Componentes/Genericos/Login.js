import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { login } from '../../Estilizacao/estilizacao';
import Botao from './Botao';
import Erro from './Erro';


export default function Login(props) {
    return (
        <Container component="main" maxWidth="xs">
            <Erro aberto={props.visualizacao} mensagem={props.mensagem} fecharErro={props.fecharErro} />
            <CssBaseline />
            <div style={login.paper}>
                <Avatar style={login.avatar} >
                </Avatar>
                <Typography component="h1" variant="h5">
                    Entrar - {props.tipoUsuario}
                </Typography>
                <form noValidate style={login.form}>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Usuario"
                        name="usuario"
                        autoFocus
                        onChange={props.onChange}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="senha"
                        label="Senha"
                        type="password"
                        onChange={props.onChange}
                    />
                    <Botao onClick={props.realizarLogin} texto='Entrar' type='submit' />
                </form>
            </div>
        </Container>
    );
}
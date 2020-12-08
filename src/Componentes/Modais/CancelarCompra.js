import React, { Component } from 'react';
import Modal from '../Genericos/Modal'
import GerenteActions from '../../Gerenciamento de Estados/Actions/GerenteActions';
import GerenteStore from '../../Gerenciamento de Estados/Stores/GerenteStore';
import ModalStore from '../../Gerenciamento de Estados/Stores/ModalStore';
import TextField from '@material-ui/core/TextField';
import Usuario from '../../Modelos/Usuario';
import { withRouter } from "react-router-dom";
import { ROTAS } from '../../Config/routes';
import VendaActions from '../../Gerenciamento de Estados/Actions/VendaActions';

class CancelarCompra extends Component {

  constructor(props) {
    super(props);
    this.state = {
      aberto: false,
      usuario: new Usuario()
    };
  }

  componentDidMount() {
    GerenteStore.on('LOGIN', this.redirecionar);
    ModalStore.on('CANCELAR_COMPRA', this.abrir);
  }

  componentWillUnmount() {
    GerenteStore.removeListener('LOGIN', this.redirecionar)
    ModalStore.removeListener('CANCELAR_COMPRA', this.abrir);
  }


  redirecionar = () => {
    return this.props.history.push(ROTAS.LOGIN_VENDEDOR);
  }

  abrir = () => {
    this.setState({ aberto: true })
  }

  fechar = () => {
    this.setState({ aberto: false })
  };

  onChange = (evento) => {
    evento.preventDefault();
    const { name, value } = evento.target;
    var usuario = this.state.usuario;
    usuario[name] = value;
    this.setState({ usuario });
  }

  onClick = () => {
    GerenteActions.login(this.state.usuario);
  }

  render() {

    const conteudoModal = <>
      <TextField
        autoFocus
        margin="dense"
        label="Usuario"
        type="text"
        name="usuario"
        fullWidth
        onChange={this.onChange}
      />

      <TextField
        autoFocus
        margin="dense"
        label="Senha"
        type="password"
        name="senha"
        fullWidth
        onChange={this.onChange}
      />
    </>

    return <>
      <Modal fecharModal={this.fechar} aberto={this.state.aberto} titulo="Dados do Gerente" botao='Cancelar Compra' onClick={this.onClick}
        descricao="O gerente precisa inserir seu usuário e senha para que a Venda seja cancelada." 
        conteudo={conteudoModal}
      />
    </>
  }
}


export default withRouter(CancelarCompra);
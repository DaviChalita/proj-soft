import React, { Component } from 'react';
import Login from '../Genericos/Login';
import ModalCliente from '../Modais/Cliente';
import VendedorActions from '../../Gerenciamento de Estados/Actions/VendedorActions';
import Usuario from '../../Modelos/Usuario';
import VendedorStore from '../../Gerenciamento de Estados/Stores/VendedorStore';

export default class LoginVendedor extends Component {

  constructor(props) {
    super(props);
    this.state = {
      usuario: new Usuario(),
      erro: {
        visualizacao: false,
        mensagem: null
      }
    }
  };

  
  componentDidMount() {
    VendedorStore.on('ERRO', this.exibirErro);
  }

  componentWillUnmount() {
    VendedorStore.removeListener('ERRO', this.exibirErro)
  }

  onChange = (evento) => {
    evento.preventDefault();
    const { name, value } = evento.target;
    let usuario = this.state.usuario;
    usuario[name] = value;
    this.setState({ usuario });
  };

  realizarLogin = (evento) => {
    evento.preventDefault();
    VendedorActions.login(this.state.usuario);
  }
  
  exibirErro = () => {
    let erro = {
      visualizacao: true,
      mensagem: VendedorStore.erro
    }
    this.setState({ erro })
  }
  
  fecharErro = () => {
    let erro = {
      visualizacao: false,
      mensagem: null
    }
    this.setState({ erro })
  }

  render() {
    return <>
      <ModalCliente />
      <Login realizarLogin={this.realizarLogin} onChange={this.onChange} tipoUsuario="Vendedor" 
      visualizacao={this.state.erro.visualizacao} mensagem={this.state.erro.mensagem} fecharErro={this.fecharErro}
      />
    </>;
  }
}
import React, { Component } from 'react';
import Login from '../Genericos/Login';
import GerenteActions from '../../Gerenciamento de Estados/Actions/GerenteActions';
import GerenteStore from '../../Gerenciamento de Estados/Stores/GerenteStore';
import { ROTAS } from '../../Config/routes'
import Usuario from '../../Modelos/Usuario';

export default class LoginGerente extends Component {

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
    GerenteStore.on('LOGIN', this.redirecionar);
    GerenteStore.on('ERRO', this.exibirErro);
  }

  componentWillUnmount() {
    GerenteStore.removeListener('LOGIN', this.redirecionar)
    GerenteStore.removeListener('ERRO', this.exibirErro)
  }

  exibirErro = () => {
    let erro = {
      visualizacao: true,
      mensagem: GerenteStore.erro
    }
    this.setState({ erro })
  }

  redirecionar = () => {
    return this.props.history.push(ROTAS.DASHBOARD_GERENTE);
  }

  onChange = (evento) => {
    evento.preventDefault();
    const { name, value } = evento.target;
    let usuario = this.state.usuario;
    usuario[name] = value;
    this.setState({ usuario });
  };

  realizarLogin = (e) => {
    e.preventDefault();
    GerenteActions.login(this.state.usuario);
  }
  
  fecharErro = () => {
    let erro = {
      visualizacao: false,
      mensagem: null
    }
    this.setState({ erro })
  }

  render() {
    return (
      <Login realizarLogin={this.realizarLogin} onChange={this.onChange} tipoUsuario="Gerente" 
      visualizacao={this.state.erro.visualizacao} mensagem={this.state.erro.mensagem} fecharErro={this.fecharErro}
      />
    );
  }
}
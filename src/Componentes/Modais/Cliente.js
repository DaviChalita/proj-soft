import React, { Component } from 'react';
import ClienteActions from '../../Gerenciamento de Estados/Actions/ClienteActions';
import ClienteStore from '../../Gerenciamento de Estados/Stores/ClienteStore';
import VendedorStore from '../../Gerenciamento de Estados/Stores/VendedorStore';
import TextField from '@material-ui/core/TextField';
import Modal from '../Genericos/Modal'
import { withRouter } from "react-router-dom";
import { ROTAS } from '../../Config/routes';
import Erro from '../Genericos/Erro';

class Cliente extends Component {

  constructor(props) {
    super(props);
    this.state = {
      aberto: false,
      CPF: '',
      erro: {
        visualizacao: false,
        mensagem: null
      }
    };
  }

  componentDidMount() {
    VendedorStore.on('LOGIN', this.abrir);
    ClienteStore.on('CPF_EXISTE', this.redirecionar);
    ClienteStore.on('CPF_ERRO', this.exibirErro);
  }

  componentWillUnmount() {
    VendedorStore.removeListener('LOGIN', this.abrir)
    ClienteStore.removeListener('CPF_EXISTE', this.redirecionar);
    ClienteStore.removeListener('CPF_ERRO', this.exibirErro);
  }

  exibirErro = () => {
    let erro = {
      visualizacao: true,
      mensagem: ClienteStore.erro
    }
    this.setState({ erro })
  }

  redirecionar = () => {
    return this.props.history.push(ROTAS.VENDA);
  }

  abrir = () => {
    this.setState({ aberto: true })
  }

  fechar = () => {
    this.setState({ aberto: false })
  };

  formatar = (evento) => {
    var i = evento.target.value.length;
    var mascara = '###.###.###-##';
    var saida = mascara.substring(0, 1);
    var texto = mascara.substring(i)

    if (texto.substring(0, 1) !== saida) {
      evento.target.value += texto.substring(0, 1);
    }
  }

  onChange = (evento) => {
    evento.preventDefault();
    const { value } = evento.target;
    if (value.length > 14) {
      evento.target.value = this.state.CPF
      return;
    } else {
      this.setState({ CPF: value });
    }
  }

  onClick = () => {
    if (this.state.CPF === '') {
      return this.props.history.push(ROTAS.VENDA);
    } else {
      return ClienteActions.verificarCPF(this.state.CPF.replace(/[^\d]+/g, ''));
    }
  }

  fecharErro = () => {
    let erro = {
      visualizacao: false,
      mensagem: null
    }
    this.setState({ erro })
  }

  render() {
 
    const conteudoModal =
      <TextField
        autoFocus
        margin="dense"
        label="CPF do Cliente"
        type="text"
        name="cpf"
        fullWidth
        onChange={this.onChange}
        onKeyPress={this.formatar}
      />

    return <>
      <Erro aberto={this.state.erro.visualizacao} mensagem={this.state.erro.mensagem} fecharErro={this.fecharErro} />
      <Modal fecharModal={this.fechar} aberto={this.state.aberto} titulo="Insira o CPF do Cliente" conteudo={conteudoModal}
        descricao="Caso o cliente não possa CPF, apenas clique em 'Iniciar Venda'" onClick={this.onClick} botao='Iniciar Venda'
      />
    </>
  }
}


export default withRouter(Cliente);
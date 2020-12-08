import React, { Component } from 'react';
import Modal from '../Genericos/Modal'
import ProdutoActions from '../../Gerenciamento de Estados/Actions/ProdutoActions';
import ProdutoStore from '../../Gerenciamento de Estados/Stores/ProdutoStore';
import ModalStore from '../../Gerenciamento de Estados/Stores/ModalStore';
import TextField from '@material-ui/core/TextField';
import Erro from '../Genericos/Erro';

export default class InserirProduto extends Component {

  constructor(props) {
    super(props);
    this.state = {
      aberto: false,
      produto: {
        quantidade: 0,
        codigoDeBarras: 0
      },
      erro: {
        visualizacao: false,
        mensagem: null
      }
    };
  }

  componentDidMount() {
    ProdutoStore.on('DISPONIBILIDADE', this.fechar);
    ProdutoStore.on('ERRO', this.exibirErro);
    ModalStore.on('INSERIR_PRODUTO', this.abrir);
  }

  componentWillUnmount() {
    ProdutoStore.removeListener('DISPONIBILIDADE', this.fechar);
    ProdutoStore.removeListener('ERRO', this.exibirErro);
    ModalStore.removeListener('INSERIR_PRODUTO', this.abrir);
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
    let produto = this.state.produto;
    produto[name] = value;
    this.setState({ produto });
  }
  
  onClick = () => {
    ProdutoActions.verificarDisponibilidade(this.state.produto);
  }

  exibirErro = () => {
    let erro = {
      visualizacao: true,
      mensagem: ProdutoStore.erro
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
    
    const conteudoModal = <>
      <TextField
        autoFocus
        margin="dense"
        label="Código de Barras"
        type="text"
        name="codigoDeBarras"
        fullWidth
        onChange={this.onChange}
      />
      <TextField
        autoFocus
        margin="dense"
        label="Quantidade"
        type="text"
        name="quantidade"
        fullWidth
        onChange={this.onChange}
      />
      </>

    return <>
    <Erro aberto={this.state.erro.visualizacao} mensagem={this.state.erro.mensagem} fecharErro={this.fecharErro} />
      <Modal fecharModal={this.fechar} aberto={this.state.aberto} titulo="Inserir Produto" conteudo={conteudoModal} 
      descricao="Insira o Código de Barras do Produto" onClick={this.onClick} botao='Inserir Produto' />
    </>
  }
}
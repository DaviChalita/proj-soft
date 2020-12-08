import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import { Avatar } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Tabela from '../Genericos/Tabela';
import CardProduto from '../Genericos/CardProduto';
import InserirProduto from '../Modais/InserirProduto';
import CancelarCompra from '../Modais/CancelarCompra';
import FinalizarCompra from '../Modais/FinalizarCompra';
import ClienteStore from '../../Gerenciamento de Estados/Stores/ClienteStore';
import VendedorStore from '../../Gerenciamento de Estados/Stores/VendedorStore';
import ProdutoStore from '../../Gerenciamento de Estados/Stores/ProdutoStore';
import ModalActions from '../../Gerenciamento de Estados/Actions/ModalActions';
import { Icon } from '../../Estilizacao/icon';
import { BotaoCancelarCompra, BotaoFinalizarCompra, BotaoInserirProduto, venda } from '../../Estilizacao/estilizacao';

export default class Venda extends Component {

    constructor(props) {
        super(props);
        this.state = {
            venda: {
                produtos: [],
                valorTotal: 0,
                cliente: ClienteStore.cliente,
                vendedor: VendedorStore.vendedor.id
            },
            ultimoProduto: null
        }

        this.modal = {
            cancelar: 'CANCELAR_COMPRA',
            inserir: 'INSERIR_PRODUTO',
            finalizar: 'FINALIZAR_COMPRA'
        }
    }

    componentDidMount() {
        ProdutoStore.on('DISPONIBILIDADE', this.adicionarProduto);
        ProdutoStore.on('ITEM_REMOVIDO', this.atualizarValorTotal);
    }

    componentWillUnmount() {
        ProdutoStore.removeListener('DISPONIBILIDADE', this.adicionarProduto);
        ProdutoStore.removeListener('ITEM_REMOVIDO', this.atualizarValorTotal);
    }

    abrirModal = (tipo, evento) => {
        evento.preventDefault();
        ModalActions.abrir(tipo);
    }

    adicionarProduto = () => {
        var produtoAdicionado = ProdutoStore.produto
        produtoAdicionado.item = this.state.venda.produtos.length + 1;
        var produtos = this.state.venda.produtos;
        produtos.unshift(produtoAdicionado);
        this.setState({ produtos, ultimoProduto: ProdutoStore.produto });

        this.atualizarValorTotal();
    }

    atualizarValorTotal = () => {
        var valorTotal = this.state.venda.produtos.map(({ valorTotal }) => valorTotal).reduce((sum, i) => sum + i, 0);

        let venda = this.state.venda;
        venda.valorTotal = valorTotal;

        this.setState({ venda })
    }

    render() {

        return <>
            <CssBaseline />
            <CancelarCompra />
            <InserirProduto />
            <FinalizarCompra venda={this.state.venda} />
            <AppBar position="relative" style={{ backgroundColor: '#b71c1c', color: '#fff' }}>
                <Toolbar style={{display: 'block', height: 80 + 'px'}}>
                    <div style={{marginTop: 10 +'px'}}>
                    <Icon.CarrinhoDeCompras style={venda.espacamentoIcon} />
                    <Typography variant="h5" color="inherit" display="inline">
                        Bem vindo, {this.state.venda.cliente != null ? this.state.venda.cliente.nome : 'Cliente' }!
                    </Typography>
                    </div>
                    <Typography variant="subtitle1" color="inherit" style={{marginLeft: 33 + 'px'}}>
                        Cliente {
                        this.state.venda.cliente !== null ? this.state.venda.cliente.preferencial ? 'Preferencial' : 'Convencional' : 'Convencional' }
                    </Typography>
                    <div style={venda.dadosDoVendedor}>
                        <Avatar style={venda.iconeVendedor}>
                            <Icon.Usuario />
                        </Avatar>
                    </div>
                </Toolbar>
            </AppBar>

            <div style={venda.grid}>
                <Grid container spacing={3}>
                    <Grid item xs={6}>
                        {
                            this.state.ultimoProduto !== null ? <CardProduto produto={this.state.ultimoProduto} /> : null
                        }
                    </Grid>
                    <Grid item xs={6}>
                        <Tabela produtos={this.state.venda.produtos} />
                    </Grid>
                    <Grid item xs={2}>
                        <BotaoCancelarCompra variant="contained" style={venda.botao} onClick={this.abrirModal.bind(this, this.modal.cancelar)}> Cancelar Compra </BotaoCancelarCompra>
                    </Grid>
                    <Grid item xs={2}>
                        <BotaoInserirProduto variant="contained" style={venda.botao} onClick={this.abrirModal.bind(this, this.modal.inserir)}> Inserir Produto </BotaoInserirProduto>
                    </Grid>
                    <Grid item xs={2}>
                        <BotaoFinalizarCompra variant="contained" style={venda.botao} onClick={this.abrirModal.bind(this, this.modal.finalizar)}> Finalizar Compra </BotaoFinalizarCompra>
                    </Grid>
                    <Grid item xs={4}>
                    </Grid>
                    <Grid item xs={2}>
                        <Paper style={venda.paper}>
                            <Typography variant="h6" style={venda.valorTotal}> Valor Total: </Typography>
                            <Typography variant="h6" style={venda.valor}> {parseFloat(this.state.venda.valorTotal).toFixed(2)} </Typography>
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        </>
    }
}

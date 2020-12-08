import React, { Component } from "react";
import clsx from "clsx";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import { Icon } from '../../Estilizacao/icon';
import { selecionadosTabela, tabela } from '../../Estilizacao/estilizacao'
import ProdutoActions from "../../Gerenciamento de Estados/Actions/ProdutoActions";

const colunas = [
    { id: "item", numeric: false, disablePadding: false, label: "Nº Item" },
    { id: "nome", numeric: false, disablePadding: true, label: "Nome do Produto" },
    { id: "valorUnitario", numeric: true, disablePadding: false, label: "Valor Unitário" },
    { id: "quantidade", numeric: true, disablePadding: false, label: "Quantidade" },
    { id: "valorTotal", numeric: true, disablePadding: false, label: "Valor Total" }
];

function TabelaCabecalho(props) {
    const { selecionarTodosNoClick, selecionados, quantidadeDeLinhas } = props;

    return (
        <TableHead>
            <TableRow>
                <TableCell padding="checkbox">
                    <Checkbox
                        indeterminate={selecionados > 0 && selecionados < quantidadeDeLinhas}
                        checked={quantidadeDeLinhas > 0 && selecionados === quantidadeDeLinhas}
                        onChange={selecionarTodosNoClick}
                        inputProps={{ "aria-label": "select all desserts" }}
                    />
                </TableCell>
                {colunas.map((coluna) => (
                    <TableCell key={coluna.id} align={coluna.numeric ? "right" : "left"} padding={coluna.disablePadding ? "none" : "default"} >
                        {coluna.label}
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    );
}


const TabelaToolbar = (props) => {
    const classes = selecionadosTabela();
    const { selecionados } = props;

    return (
        <Toolbar className={clsx(classes.root, { [classes.highlight]: selecionados > 0 })}>
            {selecionados > 0 ? (
                <Typography className={classes.title} color="inherit" variant="subtitle1" component="div" >
                    {selecionados} selecionados
                </Typography>
            ) : (
                    <Typography className={classes.title} variant="h6" id="tableTitle" component="div" >
                        Produtos
                    </Typography>
                )}

            {selecionados > 0 ? (
                <Tooltip title="Delete">
                    <IconButton aria-label="delete" onClick={props.remover}>
                        <Icon.Lixeira />
                    </IconButton>
                </Tooltip>
            ) : null}
        </Toolbar>
    );
};


export default class Tabela extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selecionado: [],
            pagina: 0,
            linhasPorPagina: 5,
            produtos: this.props.produtos,
            linhasVazias: 0
        }
    }

    selecionarTodosComClick = (event) => {
        if (event.target.checked) {
            const selecionados = this.state.produtos.map((n) => n.nome);
            this.setState({ selecionado: selecionados })
            return;
        }
        this.setState({ selecionado: [] });
    };

    selecionarItem = (event, nome) => {
        const selecionadoIndex = this.state.selecionado.indexOf(nome);
        let selecionados = [];

        if (selecionadoIndex === -1) {
            selecionados = selecionados.concat(this.state.selecionado, nome);
        } else if (selecionadoIndex === 0) {
            selecionados = selecionados.concat(this.state.selecionado.slice(1));
        } else if (selecionadoIndex === this.state.selecionado.length - 1) {
            selecionados = selecionados.concat(this.state.selecionado.slice(0, -1));
        } else if (selecionadoIndex > 0) {
            selecionados = selecionados.concat(
                this.state.selecionado.slice(0, selecionadoIndex),
                this.state.selecionado.slice(selecionadoIndex + 1)
            );
        }
        
        this.setState({ selecionado: selecionados })
    };
    
    remover = () => {
        var produtos = this.state.produtos

        this.state.selecionado.forEach(selecionado => {
            produtos.forEach(produto => {
                if (produto.nome == selecionado) {
                    produtos.splice(produtos.indexOf(produto), 1);
                }
            })
        });

        this.setState({ selecionado: [] })
        this.setState({ produtos })
        ProdutoActions.remover();
    }

    mudarPagina = (event, novaPagina) => {
        this.setState({ pagina: novaPagina })
    };

    mudarLinhasPorPagina = (event) => {
        var linhasPorPagina = parseInt(event.target.value, 10);
        this.setState({ linhasPorPagina })
        this.setState({ pagina: 0 })
    };

    render() {

        const linhasVazias = this.state.linhasPorPagina -
        Math.min(this.state.linhasPorPagina, this.state.produtos.length - this.state.pagina * this.state.linhasPorPagina);

        return (
            <div style={tabela.tamanho}>
                <Paper style={tabela.paper}>
                    <TabelaToolbar selecionados={this.state.selecionado.length} remover={this.remover} />
                    <TableContainer>
                        <Table style={tabela.table} aria-labelledby="tableTitle" size="medium" aria-label="enhanced table" >
                            <TabelaCabecalho selecionados={this.state.selecionado.length} quantidadeDeLinhas={this.state.produtos.length}
                                selecionarTodosNoClick={this.selecionarTodosComClick} />
                            <TableBody>
                                {
                                    this.state.produtos
                                        .slice(this.state.pagina * this.state.linhasPorPagina, this.state.pagina * this.state.linhasPorPagina + this.state.linhasPorPagina)
                                        .map((linha, index) => {
                                            const itemEstaSelecionado = this.state.selecionado.indexOf(linha.nome) !== -1;
                                            const labelId = `enhanced-table-checkbox-${index}`;
                                            return (
                                                <TableRow hover onClick={(event) => this.selecionarItem(event, linha.nome)} role="checkbox"
                                                    aria-checked={itemEstaSelecionado} tabIndex={-1} key={linha.id} selected={itemEstaSelecionado} >
                                                    <TableCell padding="checkbox">
                                                        <Checkbox checked={itemEstaSelecionado} inputProps={{ "aria-labelledby": labelId }} />
                                                    </TableCell>
                                                    <TableCell align="left" id={labelId} >{linha.item}</TableCell>
                                                    <TableCell component="th" scope="row" padding="none">{linha.nome}</TableCell>
                                                    <TableCell align="right">{linha.preco}</TableCell>
                                                    <TableCell align="right">{linha.quantidade}</TableCell>
                                                    <TableCell align="right">{parseFloat(linha.valorTotal).toFixed(2)}</TableCell>
                                                </TableRow>
                                            );
                                        })
                                }
                                {
                                    linhasVazias > 0 && 
                                        <TableRow style={{ height: 53 * linhasVazias }}>
                                            <TableCell colSpan={6} />
                                        </TableRow>
                                    
                                }
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <TablePagination rowsPerPageOptions={[10]} component="div" count={this.state.produtos.length} 
                        rowsPerPage={this.state.linhasPorPagina} page={this.state.pagina} onChangePage={this.mudarPagina} 
                        onChangeRowsPerPage={this.mudarLinhasPorPagina} />
                </Paper>
            </div>
        );
    }
}

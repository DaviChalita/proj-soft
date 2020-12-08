import { makeStyles, withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const cor = {
    primaria: '#b71c1c',
    primariaEscura: '#7f0000',
    secundaria: '#fdd835',
    branca: '#fff',
    preta: '#000'
};

export const BotaoPadrao = withStyles({
    root: {
        color: cor.branca,
        backgroundColor: cor.primaria,
        '&:hover': {
            backgroundColor: cor.primariaEscura,
            borderColor: '#0062cc',
            boxShadow: 'none',
        },
    }
})(Button);

export const BotaoCancelarCompra = withStyles({
    root: {
        color: cor.branca,
        backgroundColor: "#dc3545",
        '&:hover': {
            backgroundColor: cor.primariaEscura,
            borderColor: '#0062cc',
            boxShadow: 'none',
        },
    }
})(Button);

export const BotaoRemoverProduto = withStyles({
    root: {
        color: cor.branca,
        backgroundColor: "#007bff",
        '&:hover': {
            backgroundColor: "#0058b7",
            borderColor: '#0062cc',
            boxShadow: 'none',
        },
    }
})(Button);

export const BotaoFinalizarCompra = withStyles({
    root: {
        color: cor.branca,
        backgroundColor: "#28a745",
        '&:hover': {
            backgroundColor: "#1a672c",
            borderColor: '#0062cc',
            boxShadow: 'none',
        },
    }
})(Button);

export const BotaoInserirProduto = withStyles({
    root: {
        color: cor.branca,
        backgroundColor: "#ffc107",
        '&:hover': {
            backgroundColor: "#b98b00",
            borderColor: '#0062cc',
            boxShadow: 'none',
        },
    }
})(Button);

export const tabela = {
    tamanho: {
width: 100 + '%'
    },
    paper: {
        width: "100%",
        marginBottom: 20 + 'px'
      },
    table: {
      minWidth: 750
    }
}

export const selecionadosTabela = makeStyles(() => ({
    root: {
        paddingLeft: 20 + "px",
        paddingRight: 10 + "px"
    },
    highlight: {
        color: '#d32f2f',
        backgroundColor: '#ffd6d6'
    },
    title: {
        flex: "1 1 100%"
    }
}));

export const colunaTabela = withStyles(() => ({
    head: {
        backgroundColor: cor.secundaria,
        color: cor.preta,
    },
    body: {
        fontSize: 14,
    },
}));


export const login = {
    paper: {
        marginTop: 80 + 'px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: 10 + 'px',
        color: cor.branca,
        backgroundColor: cor.primaria
    },
    form: {
        width: '100%',
        marginTop: 10 + 'px',
    },
}

export const venda = {
    iconeVendedor: {
        color: cor.primaria,
        backgroundColor: cor.branca
    },
    dadosDoVendedor: {
        position: 'absolute',
        right: 10,
        top: 20
    },
    espacamentoIcon: {
        marginRight: 10
    },
    grid: {
        marginTop: 100,
        flexGrow: 1, 
        width: 100 + '%', 
        padding: 20
    },
    paper: {
        padding: 20
    },
    valorTotal: {
        display: 'inline'
    },
    valor: {
        fontWeight: 'bold',
        float: 'right'
    },
    botao: {
        padding: 20 + 'px ' + 30 + 'px'
    }
};


export const modal = {
    acoes: {
        margin: 0,
        padding: 10 + 'px'
    },
    conteudo: {
        padding: 20 + 'px'
    },
    botao: {
        color: cor.branca,
        backgroundColor: cor.primaria,
    }
}

export const produto = {
    titulo: {
        fontSize: 14,
        marginBottom: 15
      },
      dado: {
          marginTop: 15,
        marginBottom: 10,
      },
}

export const dashboardGerente = makeStyles((theme) => ({
    dashboard: {
        display: 'flex',
    },
    toolbar: {
        paddingRight: 24,
    },
    appBar: {
        marginLeft: 240,
        width: `calc(100% - ${240}px)`,
    },
    title: {
        flexGrow: 1,
        marginLeft: 200,
    },
    drawerPaper: {
        position: 'relative',
        whiteSpace: 'nowrap',
        width: 240,
    },
    content: {
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto',
    },
    paper: {
        padding: 20 + 'px',
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
    },
}));
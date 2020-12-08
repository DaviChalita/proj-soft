import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { ROTAS } from './Config/routes';
import LoginGerente from './Componentes/Paginas/LoginGerente';
import LoginVendedor from './Componentes/Paginas/LoginVendedor';
import Venda from './Componentes/Paginas/Venda';
import DashboardGerente from './Componentes/Paginas/DashboardGerente';
import GerenteStore from './Gerenciamento de Estados/Stores/GerenteStore';
import VendedorStore from './Gerenciamento de Estados/Stores/VendedorStore';
import ServicoDeInicializar from './Servicos/ServicoDeInicializar';

const PrivateRouteGerente = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props =>
        gerenteAutenticado() ?
            <Component {...props} />
            : <Redirect to={ROTAS.INICIAR_SISTEMA} />
    }
    />
);


const PrivateRouteVendedor = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props =>
        vendedorAutenticado() ?
            <Component {...props} />
            : <Redirect to={ROTAS.INICIAR_SISTEMA} />
    }
    />
);


function gerenteAutenticado() {
    if (GerenteStore.gerente === null) {
        return false;
    } else {
        return true;
    }
}

function vendedorAutenticado() {
    if (VendedorStore.vendedor === null) {
        return false;
    } else {
        return true;
    }
}

export default class App extends Component {

    constructor(props) {
        super(props);
    };

    componentDidMount() {
        ServicoDeInicializar.inicializar();
    }

    render() {
        return <>
            <BrowserRouter>
                <Switch >
                    <Route path={ROTAS.INICIAR_SISTEMA} exact component={LoginGerente} />
                    <PrivateRouteGerente path={ROTAS.DASHBOARD_GERENTE} exact component={DashboardGerente} />
                    <PrivateRouteGerente path={ROTAS.LOGIN_VENDEDOR} exact component={LoginVendedor} />
                    <PrivateRouteVendedor path={ROTAS.VENDA} exact component={Venda} />
                </Switch>
            </BrowserRouter>
        </>;
    }
};
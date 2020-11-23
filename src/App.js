import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { routes } from './Config/routes';
import LoginGerente from './Componentes/Paginas/LoginGerente';
import LoginVendedor from './Componentes/Paginas/LoginVendedor';
import Venda from './Componentes/Paginas/Venda';
import DashboardGerente from './Componentes/Paginas/DashboardGerente';
import GerenteStore from './Gerenciamento de Estados/Stores/GerenteStore';
import VendedorStore from './Gerenciamento de Estados/Stores/VendedorStore';

const PrivateRouteGerente = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props =>
        gerenteAutenticado() ?
            <Component {...props} />
            : <Redirect to={routes.INICIAR_SISTEMA} />
    }
    />
);


const PrivateRouteVendedor = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props =>
        vendedorAutenticado() ?
            <Component {...props} />
            : <Redirect to={routes.INICIAR_SISTEMA} />
    }
    />
);


function gerenteAutenticado() {
    return GerenteStore.gerenteLogado;
}

function vendedorAutenticado() {
    return VendedorStore.vendedorLogado;
}

export default function App() {
    return <>
        <BrowserRouter>
            <Switch >
                <Route path={routes.INICIAR_SISTEMA} exact component={LoginGerente} />
                <PrivateRouteGerente path={routes.DASHBOARD_GERENTE} exact component={DashboardGerente} />
                <PrivateRouteGerente path={routes.LOGIN_VENDEDOR} exact component={LoginVendedor} />
                <PrivateRouteVendedor path={routes.VENDA} exact component={Venda} />
            </Switch>
        </BrowserRouter>
    </>;
};
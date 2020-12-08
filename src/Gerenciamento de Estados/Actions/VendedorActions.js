import Dispatcher from '../Dispatcher/Dispatcher'
import ServicoDeVendedor from '../../Servicos/ServicoDeVendedor';

class VendedorActions {

    login(usuario) {
        ServicoDeVendedor.autenticar(usuario).then(
            sucesso => {
                Dispatcher.dispatch({
                    actionType: 'LOGIN_VENDEDOR',
                    value: sucesso.data
                });
            },
            erro => {
                Dispatcher.dispatch({
                    actionType: 'LOGIN_VENDEDOR_ERRO',
                    value:  erro.data
                });
            }
        )
    }
}

export default new VendedorActions();
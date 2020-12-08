import Dispatcher from '../Dispatcher/Dispatcher'
import ServicoDeGerente from '../../Servicos/ServicoDeGerente';

class GerenteActions {

    login(usuario) {
        ServicoDeGerente.autenticar(usuario).then(
            sucesso => {
                Dispatcher.dispatch({
                    actionType: 'LOGIN_GERENTE',
                    value: sucesso.data
                });
            },
            erro => {
                Dispatcher.dispatch({
                    actionType: 'LOGIN_GERENTE_ERRO',
                    value:  erro.data
                });
            }
        )
    };
}

export default new GerenteActions();
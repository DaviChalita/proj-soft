import Dispatcher from '../Dispatcher/Dispatcher'
import ServicoDeGerente from '../../Servicos/ServicoDeGerente';

class GerenteActions {

    login(usuario) {
        ServicoDeGerente.autenticar(usuario).then(
            resp => {
                Dispatcher.dispatch({
                    actionType: 'LOGIN_GERENTE',
                    value: resp
                });
            },
            erro => {
                Dispatcher.dispatch({
                    actionType: 'LOGIN_GERENTE_ERRO',
                    value:  {
                        status:  'ERRO',
                        mensagem: erro.response.data
                    }
                });
            }
        )
    };
}

export default new GerenteActions();
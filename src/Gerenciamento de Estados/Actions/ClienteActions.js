import Dispatcher from '../Dispatcher/Dispatcher'
import ServicoDeCliente from '../../Servicos/ServicoDeCliente';

class ClienteActions {

    verificarCPF(cpf) {
        ServicoDeCliente.verificarCPF(cpf).then(
            sucesso => {
                Dispatcher.dispatch({
                    actionType: 'CPF_EXISTE',
                    value: sucesso.data
                });
            },
            erro => {
                Dispatcher.dispatch({
                    actionType: 'CPF_ERRO',
                    value:  erro.data
            })
            }
        )
    }
}

export default new ClienteActions();
import Dispatcher from '../Dispatcher/Dispatcher'
import ServicoDeVenda from '../../Servicos/ServicoDeVenda'
;
class VendaActions {

    cadastrar(venda) {
        ServicoDeVenda.cadastrar(venda).then(
            sucesso => {
                Dispatcher.dispatch({
                    actionType: 'VENDA_CRIADA',
                    value: sucesso.data
                });
            },
            erro => {
                Dispatcher.dispatch({
                    actionType: 'ERRO_VENDA',
                    value: erro.data
                });
            }
        )
    }
}

export default new VendaActions();
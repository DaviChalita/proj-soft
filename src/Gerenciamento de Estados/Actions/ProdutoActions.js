import Dispatcher from '../Dispatcher/Dispatcher'
import ServicoDeProduto from '../../Servicos/ServicoDeProduto';

class ProdutoActions {

    verificarDisponibilidade(produto) {
        ServicoDeProduto.verificarDisponibilidade(produto).then(
            sucesso => {
                Dispatcher.dispatch({
                    actionType: 'DISPONIBILIDADE',
                    value: sucesso
                });
            },
            erro => {
                Dispatcher.dispatch({
                    actionType: 'DISPONIBILIDADE_ERRO',
                    value:  erro
                });
            }
        )
    };

    remover() {
        Dispatcher.dispatch({
            actionType: 'ITEM_REMOVIDO',
        })
    }
}

export default new ProdutoActions();
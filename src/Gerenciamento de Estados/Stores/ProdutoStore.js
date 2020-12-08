import Dispatcher from '../Dispatcher/Dispatcher'
import { EventEmitter } from 'events';

class ProdutoStore extends EventEmitter { 

    constructor() {
        super();
        this.dispatchToken = Dispatcher.register(this.dispatcherCallBack.bind(this));
    };

    erro = null;
    produto = null;

    dispatcherCallBack(action) {
        switch (action.actionType) {
            case 'DISPONIBILIDADE':
                this.produto = action.value
                this.emit('DISPONIBILIDADE');
                break;
            case 'DISPONIBILIDADE_ERRO':
                this.erro = action.value;
                this.emit('ERRO');
                break;
            case 'ITEM_REMOVIDO':
                this.emit('ITEM_REMOVIDO');
                break;
            default: break;
        };
    };
}

export default new ProdutoStore();
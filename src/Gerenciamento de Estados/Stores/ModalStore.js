import Dispatcher from '../Dispatcher/Dispatcher'
import { EventEmitter } from 'events';

class ModalStore extends EventEmitter {

    constructor() {
        super();
        this.dispatchToken = Dispatcher.register(this.dispatcherCallBack.bind(this));
    };

    dispatcherCallBack(action) {
        switch (action.actionType) {
            case 'CANCELAR_COMPRA':
                this.emit('CANCELAR_COMPRA');
                break;
            case 'INSERIR_PRODUTO':
                this.emit('INSERIR_PRODUTO');
                break;
            case 'FINALIZAR_COMPRA':
                this.emit('FINALIZAR_COMPRA');
                break;
            default: break;
        };
    };
}

export default new ModalStore();
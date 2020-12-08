import Dispatcher from '../Dispatcher/Dispatcher'
import { EventEmitter } from 'events';

class VendaStore extends EventEmitter { 


    constructor() {
        super();
        this.dispatchToken = Dispatcher.register(this.dispatcherCallBack.bind(this));
    };

    erro = null;

    dispatcherCallBack(action) {
        switch (action.actionType) {
                case 'VENDA_CRIADA':
                    this.emit('CHANGE');
                    break;
                case 'ERRO_VENDA':
                    this.erro = action.value;
                    this.emit('ERRO');
                    break;
            default: break;
        };
    };
}

export default new VendaStore();
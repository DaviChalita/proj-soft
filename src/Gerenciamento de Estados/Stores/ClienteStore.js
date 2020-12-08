import Dispatcher from '../Dispatcher/Dispatcher'
import { EventEmitter } from 'events';
import Cliente from '../../Modelos/Cliente'

class ClienteStore extends EventEmitter { 

    constructor() {
        super();
        this.dispatchToken = Dispatcher.register(this.dispatcherCallBack.bind(this));
    };

    erro = null;

    cliente = null;

    dispatcherCallBack(action) {
        switch (action.actionType) {
            case 'CPF_EXISTE':
                this.cliente = new Cliente(action.value.cpf, action.value.nome, action.value.ehPreferencial);
                this.emit('CPF_EXISTE');
                break;
            case 'CPF_ERRO':
                this.erro = action.value;
                this.emit('CPF_ERRO');
                break;
            default: break;
        };
    };
}

export default new ClienteStore();
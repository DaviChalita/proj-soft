import Dispatcher from '../Dispatcher/Dispatcher'
import { EventEmitter } from 'events';
import Vendedor from '../../Modelos/Vendedor';

class VendedorStore extends EventEmitter { 


    constructor() {
        super();
        this.dispatchToken = Dispatcher.register(this.dispatcherCallBack.bind(this));
    };

    erro = null

    vendedor = null;

    dispatcherCallBack(action) {
        switch (action.actionType) {
            case 'LOGIN_VENDEDOR':
                this.vendedor = new Vendedor(action.value.identificador);
                this.emit('LOGIN');
                break;
            case 'LOGIN_VENDEDOR_ERRO':
                this.erro = action.value;
                this.emit('ERRO');
                break;
            default: break;
        };
    };
}

export default new VendedorStore();
import Dispatcher from '../Dispatcher/Dispatcher'
import { EventEmitter } from 'events';
import Gerente from '../../Modelos/Gerente';

class GerenteStore extends EventEmitter { 

    constructor() {
        super();
        this.dispatchToken = Dispatcher.register(this.dispatcherCallBack.bind(this));
    };

    erro = null;

    gerente = null;

    dispatcherCallBack(action) {
        switch (action.actionType) {
            case 'LOGIN_GERENTE':
                this.gerente = new Gerente(action.value.identificador);
                this.emit('LOGIN');
                break;
            case 'LOGIN_GERENTE_ERRO':
                this.erro = action.value;
                this.emit('ERRO');
                break;
            default: break;
        };
    };
}

export default new GerenteStore();
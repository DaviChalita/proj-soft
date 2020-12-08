import Dispatcher from '../Dispatcher/Dispatcher'

class ModalActions {
    abrir(tipo) {
        Dispatcher.dispatch({
            actionType: tipo,
        });
    }
}

export default new ModalActions();
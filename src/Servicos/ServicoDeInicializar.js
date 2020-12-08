import Request from './Request';
import { ROTAS } from '../Config/routes';

class ServicoDeInicializar {
    
    async inicializar() {

        return await Request.get(ROTAS.API.inicializar);
        
    };
}

export default new ServicoDeInicializar();
import Request from './Request';
import { ROTAS } from '../Config/routes';

class ServicoDeGerente {
    
    async autenticar(usuario) {

        // let resultado = await Request.post(ROTAS.API.vendedor.autenticar, usuario);

        // return resultado;

        return true;
    };
}

export default new ServicoDeGerente();
import Request from './Request';
import { ROTAS } from '../Config/routes';

class ServicoDeCliente {
    
    async verificarCPF(cpf) {

        return await Request.get(ROTAS.API.cliente.verificarCpf + cpf);
        
    };
}

export default new ServicoDeCliente();
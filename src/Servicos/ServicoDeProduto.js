import Request from './Request';
import { ROTAS } from '../Config/routes';
import Produto from '../Modelos/Produto'

class ServicoDeVendedor {
    
    async verificarDisponibilidade(produto) {
        
        try {
            let resultado = await Request.get(ROTAS.API.produto.disponibilidade + produto.codigoDeBarras);
            if (resultado.data.quantidade >= produto.quantidade ) {
                let resposta = await this.consultarPorId(produto.codigoDeBarras);
                return new Produto(resposta.data.codigoDeBarras, resposta.data.nome, resposta.data.preco, produto.quantidade)
            } else {
                if (resultado.data.quantidade === 1) {
                    return Promise.reject('Existe somente 1 unidade desse produto disponível em estoque.')
                } else {
                    return Promise.reject(`Existe somente ${resultado.data.quantidade} unidades desse produto disponíveis em estoque.`)
                }
            }
        } catch(erro) {
            return erro
        }
    };

    async consultarPorId(codigoDeBarras) {
       
        return await Request.get(ROTAS.API.produto.consultarPorId + codigoDeBarras)
    }
}

export default new ServicoDeVendedor();
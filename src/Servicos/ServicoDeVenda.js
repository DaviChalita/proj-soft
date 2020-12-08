import Request from './Request';
import { ROTAS } from '../Config/routes';
import { FormaDePagamento } from '../Modelos/FormaDePagamento';

class ServicoDeVenda {
    
    async cadastrar(venda) {

        let pagamento = null;

        switch(venda.formaDePagamento.tipo) {
            case (FormaDePagamento.PIX):
                pagamento = `pix.chave.${venda.formaDePagamento.numero}`
                break;
            case (FormaDePagamento.CARTAO_CREDITO): 
                pagamento = `cartao.credito.${venda.formaDePagamento.numero}`
                break;
            case (FormaDePagamento.CARTAO_DEBITO): 
                pagamento = `cartao.debito.${venda.formaDePagamento.numero}`
                break;
            case (FormaDePagamento.DINHEIRO): 
                pagamento = `dinheiro`
                break;
        }

        return await Request.post(ROTAS.API.venda.cadastrar + `?cliente=${venda.cliente}&formapagamento=${pagamento}&vendedor=${venda.vendedor}`, venda.produtos);

    };
}

export default new ServicoDeVenda();
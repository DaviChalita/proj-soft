package projetoSoftware.com.mercado.controlador;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import projetoSoftware.com.mercado.modelo.Cliente;
import projetoSoftware.com.mercado.servico.ClienteServico;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/cliente")
public class ClienteControlador {
    @Autowired
    ClienteServico clienteServico;
    @PostMapping("/cadastro")
    public ResponseEntity cadastrar(@RequestBody Cliente cliente){
        System.out.println("ClienteControlador :: cadastrar :: Entrou cliente" + cliente.toString());
        Cliente clienteGerado = clienteServico.cadastrar(cliente);
        return new ResponseEntity<Cliente>(clienteGerado, HttpStatus.OK);
    }
    @GetMapping("/identificar")
    public ResponseEntity identificar(@RequestParam String cpf){
        Cliente cliente = clienteServico.confirmarIdentificacao(cpf);
        if (cliente != null){
        return new ResponseEntity<Cliente>(cliente,HttpStatus.OK);
        }else{
            return new ResponseEntity<String>("Cliente não encontrado", HttpStatus.NOT_FOUND);
        }
    }
    @PostMapping("/adicionarPontos")
    public ResponseEntity<Cliente> adicionarPontos(@RequestParam String cpf, @RequestParam String pontos){
        System.out.println("ClienteControlador :: reclamacaoCliente :: Entrou cliente" );
        Cliente cliente = clienteServico.adicionarPontos(cpf, Integer.parseInt(pontos));
        return new ResponseEntity<Cliente>(cliente, HttpStatus.OK);
    }
    @PostMapping("/trocarPontos")
    public ResponseEntity<String> trocarPontos(@RequestParam String cpf, @RequestParam String pontos){
        System.out.println("ClienteControlador :: reclamacaoCliente :: Entrou cliente" );
        boolean resposta = clienteServico.trocarPontos(cpf, Integer.parseInt(pontos));
        if (resposta) {
            return new ResponseEntity<String>("Pontos trocados com sucesso", HttpStatus.OK);
        } else {
            return new ResponseEntity<String>("Erro ao trocar os pontos. Verifique se tem pontos suficientes", HttpStatus.BAD_REQUEST);
        }
    }

    @PostMapping("/reclamacao")
    public void reclamacaoCliente(@RequestBody String reclamacao, @RequestHeader String cpf) {
        System.out.println("ClienteControlador :: reclamacaoCliente :: Entrou cliente");
//        clienteServico.registraReclamacao(cpf, reclamacao);
    }
}

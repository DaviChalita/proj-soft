package projetoSoftware.com.mercado.controlador;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import projetoSoftware.com.mercado.modelo.Usuario;
import projetoSoftware.com.mercado.modelo.Venda;
import projetoSoftware.com.mercado.modelo.Vendedor;
import projetoSoftware.com.mercado.servico.VendedorServico;
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/vendedor")
@RestController
public class VendedorControlador {

    @Autowired
    VendedorServico vendedorServico;

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody Vendedor vendedor) {
        System.out.println("VendedorController :: login :: Tentando autenticar vendedor ");
        Usuario vendedorAuth = vendedorServico.login(vendedor.getUsuario(), vendedor.getSenha());
        vendedor.setSenha("");
        if (vendedorAuth != null) {
            return new ResponseEntity<Usuario>(vendedorAuth, HttpStatus.OK);
        }
        return new ResponseEntity<String>("Não foi possivel autenticar vendedor", HttpStatus.UNAUTHORIZED);

    }

}

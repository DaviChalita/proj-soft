package projetoSoftware.com.mercado.modelo;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import projetoSoftware.com.mercado.enumerado.statusVenda;

import javax.persistence.*;
import java.util.Date;

@Data
@Entity
@Builder
@Table(name = "venda")
@AllArgsConstructor
@NoArgsConstructor
public class Venda {
    @Column(name = "identificador")
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Integer identificador;

    @Column(name = "vendedor_id")
    private String vendedor;

    @Column(name = "cliente_id")
    private String cliente;

    @Column(name = "formaPagamento")
    private String formaPagamento;

    @Column(name = "totalAPagar")
    private float totalAPagar;

    @Column(name = "data")
    private Date data;

}
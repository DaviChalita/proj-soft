import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { produto } from '../../Estilizacao/estilizacao'

export default function CardProduto(props) {

  return (
    <Card>
      <CardContent>
        <Typography style={produto.titulo} color="textSecondary" gutterBottom>
          Último produto a ser batido
        </Typography>
        <Typography variant="h5" component="h2">
           Nome: {
           props.produto.nome.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
           }
        </Typography>
        <Typography style={produto.dado} color="textSecondary">
           Preço: {props.produto.preco}
        </Typography>
        <Typography style={produto.dado} color="textSecondary">
          Código de Barras: {props.produto.codigoDeBarras}
        </Typography>
      </CardContent>
    </Card>
  );
}
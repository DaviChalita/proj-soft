import {BotaoPadrao} from '../../Estilizacao/estilizacao'

export default function Botao(props) {

    return(
        <BotaoPadrao type={props.type} fullWidth variant="contained" onClick={props.onClick} > {props.texto} </BotaoPadrao>
    )
}
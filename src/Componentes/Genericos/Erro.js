import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

function Alert(props) {
  return <MuiAlert elevation={10} variant="filled" {...props} />;
}

export default function Erro(props) {

    return <>
      <Snackbar open={props.aberto} autoHideDuration={6000} onClose={props.fecharErro}>
        <Alert onClose={props.fecharErro} severity="error">
          {props.mensagem}
        </Alert>
      </Snackbar>
    </>
}

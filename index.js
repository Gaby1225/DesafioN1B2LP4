const express = require('express');
const app = express();
const port = 8090;

app.get('/produtorio/:m/:n/:i', (req, res) => {
    //código e funções aqui
    var ret = "";
    if (parseInt(req.params.m) > parseInt(req.params.n)) {
        ret = 'Valor mínimo maior que o máximo!';
    }
    else if (req.params.i == 'true') {
        ret = Iterativo(parseInt(req.params.m), parseInt(req.params.n));
    }
    else if (req.params.i == 'false') {
        ret = Recursivo(parseInt(req.params.m), parseInt(req.params.n));
    }
    else {
        ret = 'azedou.com';
    }

    res.json({ retorno: ret });
});

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});

function Iterativo(min, max) {
    var a = 1;
    for (i = min; i <= max; i++) {
        a = a * (i + (1 / i));
    }
    return a;
}

function Recursivo(m, n) {
    if (m <= n) {
        return ((m + (1 / m)) * Recursivo(m + 1, n));
    }
    return 1;
}
const db = require('mysql');// pede agua

const Connection = db.createConnection({ // busca agua pra de cima beber
        host: 'localhost',
        user: 'root',
        password: '',
        database:'fseletro'
    });


module.exports = Connection;
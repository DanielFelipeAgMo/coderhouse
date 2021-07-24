const mysql = require('mysql')

const conection = mysql.createConnection({
    host: '%',
    user: 'daniel',
    password: 'daniel',
    database: 'las_grenudas'
})

conection.connect((err) => {
    if (err) throw err
    console.log('Conexion exitosa')
})

conection.query('SELECT * from usuarios', (err, rows) => {
    if (err) throw err
    console.log('Los datos de la tabla son estos: ')
    console.log(rows)
})
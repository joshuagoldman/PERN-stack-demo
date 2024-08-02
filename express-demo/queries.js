const Pool = require('pg').Pool
const pool = new Pool({
  user: 'user',
  host: 'postgres-service',
  database: 'reacttest',
  password: 'test',
  port: 5432,
})

const getPerson = (request, response) => {
  let person = request.params.person;
  let query = `SELECT * FROM people where name = '${person}'`;
  pool.query(query, (error, results) => {
    if (error) {
      response.status(500).json(error)
    }
    response.status(200).json(results.rows)
  })
}

module.exports = {
  getPerson
}

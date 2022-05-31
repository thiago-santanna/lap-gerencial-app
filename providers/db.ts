import knex from 'knex'

console.log(process.env.MYSQL_HOST)
export const db = knex({
  client: 'mysql2',
  connection: {
    host: process.env.MYSQL_HOST,
    port: Number(process.env.MYSQL_PORT),
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
  },
})

import { Sequelize } from "sequelize";

const db = new Sequelize('db_todolist_sederhana', 'root', '', {
  dialect: 'mysql',
  host: 'localhost'
})

export default db;

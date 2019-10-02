
const db = require('./_database')

async function dropTables(){
  await db.connect()
  await db.query(`DROP TABLE evento CASCADE`)
  await db.query(`DROP TABLE participante CASCADE`)
  await db.query(`DROP TABLE evento_participante CASCADE`)
  await db.end()

  console.log("Tabelas removidas");
}

dropTables()


/*
CASCADE deleta todas as dependências/relacionamentos da tabela
sem ele, tabelas que contém relacionamentos não são apagadas.

*/
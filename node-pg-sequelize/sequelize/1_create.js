const models = require('./models')

async function create(){
  await models.sequelize.sync({force: true})  // somente para teste , nunca em prod, deleta tudo e cria novamente.
  await models.sequelize.close()

  console.log("Banco sincronizado");
}
create()

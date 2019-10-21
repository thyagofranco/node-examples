const { sequelize } = require('../../../app/models');

module.exports = () => {
	return Promise.all(
		Object.keys(sequelize.models).map(key => {  // percorre todos os models, apagando os dados de cada tabela.
	        return sequelize.models[key].destroy({ truncate: true, force: true,	});
		})
	);
};


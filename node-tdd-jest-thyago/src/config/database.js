require('dotenv').config({
	path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env'
});

module.exports = {
	host: process.env.DB_HOST,
	username: process.env.DB_USER,
	password: process.env.DB_PASS,
	database: process.env.DB_NAME,
	dialect: process.env.DB_DIALECT || 'postgres',
	storage: './src/database/__test/database.sqlite',
	logging: false, // diminui logs
	define: {
		timestamps: true,
		underscored: true, // snake_case nome das tabelas
		underscoredAll: true, // sname_case nome dos campos
	},

};

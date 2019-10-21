
const { User } = require('../models');

const request = require('supertest');
const app = require('../../app');
const truncate = require('../../database/__test/utils/truncate');

describe('Authentication', () => {

	beforeEach(async () => {
		await truncate();
	});

	it('should authenticate with valid credentials', async () => {
		const user = await User.create({
			name: 'Diego',
			email: 'diego@rocketseat.com.br',
			password_hash: '1111111'
		});

		const response = await request(app)
			.post('/sessions')
			.send({
				email: user.email,
				password: '123456'
			});
		
		expect(response.status).toBe(200);
	});


});


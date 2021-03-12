const request = require('supertest');
const server = require('../../api/app');

describe('tests twilio routes', () => {
  beforeAll(() => {});
  describe('POST SMS', () => {
    jest.setTimeout(30000);
    it('should return success message', async () => {
      const res = await request(server).post('/groomers/messages').send({
        to: process.env.TWILIO_TEST_NUMBER,
        body: 'Testing',
      });
      expect(res.status).toBe(201);
    });
  });
});

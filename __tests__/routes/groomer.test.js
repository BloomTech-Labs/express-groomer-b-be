const request = require('supertest');
const server = require('../../api/app');

jest.mock('../../api/groomers/groomerModel');
jest.mock('../../api/middleware/authRequired', () =>
  jest.fn((req, res, next) => next())
);

describe('Test groomer routes', () => {
    beforeAll(() => {});
    
})
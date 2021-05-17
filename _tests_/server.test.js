'use strict';
const server = require('../server.js');
const supertest = require('supertest');
const request = supertest(server.server);

describe('server',()=>{
  it('should get 404 status',async()=>{
    const response = await request.get('/go');
    expect(response.status).toBe(404);
  });
  it('should get a welcome message',async()=>{
    let route = '/';
    const response = await request.get('/');
    expect(response.status).toBe(200);
    expect(response.text).toBe('Welcome to my web App');
  });
  it('should get an error', async()=>{
    const response = await request.get('/bad');
    expect(response.status).toEqual(500);
  });
});


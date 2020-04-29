import * as nock from 'nock';
import request from 'supertest';
import { runSeed } from 'typeorm-seeding';
import { CartItem, Session } from '../../../src/api/models';
import { CreateCartItem, CreateSession } from '../../../src/database/seeds';
import { closeDatabase } from '../../utils/database';
import { BootstrapSettings } from '../utils/bootstrap';
import { prepareServer } from '../utils/server';

describe('/api/cart', () => {
  let cartItem: CartItem;
  let settings: BootstrapSettings;
  let session: Session;

  // -------------------------------------------------------------------------
  // Setup up
  // -------------------------------------------------------------------------

  beforeAll(async () => {
    settings = await prepareServer({ migrate: true });
    session = await runSeed<Session>(CreateSession);
    cartItem = await runSeed<CartItem>(CreateCartItem);
  });

  // -------------------------------------------------------------------------
  // Tear down
  // -------------------------------------------------------------------------

  afterAll(async () => {
    nock.cleanAll();
    await closeDatabase(settings.connection);
  });

  // -------------------------------------------------------------------------
  // Test cases
  // -------------------------------------------------------------------------

  test('GET: / should return a list of cart items', async done => {
    const response = await request(settings.app)
      .get('/api/cart/?sessionId=' + session.id)
      .expect('Content-Type', /json/)
      .expect(200);
      console.log(cartItem);
    expect(response.body.length).toBe(1);
    done();
  });
});

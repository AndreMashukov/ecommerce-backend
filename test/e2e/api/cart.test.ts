import * as nock from 'nock';
import request from 'supertest';
import { runSeed } from 'typeorm-seeding';
import { CartItem } from '../../../src/api/models/CartItem';
import { CreateCartItem } from '../../../src/database/seeds/CreateCartItem';
import { closeDatabase } from '../../utils/database';
import { BootstrapSettings } from '../utils/bootstrap';
import { prepareServer } from '../utils/server';

describe('/api/cart', () => {
  let cartItem: CartItem;
  let settings: BootstrapSettings;

  // -------------------------------------------------------------------------
  // Setup up
  // -------------------------------------------------------------------------

  beforeAll(async () => {
    settings = await prepareServer({ migrate: true });
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
      .get('/api/cart/?fuserId=1')
      .expect('Content-Type', /json/)
      .expect(200);
    console.log(response.body);
    console.log(cartItem);
    expect(response.body.length).toBe(1);
    done();
  });
});

import { Container } from 'typedi';
import { Connection } from 'typeorm';

import { CartItem, Session } from '../../src/api/models';
import { CartService } from '../../src/api/services/CartService';
import {
  closeDatabase,
  createDatabaseConnection,
  migrateDatabase
} from '../utils/database';
import { configureLogger } from '../utils/logger';
import { SessionService } from '../../src/api/services/SessionService';

const PRODUCT = {
  productId: 1426,
  blockId: 4,
  price: 599.0
};

describe('CartService', () => {
  // -------------------------------------------------------------------------
  // Setup up
  // -------------------------------------------------------------------------

  let connection: Connection;
  let session: Session;

  beforeAll(async () => {
    configureLogger();
    connection = await createDatabaseConnection();
  });

  beforeEach(async () => {
    await migrateDatabase(connection);
    // create session
    const sessionService = Container.get<SessionService>(SessionService);
    session = await sessionService.createNewSession();
  });

  // -------------------------------------------------------------------------
  // Tear down
  // -------------------------------------------------------------------------

  afterAll(() => closeDatabase(connection));

  // -------------------------------------------------------------------------
  // Test cases
  // -------------------------------------------------------------------------

  test('should add a new item to the cart', async (done) => {
    const cartItem = new CartItem();
    cartItem.id = 1;
    cartItem.sessionId = session.id;
    cartItem.blockId = PRODUCT.blockId;
    cartItem.productId = PRODUCT.productId;
    cartItem.price = PRODUCT.price;
    cartItem.currency = 'RUB';
    cartItem.quantity = 1;
    const service = Container.get<CartService>(CartService);
    const resultCreate = await service.addCartItem(cartItem);

    expect(resultCreate.productId).toBe(cartItem.productId);
    expect(resultCreate.quantity).toBe(cartItem.quantity);

    const resultFind = await service.findBySessionIdAndProductId(
      session.id,
      1426
    );
    if (resultFind) {
      expect(resultFind.productId).toBe(cartItem.productId);
      expect(resultFind.quantity).toBe(cartItem.quantity);
    } else {
      fail('Could not find cart item');
    }
    done();
  });
});

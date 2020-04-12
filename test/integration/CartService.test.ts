import { Container } from 'typedi';
import { Connection } from 'typeorm';

import { CartItem } from '../../src/api/models/CartItem';
import { CartService } from '../../src/api/services/CartService';
import { closeDatabase, createDatabaseConnection, migrateDatabase } from '../utils/database';
import { configureLogger } from '../utils/logger';

const PRODUCT = {
  productId: 1426,
  blockId: 4,
  price: 599.00,
};

describe('CartService', () => {

    // -------------------------------------------------------------------------
    // Setup up
    // -------------------------------------------------------------------------

    let connection: Connection;
    beforeAll(async () => {
        configureLogger();
        connection = await createDatabaseConnection();
    });
    // SQLite is not compatible with migrations...
    beforeEach(() => migrateDatabase(connection));

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
        cartItem.fuserId = 1;
        cartItem.blockId = PRODUCT.blockId;
        cartItem.productId = PRODUCT.productId;
        cartItem.price = PRODUCT.price;
        cartItem.currency = 'RUB';
        cartItem.quantity = 1;
        const service = Container.get<CartService>(CartService);
        const resultCreate = await service.addCartItem(cartItem);

        expect(resultCreate.productId).toBe(cartItem.productId);
        expect(resultCreate.quantity).toBe(cartItem.quantity);

        const resultFind = await service.findByFuserIdAndProductId(1, 1426);
        if (resultFind) {
            expect(resultFind.productId).toBe(cartItem.productId);
            expect(resultFind.quantity).toBe(cartItem.quantity);
        } else {
            fail('Could not find cart item');
        }
        expect(1).toBe(1);
        done();
    });
});

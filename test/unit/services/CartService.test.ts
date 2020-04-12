import { CartItem } from '../../../src/api/models/CartItem';
import { CartService } from '../../../src/api/services/CartService';
import { LogMock } from '../lib/LogMock';
import { RepositoryMock } from '../lib/RepositoryMock';

const FUSERID = 1;

const PRODUCT = {
  productId: 1426,
  blockId: 4,
  price: 599.00,
};

describe('CartService', () => {
    test('Find should return a cart item', async (done) => {
        const log = new LogMock();
        const repo = new RepositoryMock();
        const cartItem = new CartItem();
        cartItem.id = 1;
        cartItem.fuserId = FUSERID;
        cartItem.blockId = PRODUCT.blockId;
        cartItem.productId = PRODUCT.productId;
        cartItem.price = PRODUCT.price;
        cartItem.currency = 'RUB';
        cartItem.quantity = 1;
        repo.list = [cartItem];
        const cartService = new CartService(repo as any, log);
        const list = await cartService.find();
        expect(list[0].productId).toBe(cartItem.productId);
        done();
    });
});

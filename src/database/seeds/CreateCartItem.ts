import { Connection } from 'typeorm';
import { Factory, Seed } from 'typeorm-seeding';

import { CartItem } from '../../../src/api/models/CartItem';

export class CreateCartItem implements Seed {

    public async seed(factory: Factory, connection: Connection): Promise<CartItem> {
        const em = connection.createEntityManager();

        const item = new CartItem();
        item.id = 1;
        item.sessionId = 'xxxxxxxx-xxxx-Mxxx-Nxxx-xxxxxxxxxxxx';
        item.blockId = 4;
        item.productId = 1426;
        item.quantity = 1;
        item.price = 599.0;
        item.currency = 'RUB';
        return await em.save(item);
    }

}

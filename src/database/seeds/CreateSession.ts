import { Connection } from 'typeorm';
import { Factory, Seed } from 'typeorm-seeding';
import { Session } from '../../../src/api/models';
import moment from 'moment';

export class CreateSession implements Seed {

    public async seed(factory: Factory, connection: Connection):
      Promise<Session> {
        const em = connection.createEntityManager();

        const session = new Session();
        session.id = 'xxxxxxxx-xxxx-Mxxx-Nxxx-xxxxxxxxxxxx';
        session.dateInsert = moment().format('YYYY-MM-DD HH:mm:ss');
        session.dateUpdate = moment().format('YYYY-MM-DD HH:mm:ss');

        return await em.save(session);
    }

}

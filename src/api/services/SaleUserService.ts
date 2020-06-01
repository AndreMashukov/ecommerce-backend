import { Service } from 'typedi';
import { OrmRepository } from 'typeorm-typedi-extensions';
import uuid from 'uuid';
import moment from 'moment';

import { EventDispatcher, EventDispatcherInterface } from '../../decorators/EventDispatcher';
import { Logger, LoggerInterface } from '../../decorators/Logger';
import { SaleUser } from '../models/SaleUser';
import { SaleUserRepository } from '../repositories/SaleUserRepository';
import { events } from '../subscribers/events';

@Service()
export class SaleUserService {
  constructor(
    @OrmRepository() private saleUserRepository: SaleUserRepository,
    @EventDispatcher() private eventDispatcher: EventDispatcherInterface,
    @Logger(__filename) private log: LoggerInterface
  ) {}

  public find(): Promise<SaleUser[]> {
    this.log.info('Find all users');
    return this.saleUserRepository.find();
  }

  public findOne(id: string): Promise<SaleUser | undefined> {
    this.log.info('Find one user');
    return this.saleUserRepository.findOne({ id });
  }

  public async create(user: SaleUser): Promise<SaleUser> {
    this.log.info('Create a new user => ', user.toString());
    user.id = uuid.v1();
    user.active = 'Y';
    user.dateRegister = moment().format('YYYY-MM-DD HH:mm:ss');
    user.timestamp = moment().format('YYYY-MM-DD HH:mm:ss');
    const newUser = await this.saleUserRepository.save(user);
    this.eventDispatcher.dispatch(events.user.created, newUser);
    return newUser;
  }

  public update(id: string, user: SaleUser): Promise<SaleUser> {
    this.log.info('Update a user');
    user.id = id;
    return this.saleUserRepository.save(user);
  }

  public async delete(id: string): Promise<void> {
    this.log.info('Delete a user');
    await this.saleUserRepository.delete(id);
    return;
  }
}

import { Service } from 'typedi';
import { OrmRepository } from 'typeorm-typedi-extensions';
import uuid from 'uuid';

import { EventDispatcher, EventDispatcherInterface } from '../../decorators/EventDispatcher';
import { Logger, LoggerInterface } from '../../decorators/Logger';
import { SaleUser } from '../models/SaleUser';
import { SaleUserRepository } from '../repositories/SaleUserRepository';
import { events } from '../subscribers/events';

@Service()
export class SaleUserService {
  constructor(
    @OrmRepository() private userRepository: SaleUserRepository,
    @EventDispatcher() private eventDispatcher: EventDispatcherInterface,
    @Logger(__filename) private log: LoggerInterface
  ) {}

  public find(): Promise<SaleUser[]> {
    this.log.info('Find all users');
    return this.userRepository.find();
  }

  public findOne(id: string): Promise<SaleUser | undefined> {
    this.log.info('Find one user');
    return this.userRepository.findOne({ id });
  }

  public async create(user: SaleUser): Promise<SaleUser> {
    this.log.info('Create a new user => ', user.toString());
    user.id = uuid.v1();
    const newUser = await this.userRepository.save(user);
    this.eventDispatcher.dispatch(events.user.created, newUser);
    return newUser;
  }

  public update(id: string, user: SaleUser): Promise<SaleUser> {
    this.log.info('Update a user');
    user.id = id;
    return this.userRepository.save(user);
  }

  public async delete(id: string): Promise<void> {
    this.log.info('Delete a user');
    await this.userRepository.delete(id);
    return;
  }
}

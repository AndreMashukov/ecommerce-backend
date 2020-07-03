import { Service } from 'typedi';
import { OrmRepository } from 'typeorm-typedi-extensions';
import uuid from 'uuid';
import moment from 'moment';
import {
  EventDispatcher,
  EventDispatcherInterface
} from '../../decorators/EventDispatcher';
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

  public findOneByEmail(email: string): Promise<SaleUser | undefined> {
    return this.saleUserRepository.findOne({
      where: {
        email
      }
    });
  }

  public findOneByRefreshToken(
    userId: string,
    refreshToken: string
  ): Promise<SaleUser | undefined> {
    return this.saleUserRepository.findOne({
      where: {
        id: userId,
        refreshToken
      }
    });
  }

  public async create(user: SaleUser): Promise<SaleUser> {
    this.log.info('Create a new user => ', user.toString());
    const postUser = new SaleUser();
    postUser.email = user.email;
    postUser.phone = user.phone;
    postUser.lastName = user.lastName;
    postUser.firstName = user.firstName;
    postUser.password = user.password;
    postUser.id = uuid.v1();
    postUser.active = 'Y';
    postUser.dateRegister = moment().format('YYYY-MM-DD HH:mm:ss');
    postUser.timestamp = moment().format('YYYY-MM-DD HH:mm:ss');
    postUser.groupId = 1;
    postUser.refreshToken = uuid.v1();
    const newUser = await this.saleUserRepository.save(postUser);
    this.eventDispatcher.dispatch(events.user.created, newUser);
    return newUser;
  }

  public async updateName(
    id: string,
    firstName: string,
    lastName: string
  ): Promise<SaleUser> {
    const user = await this.saleUserRepository.findOne({
      where: {
        id
      }
    });

    user.firstName = firstName;
    user.lastName = lastName;

    return this.update(id, user);
  }

  public async updatePassword(
    id: string,
    password: string
  ): Promise<SaleUser> {
    const user = await this.saleUserRepository.findOne({
      where: {
        id
      }
    });
    user.password = password;

    return this.update(id, user);
  }

  public update(id: string, user: Partial<SaleUser>): Promise<SaleUser> {
    this.log.info('Update a user', id);
    user.id = id;
    return this.saleUserRepository.save(user);
  }

  public async delete(id: string): Promise<void> {
    this.log.info('Delete a user');
    await this.saleUserRepository.delete(id);
    return;
  }
}

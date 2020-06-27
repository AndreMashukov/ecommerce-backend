/* eslint-disable @typescript-eslint/no-unused-vars */
import { Query, Resolver } from 'type-graphql';
import { Service } from 'typedi';

import { UserService } from '../services/UserService';
import { User } from '../types/User';

@Service()
@Resolver((of) => User)
export class UserResolver {
  constructor(private userService: UserService) {}

  @Query((returns) => [User])
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public users(): Promise<any> {
    return this.userService.find();
  }
}

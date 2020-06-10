import { UnauthorizedError } from 'routing-controllers';

export class AuthError extends UnauthorizedError {
  constructor() {
    super('Authentication Failed!');
  }
}

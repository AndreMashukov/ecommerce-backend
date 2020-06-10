import { HttpError } from 'routing-controllers';

export class AuthError extends HttpError {
  constructor() {
    super(403, 'Authentication Failed!');
  }
}

import { IsEmail, IsNotEmpty, IsUUID } from 'class-validator';
import {
  Body,
  Get,
  JsonController,
  Post,
  Req,
  QueryParams,
  OnUndefined
} from 'routing-controllers';
import { ResponseSchema } from 'routing-controllers-openapi';
import * as jwt from 'jsonwebtoken';
import { SaleUser } from '../models';
import { SaleUserService } from '../services/SaleUserService';
import { AuthService } from '../../auth/AuthService';
import { UserNotFoundError, AuthError } from '../errors';
import moment from 'moment';

const TOKEN_EXPIRY_PERIOD = '5d';

class BaseUser {
  @IsNotEmpty()
  public firstName: string;

  @IsNotEmpty()
  public lastName: string;

  @IsEmail()
  @IsNotEmpty()
  public email: string;
}

export class UserResponse extends BaseUser {
  @IsUUID()
  public id: string;

  @IsNotEmpty()
  public token: string;

  @IsEmail()
  @IsNotEmpty()
  public refreshToken: string;

  @IsNotEmpty()
  public tokenTime: string;
}

class CreateUserBody extends BaseUser {
  @IsNotEmpty()
  public password: string;
}

class CheckEmailQuery {
  @IsNotEmpty()
  public email: string;
}

class LoginBody extends CheckEmailQuery {
  @IsNotEmpty()
  public password: string;
}

class RefreshTokenBody {
  @IsNotEmpty()
  public userId: string;

  @IsNotEmpty()
  public refreshToken: string;
}

// @Authorized()
@JsonController('/saleusers')
// @OpenAPI({ security: [{ basicAuth: [] }] })
export class SaleUserController {
  constructor(
    private saleUserService: SaleUserService,
    private authService: AuthService
  ) {}

  @Get()
  @ResponseSchema(UserResponse, { isArray: true })
  public find(): Promise<SaleUser[]> {
    return this.saleUserService.find();
  }

  @Get('/me')
  @ResponseSchema(UserResponse, { isArray: true })
  public findMe(@Req() req: any): Promise<SaleUser[]> {
    return req.user;
  }

  @Get('/email')
  @OnUndefined(UserNotFoundError)
  @ResponseSchema(UserResponse)
  public findByEmail(@QueryParams() query: CheckEmailQuery): Promise<SaleUser> {
    return this.saleUserService.findOneByEmail(query.email);
  }

  @Post()
  @ResponseSchema(UserResponse)
  public async create(@Body() body: CreateUserBody): Promise<UserResponse> {
    const user = new SaleUser();
    user.email = body.email;
    user.firstName = body.firstName;
    user.lastName = body.lastName;
    user.password = body.password;
    const newUser = await this.saleUserService.create(user);
    const newToken = jwt.sign(
      {
        id: newUser.id,
        email: newUser.email,
        lastName: newUser.lastName,
        firstName: newUser.firstName,
        groupId: newUser.groupId
      },
      process.env.APP_JWT_SECRET,
      {
        expiresIn: TOKEN_EXPIRY_PERIOD
      }
    );
    return {
      id: newUser.id,
      lastName: newUser.lastName,
      firstName: newUser.firstName,
      email: newUser.email,
      token: newToken,
      refreshToken: newUser.refreshToken,
      tokenTime: moment().format('YYYY-MM-DD HH:mm:ss')
    };
  }

  @Post('/auth')
  @ResponseSchema(UserResponse)
  @OnUndefined(AuthError)
  public async login(@Body() body: LoginBody): Promise<UserResponse> {
    const user: SaleUser = await this.authService.validateUser(
      body.email,
      body.password
    );
    if (user) {
      const newToken = jwt.sign(
        {
          id: user.id,
          email: user.email,
          lastName: user.lastName,
          firstName: user.firstName,
          groupId: user.groupId
        },
        process.env.APP_JWT_SECRET,
        {
          expiresIn: TOKEN_EXPIRY_PERIOD
        }
      );
      delete user.password;
      return {
        ...user,
        token: newToken,
        tokenTime: moment().format('YYYY-MM-DD HH:mm:ss')
      };
    }
    return undefined;
  }

  @Post('/token')
  @ResponseSchema(UserResponse)
  @OnUndefined(AuthError)
  public async refreshToken(@Body() body: RefreshTokenBody): Promise<UserResponse> {
    const user: SaleUser = await this.saleUserService.findOneByRefreshToken(
      body.userId,
      body.refreshToken
    );
    if (user) {
      const newToken = jwt.sign(
        {
          id: user.id,
          email: user.email,
          lastName: user.lastName,
          firstName: user.firstName,
          groupId: user.groupId
        },
        process.env.APP_JWT_SECRET,
        {
          expiresIn: TOKEN_EXPIRY_PERIOD
        }
      );
      delete user.password;
      return {
        ...user,
        token: newToken,
        tokenTime: moment().format('YYYY-MM-DD HH:mm:ss')
      };
    }
    return undefined;
  }
}

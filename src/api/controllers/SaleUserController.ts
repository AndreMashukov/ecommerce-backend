import { IsEmail, IsNotEmpty, IsUUID } from 'class-validator';
import { Authorized, Body, Delete, Get, JsonController, OnUndefined, Param, Post, Put, Req } from 'routing-controllers';
import { OpenAPI, ResponseSchema } from 'routing-controllers-openapi';

import { UserNotFoundError } from '../errors/UserNotFoundError';
import { SaleUser } from '../models/SaleUser';
import { SaleUserService } from '../services/SaleUserService';

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
}

class CreateUserBody extends BaseUser {
  @IsNotEmpty()
  public password: string;
}

@Authorized()
@JsonController('/saleusers')
@OpenAPI({ security: [{ basicAuth: [] }] })
export class SaleUserController {
  constructor(private saleUserService: SaleUserService) {}

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

  @Get('/:id')
  @OnUndefined(UserNotFoundError)
  @ResponseSchema(UserResponse)
  public one(@Param('id') id: string): Promise<SaleUser | undefined> {
    return this.saleUserService.findOne(id);
  }

  @Post()
  @ResponseSchema(UserResponse)
  public create(@Body() body: CreateUserBody): Promise<SaleUser> {
    const user = new SaleUser();
    user.email = body.email;
    user.firstName = body.firstName;
    user.lastName = body.lastName;
    user.password = body.password;

    return this.saleUserService.create(user);
  }

  @Put('/:id')
  @ResponseSchema(UserResponse)
  public update(@Param('id') id: string, @Body() body: BaseUser): Promise<SaleUser> {
    const user = new SaleUser();
    user.email = body.email;
    user.firstName = body.firstName;
    user.lastName = body.lastName;

    return this.saleUserService.update(id, user);
  }

  @Delete('/:id')
  public delete(@Param('id') id: string): Promise<void> {
    return this.saleUserService.delete(id);
  }
}

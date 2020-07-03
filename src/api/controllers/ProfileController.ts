import { IsNotEmpty } from 'class-validator';
import {
  Authorized,
  JsonController,
  Put,
  Body
} from 'routing-controllers';
import { SaleUser } from '../models';
import { SaleUserService } from '../services/SaleUserService';
import { Roles } from '../../constants';

class PutUserNamesBody {
  @IsNotEmpty()
  public id: string;

  @IsNotEmpty()
  public firstName: string;

  @IsNotEmpty()
  public lastName: string;
}

class PutUserPasswordBody {
  @IsNotEmpty()
  public id: string;

  @IsNotEmpty()
  public password: string;
}

@Authorized([Roles.Customer, Roles.Admin])
@JsonController('/profile')
export class ProfileController {
  constructor(private saleUserService: SaleUserService) {}

  @Put('/name')
  public async changeUserName(
    @Body() body: PutUserNamesBody
  ): Promise<SaleUser> {
    console.log('body', body);
    return this.saleUserService.updateName(
      body.id,
      body.firstName,
      body.lastName
    );
  }

  @Put('/password')
  public async changeUserPassword(
    @Body() body: PutUserPasswordBody
  ): Promise<SaleUser> {
    return this.saleUserService.updatePassword(body.id, body.password);
  }
}

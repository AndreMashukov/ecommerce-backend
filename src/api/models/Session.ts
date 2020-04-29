import { IsNotEmpty } from 'class-validator';
import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({name: 'b_sale_session'})
export class Session {
  @PrimaryColumn('uuid')
  public id: string;

  @IsNotEmpty()
  @Column({name: 'date_insert'})
  public dateInsert: string;

  @IsNotEmpty()
  @Column({name: 'date_update'})
  public dateUpdate: string;

  @Column({name: 'user_id'})
  public userId: string;
}

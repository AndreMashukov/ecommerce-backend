import { IsNotEmpty } from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({name: 'b_sale_fuser'})
export class Session {
  @PrimaryGeneratedColumn()
  public id: number;

  @IsNotEmpty()
  @Column({name: 'date_insert'})
  public dateInsert: string;

  @IsNotEmpty()
  @Column({name: 'date_update'})
  public dateUpdate: string;

  @Column({name: 'user_id'})
  public userId: number;
}

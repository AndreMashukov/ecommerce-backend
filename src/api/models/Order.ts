import { IsNotEmpty, IsString } from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

export interface OrderProps {
  region: number;
  city?: string;
  address: string;
}

@Entity({ name: 'b_sale_order' })
export class Order {
  @PrimaryGeneratedColumn()
  public id: number;

  @IsNotEmpty()
  @Column({ name: 'user_id' })
  public userId: string;

  @IsNotEmpty()
  @Column({ name: 'date_status' })
  public dateStatus: string;

  @IsNotEmpty()
  @Column({ name: 'date_insert' })
  public dateInsert: string;

  @IsNotEmpty()
  @Column({ name: 'date_update' })
  public dateUpdate: string;

  @IsNotEmpty()
  @Column()
  public price: number;

  @IsNotEmpty()
  @Column({ name: 'delivery_id' })
  public deliveryId: number;

  @IsString()
  @Column({name: 'user_description'})
  public comment: string;

  @Column()
  public props: string;
}

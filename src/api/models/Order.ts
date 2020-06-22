import { IsNotEmpty, IsString } from 'class-validator';
import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  OneToMany,
  OneToOne,
  JoinColumn
} from 'typeorm';
import { CartViewItem } from './CartViewItem';
import { SaleUser } from './SaleUser';
import { OrderProps } from './OrderProps';

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

  @IsNotEmpty()
  @Column({ name: 'pay_system_id' })
  public paySystemId: number;

  @IsString()
  @Column({ name: 'user_description' })
  public comment: string;

  @Column({type: 'json'})
  public props: OrderProps;

  @OneToMany((type) => CartViewItem, (cart) => cart.order)
  public cart: CartViewItem[];

  @OneToOne((type) => SaleUser)
  @JoinColumn({ name: 'user_id' })
  public user: SaleUser;
}

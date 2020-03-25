import { IsNotEmpty } from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({name: 'b_sale_basket'})
export class CartItem {
  @PrimaryGeneratedColumn()
  public id: number;

  @IsNotEmpty()
  @Column({name: 'fuser_id'})
  public fuserId: number;

  @IsNotEmpty()
  @Column({name: 'product_id'})
  public productId: number;

  @IsNotEmpty()
  @Column()
  public price: number;

  @IsNotEmpty()
  @Column()
  public currency: string;

  @IsNotEmpty()
  @Column()
  public quantity: number;
}

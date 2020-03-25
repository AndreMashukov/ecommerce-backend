import { IsNotEmpty } from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({name: 'b_sale_basket'})
export class Cart {
  @PrimaryGeneratedColumn()
  public id: number;

  @IsNotEmpty()
  @Column({name: 'fuser_id'})
  public fuserId: number;

  @IsNotEmpty()
  @Column({name: 'product_id'})
  public productId: number;

  @IsNotEmpty()
  @Column({name: 'price'})
  public price: number;

  @IsNotEmpty()
  @Column({name: 'quantity'})
  public quantity: number;
}

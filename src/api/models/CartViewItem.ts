
import { IsNotEmpty } from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({name: 'view_sale_basket'})
export class CartViewItem {
  @PrimaryGeneratedColumn()
  public id: number;

  @IsNotEmpty()
  @Column({name: 'fuser_id'})
  public fuserId: number;

  @IsNotEmpty()
  @Column({name: 'product_id'})
  public productId: number;

  @IsNotEmpty()
  @Column({name: 'iblock_id'})
  public blockId: number;

  @IsNotEmpty()
  @Column()
  public price: number;

  @IsNotEmpty()
  @Column()
  public currency: string;

  @IsNotEmpty()
  @Column()
  public name: string;

  @IsNotEmpty()
  @Column()
  public quantity: number;
}

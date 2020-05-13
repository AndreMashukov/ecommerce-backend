
import { IsNotEmpty } from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({name: 'view_sale_basket'})
export class CartViewItem {
  @PrimaryGeneratedColumn()
  public id: number;

  @IsNotEmpty()
  @Column({name: 'session_id'})
  public sessionId: string;

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

  @IsNotEmpty()
  @Column({name: 'package_type'})
  public packageType: number;

  @IsNotEmpty()
  @Column({name: 'sku_code'})
  public skuCode: number;
}

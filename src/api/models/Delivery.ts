import { IsNotEmpty } from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { RegionsList } from './RegionsList';

@Entity({ name: 'b_sale_delivery' })
export class Delivery {
  @PrimaryGeneratedColumn()
  public id: number;

  @IsNotEmpty()
  @Column()
  public name: string;

  @IsNotEmpty()
  @Column({ name: 'period_from' })
  public periodFrom: string;

  @IsNotEmpty()
  @Column({ name: 'period_to' })
  public periodTo: string;

  @IsNotEmpty()
  @Column({ name: 'period_type' })
  public periodType: string;

  @IsNotEmpty()
  @Column({ name: 'order_price_from' })
  public orderPriceFrom: number;

  @IsNotEmpty()
  @Column({ name: 'order_price_to' })
  public orderPriceTo: number;

  @IsNotEmpty()
  @Column()
  public active: string;

  @IsNotEmpty()
  @Column()
  public price: string;

  @IsNotEmpty()
  @Column()
  public description: string;

  @IsNotEmpty()
  @Column({ type: 'json'})
  public regions: RegionsList;
}

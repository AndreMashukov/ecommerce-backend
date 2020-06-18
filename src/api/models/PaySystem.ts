import { IsNotEmpty } from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { RegionsList } from './RegionsList';

@Entity({ name: 'b_sale_pay_system' })
export class PaySystem {
  @PrimaryGeneratedColumn()
  public id: number;

  @IsNotEmpty()
  @Column()
  public name: string;

  @IsNotEmpty()
  @Column()
  public active: string;

  @IsNotEmpty()
  @Column()
  public description: string;

  @IsNotEmpty()
  @Column({ type: 'json'})
  public regions: RegionsList;
}

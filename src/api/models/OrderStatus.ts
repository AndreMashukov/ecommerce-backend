/* eslint-disable @typescript-eslint/no-unused-vars */
import { IsNotEmpty } from 'class-validator';
import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({ name: 'b_sale_status' })
export class OrderStatus {
  @PrimaryColumn()
  public id: string;

  @IsNotEmpty()
  @Column()
  public name: string;
}

import { IsNotEmpty } from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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

  @Column()
  public props: string;
}

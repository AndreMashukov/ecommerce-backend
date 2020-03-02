import { IsNotEmpty } from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({name: 'b_iblock_section'})
export class Section {
  @PrimaryGeneratedColumn()
  public id: string;

  @IsNotEmpty()
  @Column({name: 'iblock_id'})
  public blockId: string;

  @IsNotEmpty()
  @Column({name: 'iblock_section_id'})
  public sectionId: string;

  @IsNotEmpty()
  @Column()
  public name: string;

  @IsNotEmpty()
  @Column()
  public description: string;

  @IsNotEmpty()
  @Column()
  public code: string;

}

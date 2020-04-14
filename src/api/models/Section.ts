import { IsNotEmpty } from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({name: 'view_iblock_section'})
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

  @IsNotEmpty()
  @Column()
  public sort: number;

  @IsNotEmpty()
  @Column({name: 'parent_code'})
  public parentCode: string;

  @IsNotEmpty()
  @Column({name: 'depth_level'})
  public depthLevel: number;

}

import { IsNotEmpty } from 'class-validator';
import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn
} from 'typeorm';
import { File } from './File';

@Entity({ name: 'view_iblock_section' })
export class Section {
  @PrimaryGeneratedColumn()
  public id: string;

  @IsNotEmpty()
  @Column({ name: 'iblock_id' })
  public blockId: string;

  @IsNotEmpty()
  @Column({ name: 'iblock_section_id' })
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
  @Column()
  public active: number;

  @IsNotEmpty()
  @Column()
  public picture: number;

  @IsNotEmpty()
  @Column({ name: 'parent_code' })
  public parentCode: string;

  @IsNotEmpty()
  @Column({ name: 'depth_level' })
  public depthLevel: number;

  @Column({ name: 'category_id' })
  public categoryId: number;

  @Column({ name: 'category_name' })
  public categoryName: string;

  @Column({ name: 'description_type' })
  public descriptionType: string;

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  @OneToOne((type) => File)
  @JoinColumn({ name: 'picture' })
  public pictureData: File;
}

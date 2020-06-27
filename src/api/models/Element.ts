import { IsNotEmpty } from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

import { ElementProperty } from './ElementProperty';

@Entity({ name: 'b_iblock_element' })
export class Element {
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
  public code: string;

  @IsNotEmpty()
  @Column()
  public sort: string;

  @IsNotEmpty()
  @Column()
  public active: string;

  @Column({ name: 'active_from' })
  public activeFrom: string;

  @Column({ name: 'active_to' })
  public activeTo: string;

  @IsNotEmpty()
  @Column({ name: 'preview_text' })
  public preview: string;

  @IsNotEmpty()
  @Column({ name: 'preview_text_type' })
  public previewType: string;

  @IsNotEmpty()
  @Column({ name: 'detail_text' })
  public detail: string;

  @IsNotEmpty()
  @Column({ name: 'detail_text_type' })
  public detailType: string;

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  @OneToMany((type) => ElementProperty, (property) => property.element)
  public properties: ElementProperty[];
}

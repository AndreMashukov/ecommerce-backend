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
  @Column({ name: 'preview_text' })
  public preview: string;

  @IsNotEmpty()
  @Column({ name: 'preview_text_type' })
  public previewType: string;

  @OneToMany(type => ElementProperty, property => property.element)
  public properties: ElementProperty[];

  // @OneToMany(type => Pet, pet => pet.user)
  // public pets: Pet[];
}

import { IsNotEmpty } from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

import { Element } from './Element';

@Entity({name: 'view_iblock_element_property'})
export class ElementProperty {
  @PrimaryGeneratedColumn()
  public id: string;

  @IsNotEmpty()
  @Column({name: 'iblock_property_id'})
  public propertyId: string;

  @IsNotEmpty()
  @Column({name: 'iblock_element_id'})
  public elementId: string;

  @IsNotEmpty()
  @Column()
  public value: string;

  @IsNotEmpty()
  @Column()
  public name: string;

  @ManyToOne(type => Element, element => element.properties)
  @JoinColumn({ name: 'iblock_element_id' })
  public element: Element;
}

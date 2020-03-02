import { IsNotEmpty } from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

import { Element } from './Element';

@Entity({name: 'b_iblock_element_property'})
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

  @ManyToOne(type => Element, element => element.properties)
  @JoinColumn({ name: 'iblock_element_id' })
  public element: Element;

  // @ManyToOne(type => User, user => user.pets)
  // @JoinColumn({ name: 'user_id' })
  // public user: User;
}

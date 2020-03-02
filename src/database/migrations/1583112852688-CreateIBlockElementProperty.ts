import { MigrationInterface, QueryRunner, TableForeignKey } from 'typeorm';

export class CreateIBlockElementProperty1583112852688 implements MigrationInterface {
  private foreignKeyForElement = new TableForeignKey({
    name: 'fk_iblock_element_property_iblock_element',
    columnNames: ['iblock_element_id'],
    referencedColumnNames: ['id'],
    referencedTableName: 'b_iblock_element',
    onDelete: 'CASCADE',
  });

  private foreignKeyForProperty = new TableForeignKey({
    name: 'fk_iblock_element_property_iblock_property',
    columnNames: ['iblock_property_id'],
    referencedColumnNames: ['id'],
    referencedTableName: 'b_iblock_property',
    onDelete: 'CASCADE',
  });

  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(`
    create table if not exists b_iblock_element_property (
      id int(11) not null auto_increment,
      iblock_property_id int(11) not null,
      iblock_element_id int(11) not null,
      value text not null,
      value_type char(4) not null default 'text',
      value_enum int(11) default null,
      value_num decimal(18,4) default null,
      description varchar(255) default null,
      primary key  (id),
      key ix_iblock_element_property_1 (iblock_element_id,iblock_property_id),
      key ix_iblock_element_property_2 (iblock_property_id),
      key ix_iblock_element_prop_enum (value_enum,iblock_property_id),
      key ix_iblock_element_prop_num (value_num,iblock_property_id)
    ) default charset=cp1251 auto_increment=13335;
    `);

    await queryRunner.createForeignKey('b_iblock_element_property', this.foreignKeyForElement);
    await queryRunner.createForeignKey('b_iblock_element_property', this.foreignKeyForProperty);
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.dropTable('b_iblock_element_property');
    await queryRunner.dropForeignKey('b_iblock_element_property', this.foreignKeyForElement);
    await queryRunner.dropForeignKey('b_iblock_element_property', this.foreignKeyForProperty);
  }
}

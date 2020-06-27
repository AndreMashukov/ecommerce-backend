import { MigrationInterface, QueryRunner, Table, TableIndex } from 'typeorm';

export class CreateIBlockElementProperty1583112852688
  implements MigrationInterface {
  public iBlockElementPropertyTable = new Table({
    name: 'b_iblock_element_property',
    columns: [
      {
        name: 'id',
        type: 'int',
        length: '18',
        isPrimary: true,
        isNullable: false,
        isGenerated: true
        // generationStrategy: 'increment',
      },
      {
        name: 'iblock_property_id',
        type: 'int',
        length: '11',
        isNullable: false
      },
      {
        name: 'iblock_element_id',
        type: 'int',
        length: '11',
        isNullable: false
      },
      {
        name: 'value',
        type: 'text',
        isNullable: false
      },
      {
        name: 'value_type',
        type: 'char',
        length: '4',
        isNullable: false
      },
      {
        name: 'value_enum',
        type: 'int',
        length: '11',
        isNullable: true
      },
      {
        name: 'value_num',
        type: 'decimal',
        length: '18,4',
        isNullable: true
      },
      {
        name: 'description',
        type: 'varchar',
        length: '255',
        isNullable: true
      }
    ]
  });
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public async up(queryRunner: QueryRunner): Promise<any> {
    // await queryRunner.query(`
    // create table if not exists b_iblock_element_property (
    //   id int(11) not null auto_increment,
    //   iblock_property_id int(11) not null,
    //   iblock_element_id int(11) not null,
    //   value text not null,
    //   value_type char(4) not null default 'text',
    //   value_enum int(11) default null,
    //   value_num decimal(18,4) default null,
    //   description varchar(255) default null,
    //   primary key  (id),
    //   key ix_iblock_element_property_1 (iblock_element_id,iblock_property_id),
    //   key ix_iblock_element_property_2 (iblock_property_id),
    //   key ix_iblock_element_prop_enum (value_enum,iblock_property_id),
    //   key ix_iblock_element_prop_num (value_num,iblock_property_id)
    // ) default charset=cp1251 auto_increment=13335;
    // `);
    await queryRunner.createTable(this.iBlockElementPropertyTable);

    await queryRunner.createIndex(
      'b_iblock_element_property',
      new TableIndex({
        name: 'ix_iblock_element_property_1',
        columnNames: ['iblock_element_id', 'iblock_property_id']
      })
    );

    await queryRunner.createIndex(
      'b_iblock_element_property',
      new TableIndex({
        name: 'ix_iblock_element_property_2',
        columnNames: ['iblock_property_id']
      })
    );

    await queryRunner.createIndex(
      'b_iblock_element_property',
      new TableIndex({
        name: 'ix_iblock_element_prop_enum',
        columnNames: ['value_enum', 'iblock_property_id']
      })
    );
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.dropIndex(
      'b_iblock_element_property',
      'ix_iblock_element_property_1'
    );
    await queryRunner.dropIndex(
      'b_iblock_element_property',
      'ix_iblock_element_property_2'
    );
    await queryRunner.dropIndex(
      'b_iblock_element_property',
      'ix_iblock_element_prop_enum'
    );
    await queryRunner.dropTable('b_iblock_element_property');
  }
}

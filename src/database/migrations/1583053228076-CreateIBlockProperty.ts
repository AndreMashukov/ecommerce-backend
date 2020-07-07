import { MigrationInterface, QueryRunner, Table, TableIndex } from 'typeorm';

export class CreateIBlockProperty1583053228076 implements MigrationInterface {
  public iBlockPropertyTable = new Table({
    name: 'b_iblock_property',
    columns: [
      {
        name: 'id',
        type: 'int',
        // length: '18',
        isPrimary: true,
        isNullable: false,
        isGenerated: true,
        generationStrategy: 'increment'
      },
      {
        name: 'timestamp_x',
        type: 'timestamp',
        isNullable: false
      },
      {
        name: 'iblock_id',
        type: 'int',
        // length: '11',
        isNullable: false
      },
      {
        name: 'name',
        type: 'varchar',
        length: '255',
        isNullable: false
      },
      {
        name: 'active',
        type: 'char',
        length: '1'
      },
      {
        name: 'sort',
        type: 'int',
        // length: '11',
        isNullable: false
      },
      {
        name: 'code',
        type: 'varchar',
        length: '255',
        isNullable: true
      },
      {
        name: 'default_value',
        type: 'text',
        isNullable: true
      },
      {
        name: 'property_type',
        type: 'char',
        length: '1',
        isNullable: false
      },
      {
        name: 'row_count',
        type: 'int',
        // length: '11',
        isNullable: false
      },
      {
        name: 'col_count',
        type: 'int',
        // length: '11',
        isNullable: false
      },
      {
        name: 'list_type',
        type: 'char',
        length: '1',
        isNullable: false
      },
      {
        name: 'multiple',
        type: 'char',
        length: '1',
        isNullable: false
      },
      {
        name: 'xml_id',
        type: 'varchar',
        length: '100',
        isNullable: true
      },
      {
        name: 'file_type',
        type: 'varchar',
        length: '200',
        isNullable: true
      },
      {
        name: 'multiple_cnt',
        type: 'int',
        // length: '11',
        isNullable: true
      },
      {
        name: 'tmp_id',
        type: 'varchar',
        length: '40',
        isNullable: true
      },
      {
        name: 'link_iblock_id',
        type: 'int',
        // length: '18',
        isNullable: true
      },
      {
        name: 'with_description',
        type: 'char',
        length: '1',
        isNullable: true
      },
      {
        name: 'searchable',
        type: 'char',
        length: '1',
        isNullable: false
      },
      {
        name: 'filtrable',
        type: 'char',
        length: '1',
        isNullable: false
      },
      {
        name: 'is_required',
        type: 'char',
        length: '1',
        isNullable: true
      },
      {
        name: 'version',
        type: 'int',
        // length: '11',
        isNullable: true
      },
      {
        name: 'user_type',
        type: 'varchar',
        length: '255',
        isNullable: true
      },
      {
        name: 'user_type_settings',
        type: 'text',
        isNullable: true
      },
      {
        name: 'hint',
        type: 'varchar',
        length: '255',
        isNullable: true
      }
    ]
  });
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public async up(queryRunner: QueryRunner): Promise<any> {
    // await queryRunner.query(`
    // create table if not exists b_iblock_property (
    //   id int(11) not null auto_increment,
    //   timestamp_x timestamp not null default current_timestamp on update current_timestamp,
    //   iblock_id int(11) not null,
    //   name varchar(100) not null,
    //   active char(1) not null default 'y',
    //   sort int(11) not null default '500',
    //   code varchar(50) default null,
    //   default_value text,
    //   property_type char(1) not null default 's',
    //   row_count int(11) not null default '1',
    //   col_count int(11) not null default '30',
    //   list_type char(1) not null default 'l',
    //   multiple char(1) not null default 'n',
    //   xml_id varchar(100) default null,
    //   file_type varchar(200) default null,
    //   multiple_cnt int(11) default null,
    //   tmp_id varchar(40) default null,
    //   link_iblock_id int(18) default null,
    //   with_description char(1) default null,
    //   searchable char(1) not null default 'n',
    //   filtrable char(1) not null default 'n',
    //   is_required char(1) default null,
    //   version int(11) not null default '1',
    //   user_type varchar(255) default null,
    //   user_type_settings text,
    //   hint varchar(255) default null,
    //   primary key  (id),
    //   key ix_iblock_property_1 (iblock_id),
    //   key ix_iblock_property_2 (code)
    // ) default charset=cp1251 auto_increment=23 ;
    // `);
    await queryRunner.createTable(this.iBlockPropertyTable);
    await queryRunner.createIndex(
      'b_iblock_property',
      new TableIndex({
        name: 'ix_iblock_property_1',
        columnNames: ['iblock_id']
      })
    );
    await queryRunner.createIndex(
      'b_iblock_property',
      new TableIndex({
        name: 'ix_iblock_property_2',
        columnNames: ['code']
      })
    );
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.dropIndex('b_iblock_property', 'ix_iblock_property_1');
    await queryRunner.dropIndex('b_iblock_property', 'ix_iblock_property_2');
    await queryRunner.dropTable('b_iblock_property');
  }
}

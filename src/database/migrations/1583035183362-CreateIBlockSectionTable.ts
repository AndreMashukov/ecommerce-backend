import { MigrationInterface, QueryRunner, Table, TableIndex } from 'typeorm';

export class CreateIBlockSectionTable1583035183362 implements MigrationInterface {
  public iBlockSectionTable = new Table({
    name: 'b_iblock_section',
    columns: [
      {
        name: 'id',
        type: 'int',
        length: '18',
        isPrimary: true,
        isNullable: false,
        isGenerated: true,
        generationStrategy: 'increment',
      }, {
        name: 'timestamp_x',
        type: 'timestamp',
        isNullable: false,
      }, {
        name: 'modified_by',
        type: 'int',
        length: '18',
        isNullable: true,
      }, {
        name: 'date_create',
        type: 'datetime',
        isNullable: true,
     }, {
        name: 'created_by',
        type: 'int',
        length: '18',
        isNullable: true,
     }, {
        name: 'iblock_id',
        type: 'int',
        length: '11',
        isNullable: false,
     }, {
        name: 'iblock_section_id',
        type: 'int',
        length: '11',
        isNullable: true,
     }, {
        name: 'active',
        type: 'char',
        length: '1',
        isNullable: false,
     }, {
        name: 'global_active',
        type: 'char',
        length: '1',
        isNullable: true,
     }, {
        name: 'sort',
        type: 'int',
        length: '11',
        isNullable: false,
        // default: '500',
     }, {
        name: 'name',
        type: 'varchar',
        length: '255',
        isNullable: false,
     }, {
        name: 'picture',
        type: 'int',
        length: '18',
        isNullable: true,
     }, {
        name: 'left_margin',
        type: 'int',
        length: '18',
        isNullable: true,
     }, {
        name: 'right_margin',
        type: 'int',
        length: '18',
        isNullable: true,
     }, {
        name: 'depth_level',
        type: 'int',
        length: '18',
        isNullable: true,
     }, {
        name: 'description',
        type: 'text',
        isNullable: true,
     }, {
        name: 'description_type',
        type: 'char',
        length: '4',
        isNullable: true,
     }, {
        name: 'searchable_content',
        type: 'text',
     }, {
        name: 'code',
        type: 'varchar',
        length: '255',
        isNullable: true,
     }, {
        name: 'xml_id',
        type: 'varchar',
        length: '255',
        isNullable: true,
     }, {
        name: 'tmp_id',
        type: 'varchar',
        length: '40',
        isNullable: true,
     }, {
        name: 'detail_picture',
        type: 'int',
        length: '18',
        isNullable: true,
     }, {
        name: 'socnet_group_id',
        type: 'int',
        length: '18',
        isNullable: true,
     },
    ],
  });

  public async up(queryRunner: QueryRunner): Promise<any> {
    // await queryRunner.query(`create table if not exists b_iblock_section (
    //   id int(11) not null auto_increment,
    //   timestamp_x timestamp not null default current_timestamp on update current_timestamp,
    //   modified_by int(18) default null,
    //   date_create datetime default null,
    //   created_by int(18) default null,
    //   iblock_id int(11) not null,
    //   iblock_section_id int(11) default null,
    //   active char(1) not null default 'y',
    //   global_active char(1) not null default 'y',
    //   sort int(11) not null default '500',
    //   name varchar(255) not null,
    //   picture int(18) default null,
    //   left_margin int(18) default null,
    //   right_margin int(18) default null,
    //   depth_level int(18) default null,
    //   description text,
    //   description_type char(4) not null default 'text',
    //   searchable_content text,
    //   code varchar(255) default null,
    //   xml_id varchar(255) default null,
    //   tmp_id varchar(40) default null,
    //   detail_picture int(18) default null,
    //   socnet_group_id int(18) default null,
    //   primary key  (id),
    //   key ix_iblock_section_1 (iblock_id,iblock_section_id),
    //   key ix_iblock_section_depth_level (iblock_id,depth_level),
    //   key ix_iblock_section_left_margin (iblock_id,left_margin,right_margin),
    //   key ix_iblock_section_right_margin (iblock_id,right_margin,left_margin),
    //   key ix_iblock_section_code (iblock_id, code)
    // ) default charset=cp1251 auto_increment=110;`);

    await queryRunner.createTable(this.iBlockSectionTable);

    await queryRunner.createIndex('b_iblock_section', new TableIndex({
      name: 'ix_iblock_section_1',
      columnNames: ['iblock_id', 'iblock_section_id'],
    }));

    await queryRunner.createIndex('b_iblock_section', new TableIndex({
      name: 'ix_iblock_section_depth_level',
      columnNames: ['iblock_id', 'depth_level'],
    }));

    await queryRunner.createIndex('b_iblock_section', new TableIndex({
      name: 'ix_iblock_section_code',
      columnNames: ['iblock_id', 'code'],
    }));

    await queryRunner.query(`
      CREATE OR REPLACE VIEW bitrix.view_iblock_section AS
      select *, (select code from bitrix.b_iblock_section where iblock_id = t1.iblock_id and id = t1.iblock_section_id) as parent_code
      from bitrix.b_iblock_section t1
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.dropView('view_iblock_section');
    await queryRunner.dropIndex('b_iblock_section', 'ix_iblock_section_1');
    await queryRunner.dropIndex('b_iblock_section', 'ix_iblock_section_depth_level');
    await queryRunner.dropIndex('b_iblock_section', 'ix_iblock_section_code');
    await queryRunner.dropTable('b_iblock_section');
  }
}

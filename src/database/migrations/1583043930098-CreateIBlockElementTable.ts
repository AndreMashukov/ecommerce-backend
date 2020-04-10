import { MigrationInterface, QueryRunner, Table, TableIndex } from 'typeorm';

export class CreateIBlockElementTable1583043930098 implements MigrationInterface {
  public iBlockElementTable = new Table({
    name: 'b_iblock_element',
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
        name: 'active_from',
        type: 'datetime',
        isNullable: true,
      }, {
        name: 'active_to',
        type: 'datetime',
        isNullable: true,
      }, {
        name: 'sort',
        type: 'int',
        length: '11',
        isNullable: false,
      }, {
        name: 'name',
        type: 'varchar',
        length: '255',
        isNullable: false,
      }, {
        name: 'preview_picture',
        type: 'int',
        length: '18',
        isNullable: true,
      }, {
        name: 'preview_text',
        type: 'text',
        isNullable: true,
      }, {
        name: 'preview_text_type',
        type: 'varchar',
        length: '4',
        isNullable: true,
      }, {
        name: 'detail_picture',
        type: 'int',
        length: '18',
        isNullable: true,
      }, {
        name: 'detail_text',
        type: 'longtext',
        isNullable: true,
      }, {
        name: 'detail_text_type',
        type: 'varchar',
        length: '4',
        isNullable: true,
      }, {
        name: 'searchable_content',
        type: 'text',
        isNullable: true,
      }, {
        name: 'wf_status_id',
        type: 'int',
        length: '18',
        isNullable: true,
      }, {
        name: 'wf_parent_element_id',
        type: 'int',
        length: '11',
        isNullable: true,
      }, {
        name: 'wf_new',
        type: 'char',
        length: '1',
        isNullable: true,
      }, {
        name: 'wf_locked_by',
        type: 'int',
        length: '18',
        isNullable: true,
      }, {
        name: 'wf_date_lock',
        type: 'datetime',
        isNullable: true,
      }, {
        name: 'wf_comments',
        type: 'text',
        isNullable: true,
      }, {
        name: 'in_sections',
        type: 'char',
        length: '1',
        isNullable: true,
      }, {
        name: 'xml_id',
        type: 'varchar',
        length: '255',
        isNullable: true,
      }, {
        name: 'code',
        type: 'varchar',
        length: '255',
        isNullable: true,
      }, {
        name: 'tags',
        type: 'varchar',
        length: '255',
        isNullable: true,
      }, {
        name: 'tmp_id',
        type: 'varchar',
        length: '40',
        isNullable: true,
      }, {
        name: 'wf_last_history_id',
        type: 'int',
        length: '11',
        isNullable: true,
      }, {
        name: 'show_counter',
        type: 'int',
        length: '18',
        isNullable: true,
      }, {
        name: 'show_counter_start',
        type: 'datetime',
        isNullable: true,
      },
    ],
  });

  public async up(queryRunner: QueryRunner): Promise<any> {
    // await queryRunner.query(`
    // create table if not exists b_iblock_element (
    //   id int(11) not null auto_increment,
    //   timestamp_x datetime default null,
    //   modified_by int(18) default null,
    //   date_create datetime default null,
    //   created_by int(18) default null,
    //   iblock_id int(11) not null default '0',
    //   iblock_section_id int(11) default null,
    //   active char(1) not null default 'y',
    //   active_from datetime default null,
    //   active_to datetime default null,
    //   sort int(11) not null default '500',
    //   name varchar(255) not null,
    //   preview_picture int(18) default null,
    //   preview_text text,
    //   preview_text_type varchar(4) not null default 'text',
    //   detail_picture int(18) default null,
    //   detail_text longtext,
    //   detail_text_type varchar(4) not null default 'text',
    //   searchable_content text,
    //   wf_status_id int(18) default '1',
    //   wf_parent_element_id int(11) default null,
    //   wf_new char(1) default null,
    //   wf_locked_by int(18) default null,
    //   wf_date_lock datetime default null,
    //   wf_comments text,
    //   in_sections char(1) not null default 'n',
    //   xml_id varchar(255) default null,
    //   code varchar(255) default null,
    //   tags varchar(255) default null,
    //   tmp_id varchar(40) default null,
    //   wf_last_history_id int(11) default null,
    //   show_counter int(18) default null,
    //   show_counter_start datetime default null,
    //   primary key  (id),
    //   key ix_iblock_element_1 (iblock_id,iblock_section_id),
    //   key ix_iblock_element_4 (iblock_id,xml_id,wf_parent_element_id),
    //   key ix_iblock_element_3 (wf_parent_element_id),
    //   key ix_iblock_element_code (iblock_id, code)
    // ) default charset=cp1251 auto_increment=1532;
    // `);
    await queryRunner.createTable(this.iBlockElementTable);
    await queryRunner.createIndex('b_iblock_element', new TableIndex({
      name: 'ix_iblock_element_1',
      columnNames: ['iblock_id', 'iblock_section_id'],
    }));
    await queryRunner.createIndex('b_iblock_element', new TableIndex({
      name: 'ix_iblock_element_code',
      columnNames: ['iblock_id', 'code'],
    }));
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.dropIndex('b_iblock_element', 'ix_iblock_element_1');
    await queryRunner.dropIndex('b_iblock_element', 'ix_iblock_element_code');
    await queryRunner.dropTable('b_iblock_element');
  }
}

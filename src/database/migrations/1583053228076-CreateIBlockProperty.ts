import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateIBlockProperty1583053228076 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(`
    create table if not exists b_iblock_property (
      id int(11) not null auto_increment,
      timestamp_x timestamp not null default current_timestamp on update current_timestamp,
      iblock_id int(11) not null,
      name varchar(100) not null,
      active char(1) not null default 'y',
      sort int(11) not null default '500',
      code varchar(50) default null,
      default_value text,
      property_type char(1) not null default 's',
      row_count int(11) not null default '1',
      col_count int(11) not null default '30',
      list_type char(1) not null default 'l',
      multiple char(1) not null default 'n',
      xml_id varchar(100) default null,
      file_type varchar(200) default null,
      multiple_cnt int(11) default null,
      tmp_id varchar(40) default null,
      link_iblock_id int(18) default null,
      with_description char(1) default null,
      searchable char(1) not null default 'n',
      filtrable char(1) not null default 'n',
      is_required char(1) default null,
      version int(11) not null default '1',
      user_type varchar(255) default null,
      user_type_settings text,
      hint varchar(255) default null,
      primary key  (id),
      key ix_iblock_property_1 (iblock_id),
      key ix_iblock_property_2 (code)
    ) default charset=cp1251 auto_increment=23 ;
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.dropTable('b_iblock_property');
  }
}

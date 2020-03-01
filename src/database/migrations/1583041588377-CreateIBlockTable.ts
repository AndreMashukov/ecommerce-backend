import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateIBlockTable1583041588377 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(`
    create table if not exists b_iblock (
      id int(11) not null auto_increment,
      timestamp_x timestamp not null default current_timestamp on update current_timestamp,
      iblock_type_id varchar(50) not null,
      lid char(2) not null,
      code varchar(50) default null,
      name varchar(255) not null,
      active char(1) not null default 'y',
      sort int(11) not null default '500',
      list_page_url varchar(255) default null,
      detail_page_url varchar(255) default null,
      section_page_url varchar(255) default null,
      picture int(18) default null,
      description text,
      description_type char(4) not null default 'text',
      rss_ttl int(11) not null default '24',
      rss_active char(1) not null default 'y',
      rss_file_active char(1) not null default 'n',
      rss_file_limit int(11) default null,
      rss_file_days int(11) default null,
      rss_yandex_active char(1) not null default 'n',
      xml_id varchar(255) default null,
      tmp_id varchar(40) default null,
      index_element char(1) not null default 'y',
      index_section char(1) not null default 'n',
      workflow char(1) not null default 'y',
      bizproc char(1) not null default 'n',
      section_chooser char(1) default null,
      list_mode char(1) default null,
      version int(11) not null default '1',
      last_conv_element int(11) not null default '0',
      socnet_group_id int(18) default null,
      edit_file_before varchar(255) default null,
      edit_file_after varchar(255) default null,
      sections_name varchar(100) default null,
      section_name varchar(100) default null,
      elements_name varchar(100) default null,
      element_name varchar(100) default null,
      rights_mode char(1) default null,
      primary key  (id),
      key ix_iblock (iblock_type_id,lid,active)
    ) default charset=cp1251 auto_increment=5;
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.dropTable('b_iblock');
  }
}

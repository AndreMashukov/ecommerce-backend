import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateIBlockSectionTable1583035183362 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(`create table if not exists b_iblock_section (
      id int(11) not null auto_increment,
      timestamp_x timestamp not null default current_timestamp on update current_timestamp,
      modified_by int(18) default null,
      date_create datetime default null,
      created_by int(18) default null,
      iblock_id int(11) not null,
      iblock_section_id int(11) default null,
      active char(1) not null default 'y',
      global_active char(1) not null default 'y',
      sort int(11) not null default '500',
      name varchar(255) not null,
      picture int(18) default null,
      left_margin int(18) default null,
      right_margin int(18) default null,
      depth_level int(18) default null,
      description text,
      description_type char(4) not null default 'text',
      searchable_content text,
      code varchar(255) default null,
      xml_id varchar(255) default null,
      tmp_id varchar(40) default null,
      detail_picture int(18) default null,
      socnet_group_id int(18) default null,
      primary key  (id),
      key ix_iblock_section_1 (iblock_id,iblock_section_id),
      key ix_iblock_section_depth_level (iblock_id,depth_level),
      key ix_iblock_section_left_margin (iblock_id,left_margin,right_margin),
      key ix_iblock_section_right_margin (iblock_id,right_margin,left_margin),
      key ix_iblock_section_code (iblock_id, code)
    ) default charset=cp1251 auto_increment=110;`);
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.dropTable('b_iblock_section');
  }
}

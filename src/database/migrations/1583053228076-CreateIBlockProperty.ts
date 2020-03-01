import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateIBlockProperty1583053228076 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(`
    CREATE TABLE IF NOT EXISTS b_iblock_property (
      ID int(11) NOT NULL auto_increment,
      TIMESTAMP_X timestamp NOT NULL default CURRENT_TIMESTAMP on update CURRENT_TIMESTAMP,
      IBLOCK_ID int(11) NOT NULL,
      NAME varchar(100) NOT NULL,
      ACTIVE char(1) NOT NULL default 'Y',
      SORT int(11) NOT NULL default '500',
      CODE varchar(50) default NULL,
      DEFAULT_VALUE text,
      PROPERTY_TYPE char(1) NOT NULL default 'S',
      ROW_COUNT int(11) NOT NULL default '1',
      COL_COUNT int(11) NOT NULL default '30',
      LIST_TYPE char(1) NOT NULL default 'L',
      MULTIPLE char(1) NOT NULL default 'N',
      XML_ID varchar(100) default NULL,
      FILE_TYPE varchar(200) default NULL,
      MULTIPLE_CNT int(11) default NULL,
      TMP_ID varchar(40) default NULL,
      LINK_IBLOCK_ID int(18) default NULL,
      WITH_DESCRIPTION char(1) default NULL,
      SEARCHABLE char(1) NOT NULL default 'N',
      FILTRABLE char(1) NOT NULL default 'N',
      IS_REQUIRED char(1) default NULL,
      VERSION int(11) NOT NULL default '1',
      USER_TYPE varchar(255) default NULL,
      USER_TYPE_SETTINGS text,
      HINT varchar(255) default NULL,
      PRIMARY KEY  (ID),
      KEY ix_iblock_property_1 (IBLOCK_ID),
      KEY ix_iblock_property_2 (CODE)
    ) DEFAULT CHARSET=cp1251 AUTO_INCREMENT=23 ;
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.dropTable('b_iblock_property');
  }
}

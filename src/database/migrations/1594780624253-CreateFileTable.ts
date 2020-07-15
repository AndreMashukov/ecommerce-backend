import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateFileTable1594780624253 implements MigrationInterface {
  public fileTable = new Table({
    name: 'b_file',
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
        name: 'module_id',
        type: 'varchar',
        length: '50',
        isNullable: true
      },
      {
        name: 'height',
        type: 'int',
        // length: '11',
        isNullable: true
      },
      {
        name: 'width',
        type: 'int',
        // length: '11',
        isNullable: true
      },
      {
        name: 'file_size',
        type: 'int',
        // length: '11',
        isNullable: false
      },
      {
        name: 'content_type',
        type: 'varchar',
        length: '255',
        isNullable: true
      },
      {
        name: 'subdir',
        type: 'varchar',
        length: '255',
        isNullable: true
      },
      {
        name: 'file_name',
        type: 'varchar',
        length: '255',
        isNullable: false
      },
      {
        name: 'original_name',
        type: 'varchar',
        length: '255',
        isNullable: true
      },
      {
        name: 'description',
        type: 'varchar',
        length: '255',
        isNullable: true
      },
      {
        name: 'handler_id',
        type: 'varchar',
        length: '50',
        isNullable: true
      }
    ]
  });
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(this.fileTable);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('b_file');
  }
}

// DROP TABLE IF EXISTS `b_file`;
// CREATE TABLE `b_file` (
//   `ID` int(18) NOT NULL auto_increment,
//   `TIMESTAMP_X` timestamp NOT NULL default CURRENT_TIMESTAMP on update CURRENT_TIMESTAMP,
//   `MODULE_ID` varchar(50) default NULL,
//   `HEIGHT` int(18) default NULL,
//   `WIDTH` int(18) default NULL,
//   `FILE_SIZE` int(18) NOT NULL,
//   `CONTENT_TYPE` varchar(255) default 'IMAGE',
//   `SUBDIR` varchar(255) default NULL,
//   `FILE_NAME` varchar(255) NOT NULL,
//   `ORIGINAL_NAME` varchar(255) default NULL,
//   `DESCRIPTION` varchar(255) default NULL,
//   `HANDLER_ID` varchar(50) default NULL,
//   PRIMARY KEY  (`ID`)
// ) ENGINE=MyISAM AUTO_INCREMENT=1711 DEFAULT CHARSET=cp1251;

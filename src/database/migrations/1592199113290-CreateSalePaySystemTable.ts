import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey
} from 'typeorm';

export class CreateSalePaySystemTable1592199113290
  implements MigrationInterface {
  public salePaySystemTable = new Table({
    name: 'b_sale_pay_system',
    columns: [
      {
        name: 'id',
        type: 'int',
        length: '18',
        isPrimary: true,
        isNullable: false,
        isGenerated: true
      },
      {
        name: 'name',
        type: 'varchar',
        length: '255',
        isNullable: false
      },
      {
        name: 'lid',
        type: 'char',
        length: '2',
        isNullable: true
      },
      {
        name: 'active',
        type: 'char',
        length: '1',
        isNullable: false
      },
      {
        name: 'currency',
        type: 'char',
        length: '3',
        isNullable: true
      },
      {
        name: 'sort',
        type: 'int',
        length: '1',
        isNullable: true
      },
      {
        name: 'description',
        type: 'varchar',
        length: '255',
        isNullable: true
      },
      {
        name: 'regions',
        type: 'json',
        isNullable: true
      }
    ]
  });

  private tableForeignKeyForOrder = new TableForeignKey({
    name: 'fk_sale_order_pay_system_id',
    columnNames: ['pay_system_id'],
    referencedColumnNames: ['id'],
    referencedTableName: 'b_sale_pay_system',
    onDelete: 'CASCADE'
  });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.createTable(this.salePaySystemTable);
    await queryRunner.createForeignKey(
      'b_sale_order',
      this.tableForeignKeyForOrder
    );
    await queryRunner.query(`
    INSERT INTO b_sale_pay_system (ID, LID, CURRENCY, NAME, ACTIVE, SORT, DESCRIPTION, REGIONS) VALUES
    (1, 's1', 'RUB', 'Наличные курьеру', 'Y', 50, 'Оплата наличными при получении заказа курьеру.', '{"values": ["10", "20"]}'),
    (2, 's1', 'RUB', 'Банковская карта на сайте', 'Y', 60, 'Оплата возможна банковскими картами (VISA, MasterCard, American Express, МИР)', '{"values": ["30"]}');
    `);
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.dropTable(this.salePaySystemTable);
  }
}

// CREATE TABLE IF NOT EXISTS b_sale_pay_system (
//   ID int(11) NOT NULL auto_increment,
//   LID char(2) default NULL,
//   CURRENCY char(3) default NULL,
//   `NAME` varchar(255) NOT NULL,
//   ACTIVE char(1) NOT NULL default 'Y',
//   SORT int(11) NOT NULL default '100',
//   DESCRIPTION varchar(250) default NULL,
//   PRIMARY KEY  (ID),
//   KEY IXS_PAY_SYSTEM_LID (LID)
// ) ENGINE=MyISAM  DEFAULT CHARSET=cp1251 AUTO_INCREMENT=5 ;

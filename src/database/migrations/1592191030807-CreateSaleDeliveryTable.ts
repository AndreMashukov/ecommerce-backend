import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey
} from 'typeorm';

export class CreateSaleDeliveryTable1592191030807
  implements MigrationInterface {
  public saleDeliveryTable = new Table({
    name: 'b_sale_delivery',
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
        name: 'period_from',
        type: 'int',
        length: '11',
        isNullable: true
      },
      {
        name: 'period_to',
        type: 'int',
        length: '11',
        isNullable: true
      },
      {
        name: 'period_type',
        type: 'char',
        length: '1',
        isNullable: true
      },
      {
        name: 'weight_from',
        type: 'int',
        length: '11',
        isNullable: true
      },
      {
        name: 'weight_to',
        type: 'int',
        length: '11',
        isNullable: true
      },
      {
        name: 'order_price_from',
        type: 'decimal',
        length: '18,2',
        isNullable: true
      },
      {
        name: 'order_price_to',
        type: 'decimal',
        length: '18,2',
        isNullable: true
      },
      {
        name: 'order_currency',
        type: 'char',
        length: '3',
        isNullable: true
      },
      {
        name: 'active',
        type: 'char',
        length: '1',
        isNullable: false
      },
      {
        name: 'price',
        type: 'decimal',
        length: '18,2',
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
    name: 'fk_sale_order_delivery_id',
    columnNames: ['delivery_id'],
    referencedColumnNames: ['id'],
    referencedTableName: 'b_sale_delivery',
    onDelete: 'CASCADE'
  });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.createTable(this.saleDeliveryTable);
    await queryRunner.createForeignKey(
      'b_sale_order',
      this.tableForeignKeyForOrder
    );
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.dropTable(this.saleDeliveryTable);
  }
}

// CREATE TABLE IF NOT EXISTS b_sale_delivery (
//   ID int(11) NOT NULL auto_increment,
//   `NAME` varchar(255) NOT NULL,
//   LID char(2) NOT NULL,
//   PERIOD_FROM int(11) default NULL,
//   PERIOD_TO int(11) default NULL,
//   PERIOD_TYPE char(1) default NULL,
//   WEIGHT_FROM int(11) default NULL,
//   WEIGHT_TO int(11) default NULL,
//   ORDER_PRICE_FROM decimal(18,2) default NULL,
//   ORDER_PRICE_TO decimal(18,2) default NULL,
//   ORDER_CURRENCY char(3) default NULL,
//   ACTIVE char(1) NOT NULL default 'Y',
//   PRICE decimal(18,2) NOT NULL,
//   CURRENCY char(3) NOT NULL,
//   SORT int(11) NOT NULL default '100',
//   DESCRIPTION varchar(250) default NULL,
//   PRIMARY KEY  (ID),
//   KEY IXS_DELIVERY_LID (LID)
// ) ENGINE=MyISAM  DEFAULT CHARSET=cp1251 AUTO_INCREMENT=4

import { MigrationInterface, QueryRunner, Table, TableIndex } from 'typeorm';

export class CreateSaleBasketTable1585046049206 implements MigrationInterface {
  public saleBasketTable = new Table({
    name: 'b_sale_basket',
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
        name: 'session_id',
        type: 'varchar',
        length: '255',
        isNullable: false
      },
      {
        name: 'order_id',
        type: 'int',
        // length: '11',
        isNullable: true
      },
      {
        name: 'user_id',
        type: 'varchar',
        length: '255',
        isNullable: true
      },
      {
        name: 'iblock_id',
        type: 'int',
        // length: '11',
        isNullable: false
      },
      {
        name: 'product_id',
        type: 'int',
        // length: '11',
        isNullable: false
      },
      {
        name: 'product_price_id',
        type: 'int',
        // length: '11',
        isNullable: true
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
        isNullable: false
      },
      {
        name: 'weight',
        type: 'decimal',
        length: '18,2',
        isNullable: true
      },
      {
        name: 'quantity',
        type: 'int',
        isNullable: false
      },
      {
        name: 'notes',
        type: 'varchar',
        length: '255',
        isNullable: true
      },
      {
        name: 'detail_page_url',
        type: 'varchar',
        length: '255',
        isNullable: true
      },
      {
        name: 'picture',
        type: 'varchar',
        length: '255',
        isNullable: true
      }
    ]
  });
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public async up(queryRunner: QueryRunner): Promise<any> {
    // await queryRunner.query(`
    //   create table if not exists b_sale_basket (
    //     id int(11) not null auto_increment,
    //     fuser_id int(11) not null,
    //     order_id int(11) default null,
    //     iblock_id int(11) not null,
    //     product_id int(11) not null,
    //     product_price_id int(11) default null,
    //     price decimal(18,2) not null default '0.00',
    //     currency char(3) not null default 'RUB',
    //     weight double(18,2) default null,
    //     quantity double(18,2) not null default '0.00',
    //     can_buy char(1) not null default 'y',
    //     module varchar(100) default null,
    //     callback_func varchar(100) default null,
    //     notes varchar(250) default null,
    //     order_callback_func varchar(100) default null,
    //     detail_page_url varchar(250) default null,
    //     cancel_callback_func varchar(100) default null,
    //     pay_callback_func varchar(100) default null,
    //     catalog_xml_id varchar(100) default null,
    //     product_xml_id varchar(100) default null,
    //     discount_name varchar(255) default null,
    //     discount_value char(32) default null,
    //     discount_coupon char(32) default null,
    //     vat_rate decimal(18,2) default '0.00',
    //     primary key  (id),
    //     key ixs_basket_user_id (fuser_id),
    //     key ixs_basket_order_id (order_id),
    //     key ixs_basket_product_id (product_id),
    //     key ixs_basket_product_price_id (product_price_id),
    //     key ixs_sbas_xml_id (product_xml_id,catalog_xml_id)
    //   ) default charset=cp1251 auto_increment=1;
    //   `);
    await queryRunner.createTable(this.saleBasketTable);
    await queryRunner.createIndex(
      'b_sale_basket',
      new TableIndex({
        name: 'ixs_basket_session_id',
        columnNames: ['session_id']
      })
    );
    await queryRunner.createIndex(
      'b_sale_basket',
      new TableIndex({
        name: 'ixs_basket_order_id',
        columnNames: ['order_id']
      })
    );
    await queryRunner.createIndex(
      'b_sale_basket',
      new TableIndex({
        name: 'ixs_basket_product_id',
        columnNames: ['product_id']
      })
    );

    await queryRunner.createIndex(
      'b_sale_basket',
      new TableIndex({
        name: 'ix_b_sale_basket_unique',
        columnNames: ['session_id', 'product_id', 'iblock_id'],
        isUnique: true
      })
    );
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.dropIndex('b_sale_basket', 'ixs_basket_session_id');
    await queryRunner.dropIndex('b_sale_basket', 'ixs_basket_order_id');
    await queryRunner.dropIndex('b_sale_basket', 'ixs_basket_product_id');
    await queryRunner.dropTable('b_sale_basket');
  }
}

// date_insert datetime not null,
// date_update datetime not null,
// -- lid char(2) not null,
// -- delay char(1) not null default 'n',
// -- name varchar(255) not null,
// -- discount_price decimal(18,2) not null default '0.00',

//  key ixs_basket_lid (lid)

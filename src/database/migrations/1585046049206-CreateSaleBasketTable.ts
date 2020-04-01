import { MigrationInterface, QueryRunner, TableForeignKey } from 'typeorm';

export class CreateSaleBasketTable1585046049206 implements MigrationInterface {
  private foreignKeyForBasket = new TableForeignKey({
    name: 'fk_sale_basket_sales_fuser',
    columnNames: ['fuser_id'],
    referencedColumnNames: ['id'],
    referencedTableName: 'b_sale_fuser',
    onDelete: 'CASCADE',
  });

  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(`
      create table if not exists b_sale_basket (
        id int(11) not null auto_increment,
        fuser_id int(11) not null,
        order_id int(11) default null,
        iblock_id int(11) not null,
        product_id int(11) not null,
        product_price_id int(11) default null,
        price decimal(18,2) not null default '0.00',
        currency char(3) not null default 'RUB',
        weight double(18,2) default null,
        quantity double(18,2) not null default '0.00',
        can_buy char(1) not null default 'y',
        module varchar(100) default null,
        callback_func varchar(100) default null,
        notes varchar(250) default null,
        order_callback_func varchar(100) default null,
        detail_page_url varchar(250) default null,
        cancel_callback_func varchar(100) default null,
        pay_callback_func varchar(100) default null,
        catalog_xml_id varchar(100) default null,
        product_xml_id varchar(100) default null,
        discount_name varchar(255) default null,
        discount_value char(32) default null,
        discount_coupon char(32) default null,
        vat_rate decimal(18,2) default '0.00',
        primary key  (id),
        key ixs_basket_user_id (fuser_id),
        key ixs_basket_order_id (order_id),
        key ixs_basket_product_id (product_id),
        key ixs_basket_product_price_id (product_price_id),
        key ixs_sbas_xml_id (product_xml_id,catalog_xml_id)
      ) default charset=cp1251 auto_increment=1;
      `);
    await queryRunner.createForeignKey('b_sale_basket', this.foreignKeyForBasket);
    await queryRunner.query(`
      CREATE OR REPLACE VIEW bitrix.view_sale_basket as
      select *, (select name
        from bitrix.b_iblock_element
          where iblock_id = t1.iblock_id
          and id = t1.product_id) as name
      from bitrix.b_sale_basket t1
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.dropTable('b_sale_basket');
    await queryRunner.dropForeignKey('b_sale_basket', this.foreignKeyForBasket);
    await queryRunner.dropView('view_sale_basket');
  }
}

// date_insert datetime not null,
// date_update datetime not null,
// -- lid char(2) not null,
// -- delay char(1) not null default 'n',
// -- name varchar(255) not null,
// -- discount_price decimal(18,2) not null default '0.00',

//  key ixs_basket_lid (lid)

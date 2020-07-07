import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableIndex,
  TableForeignKey
} from 'typeorm';

export class CreateOrderTable1590818910889 implements MigrationInterface {
  public orderTable = new Table({
    name: 'b_sale_order',
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
        name: 'user_id',
        type: 'varchar',
        length: '255',
        isNullable: false
      },
      {
        name: 'status_id',
        type: 'char',
        length: '1',
        isNullable: false
      },
      {
        name: 'date_status',
        type: 'timestamp',
        isNullable: false
      },
      {
        name: 'date_insert',
        type: 'timestamp',
        isNullable: false
      },
      {
        name: 'date_update',
        type: 'timestamp',
        isNullable: false
      },
      {
        name: 'price',
        type: 'decimal',
        length: '18,2',
        isNullable: false
      },
      {
        name: 'user_description',
        type: 'varchar',
        length: '255',
        isNullable: true
      },
      {
        name: 'pay_system_id',
        type: 'int',
        // length: '11',
        isNullable: true
      },
      {
        name: 'delivery_id',
        type: 'int',
        // length: '11',
        isNullable: false
      },
      {
        name: 'props',
        type: 'json',
        isNullable: true
      },
      {
        name: 'payed',
        type: 'char',
        length: '1',
        isNullable: false
      },
      {
        name: 'date_payed',
        type: 'timestamp',
        isNullable: true
      }
    ]
  });

  private tableForeignKeyForOrder = new TableForeignKey({
    name: 'fk_sale_order_user_id',
    columnNames: ['user_id'],
    referencedColumnNames: ['id'],
    referencedTableName: 'b_user',
    onDelete: 'CASCADE'
  });
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.createTable(this.orderTable);
    // await queryRunner.query(
    //   `ALTER TABLE b_sale_order MODIFY id INT AUTO_INCREMENT;`
    // );
    await queryRunner.createForeignKey(
      'b_sale_order',
      this.tableForeignKeyForOrder
    );
    await queryRunner.createIndex(
      'b_sale_order',
      new TableIndex({
        name: 'ixs_order_user_id',
        columnNames: ['user_id']
      })
    );
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.dropIndex('b_sale_order', 'ixs_order_user_id');
    await queryRunner.dropTable('b_sale_order');
  }
}

// CREATE TABLE IF NOT EXISTS b_sale_order (
//   ID int(11) NOT NULL auto_increment,
//   LID char(2) NOT NULL,
//   PERSON_TYPE_ID int(11) NOT NULL,
//   PAYED char(1) NOT NULL default 'N',
//   DATE_PAYED time default NULL,
//   EMP_PAYED_ID int(11) default NULL,
//   CANCELED char(1) NOT NULL default 'N',
//   DATE_CANCELED time default NULL,
//   EMP_CANCELED_ID int(11) default NULL,
//   REASON_CANCELED varchar(255) default NULL,
//   STATUS_ID char(1) NOT NULL default 'N',
//   DATE_STATUS time NOT NULL,
//   EMP_STATUS_ID int(11) default NULL,
//   PRICE_DELIVERY decimal(18,2) NOT NULL,
//   ALLOW_DELIVERY char(1) NOT NULL default 'N',
//   DATE_ALLOW_DELIVERY time default NULL,
//   EMP_ALLOW_DELIVERY_ID int(11) default NULL,
//   PRICE decimal(18,2) NOT NULL,
//   CURRENCY char(3) NOT NULL,
//   DISCOUNT_VALUE decimal(18,2) NOT NULL,
//   USER_ID int(11) NOT NULL,
//   PAY_SYSTEM_ID int(11) default NULL,
//   DELIVERY_ID varchar(50) default NULL,
//   DATE_INSERT time NOT NULL,
//   DATE_UPDATE time NOT NULL,
//   USER_DESCRIPTION varchar(250) default NULL,
//   ADDITIONAL_INFO varchar(255) default NULL,
//   PS_STATUS char(1) default NULL,
//   PS_STATUS_CODE char(5) default NULL,
//   PS_STATUS_DESCRIPTION varchar(250) default NULL,
//   PS_STATUS_MESSAGE varchar(250) default NULL,
//   PS_SUM decimal(18,2) default NULL,
//   PS_CURRENCY char(3) default NULL,
//   PS_RESPONSE_DATE time default NULL,
//   COMMENTS text,
//   TAX_VALUE decimal(18,2) NOT NULL default '0.00',
//   STAT_GID varchar(255) default NULL,
//   SUM_PAID decimal(18,2) NOT NULL default '0.00',
//   RECURRING_ID int(11) default NULL,
//   PAY_VOUCHER_NUM varchar(20) default NULL,
//   PAY_VOUCHER_DATE date default NULL,
//   LOCKED_BY int(11) default NULL,
//   DATE_LOCK time default NULL,
//   RECOUNT_FLAG char(1) NOT NULL default 'Y',
//   AFFILIATE_ID int(11) default NULL,
//   DELIVERY_DOC_NUM varchar(20) default NULL,
//   DELIVERY_DOC_DATE date default NULL,
//   UPDATED_1C char(1) NOT NULL default 'N',
//   PRIMARY KEY  (ID),
//   KEY IXS_ORDER_USER_ID (USER_ID),
//   KEY IXS_ORDER_PERSON_TYPE_ID (PERSON_TYPE_ID),
//   KEY IXS_ORDER_PAYED (PAYED),
//   KEY IXS_ORDER_STATUS_ID (STATUS_ID),
//   KEY IXS_ORDER_REC_ID (RECURRING_ID),
//   KEY IX_SOO_AFFILIATE_ID (AFFILIATE_ID),
//   KEY IXS_ORDER_UPDATED_1C (UPDATED_1C)
// ) ENGINE=MyISAM  DEFAULT CHARSET=cp1251 AUTO_INCREMENT=6785 ;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */

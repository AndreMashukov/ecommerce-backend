import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey
} from 'typeorm';

export class CreateOrderStatusTable1593484294538 implements MigrationInterface {
  public saleOrderStatusTable = new Table({
    name: 'b_sale_status',
    columns: [
      {
        name: 'id',
        type: 'char',
        length: '1',
        isPrimary: true,
        isNullable: false
      },
      {
        name: 'name',
        type: 'varchar',
        length: '255',
        isNullable: false
      }
    ]
  });

  private tableForeignKeyForOrder = new TableForeignKey({
    name: 'fk_sale_order_status_id',
    columnNames: ['status_id'],
    referencedColumnNames: ['id'],
    referencedTableName: 'b_sale_status',
    onDelete: 'CASCADE'
  });

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(this.saleOrderStatusTable);
    await queryRunner.createForeignKey(
      'b_sale_order',
      this.tableForeignKeyForOrder
    );
    await queryRunner.query(`
    INSERT INTO b_sale_status (ID, NAME) VALUES
    ('N', 'Принят, ожидается оплата'),
    ('P', 'Оплачен, формируется к отправке'),
    ('F', 'Отправлен');
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('b_sale_status');
  }
}

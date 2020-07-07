import { MigrationInterface, QueryRunner, Table, TableIndex } from 'typeorm';

export class CreateSaleFuserTable1585043806380 implements MigrationInterface {
  public saleSessionTable = new Table({
    name: 'b_sale_session',
    columns: [
      {
        name: 'id',
        type: 'varchar',
        length: '255',
        isPrimary: true,
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
        name: 'user_id',
        type: 'varchar',
        length: '255',
        isNullable: true
      }
    ]
  });
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public async up(queryRunner: QueryRunner): Promise<any> {
    // await queryRunner.query(`
    //   create table if not exists b_sale_fuser (
    //     id int(11) not null auto_increment,
    //     date_insert time not null,
    //     date_update time not null,
    //     user_id int(11) default null,
    //     primary key  (id),
    //     key ix_user_id (user_id)
    //   ) default charset=cp1251 auto_increment=1 ;`);
    await queryRunner.createTable(this.saleSessionTable);
    await queryRunner.createIndex(
      'b_sale_session',
      new TableIndex({
        name: 'ix_user_id',
        columnNames: ['user_id']
      })
    );
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.dropIndex('b_sale_session', 'ix_user_id');
    await queryRunner.dropTable('b_sale_session');
  }
}

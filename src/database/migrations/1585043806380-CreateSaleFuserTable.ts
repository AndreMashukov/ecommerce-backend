import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateSaleFuserTable1585043806380 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(`
      create table if not exists b_sale_fuser (
        id int(11) not null auto_increment,
        date_insert datetime not null,
        date_update datetime not null,
        user_id int(11) default null,
        primary key  (id),
        key ix_user_id (user_id)
      ) default charset=cp1251 auto_increment=1 ;`);
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.dropTable('b_sale_fuser');
  }
}

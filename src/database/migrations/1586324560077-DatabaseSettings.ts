import { MigrationInterface, QueryRunner } from 'typeorm';

export class DatabaseSettings1586324560077 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    // await queryRunner.query(`
    //   ALTER DATABASE bitrix
    //     CHARACTER SET cp1251
    //     COLLATE cp1251_general_ci
    // `);

    // await queryRunner.query(`
    //   SET SESSION time_zone = "+3:00";
    // `);

    await queryRunner.query(`SELECT 1`);
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(`SELECT 1`);
  }
}

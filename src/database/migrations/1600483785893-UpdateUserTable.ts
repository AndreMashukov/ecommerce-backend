import { MigrationInterface, QueryRunner } from 'typeorm';

export class UpdateUserTable1600483785893 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE b_user ADD COLUMN metadata json`);
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public async down(queryRunner: QueryRunner): Promise<void> {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
  }
}

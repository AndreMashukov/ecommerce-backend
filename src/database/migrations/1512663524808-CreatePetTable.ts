import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreatePetTable1512663524808 implements MigrationInterface {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public async up(queryRunner: QueryRunner): Promise<any> {
    const table = new Table({
      name: 'pet',
      columns: [
        {
          name: 'id',
          type: 'varchar',
          length: '255',
          isPrimary: true,
          isNullable: false
        },
        {
          name: 'name',
          type: 'varchar',
          length: '255',
          isPrimary: false,
          isNullable: false
        },
        {
          name: 'age',
          type: 'int',
          isPrimary: false,
          isNullable: false
        },
        {
          name: 'user_id',
          type: 'varchar',
          length: '255',
          isPrimary: false,
          isNullable: true
        }
      ]
    });
    await queryRunner.createTable(table);
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.dropTable('pet');
  }
}

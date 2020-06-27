import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateUserTable1511105183653 implements MigrationInterface {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public async up(queryRunner: QueryRunner): Promise<any> {
    const table = new Table({
      name: 'user',
      columns: [
        {
          name: 'id',
          type: 'varchar',
          length: '255',
          isPrimary: true,
          isNullable: false
        },
        {
          name: 'first_name',
          type: 'varchar',
          length: '255',
          isPrimary: false,
          isNullable: false
        },
        {
          name: 'last_name',
          type: 'varchar',
          length: '255',
          isPrimary: false,
          isNullable: false
        },
        {
          name: 'email',
          type: 'varchar',
          length: '255',
          isPrimary: false,
          isNullable: false
        },
        {
          name: 'username',
          type: 'varchar',
          length: '255',
          isPrimary: false,
          isNullable: false
        },
        {
          name: 'password',
          type: 'varchar',
          length: '255',
          isPrimary: false,
          isNullable: false
        }
      ]
    });
    await queryRunner.createTable(table);
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.dropTable('user');
  }
}

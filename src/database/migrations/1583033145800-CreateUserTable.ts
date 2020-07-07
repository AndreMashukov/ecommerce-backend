import { MigrationInterface, QueryRunner, Table, TableIndex } from 'typeorm';

export class CreateUserTable1583033145800 implements MigrationInterface {
  public userTable = new Table({
    name: 'b_user',
    columns: [
      {
        name: 'id',
        type: 'varchar',
        length: '255',
        isPrimary: true,
        isNullable: false
      },
      {
        name: 'timestamp_x',
        type: 'timestamp',
        isNullable: false
      },
      {
        name: 'password',
        type: 'varchar',
        length: '255',
        isNullable: false
      },
      {
        name: 'checkword',
        type: 'varchar',
        length: '50',
        isNullable: true
      },
      {
        name: 'active',
        type: 'char',
        length: '1',
        isNullable: false
        // default: 'y',
      },
      {
        name: 'name',
        type: 'varchar',
        length: '50'
      },
      {
        name: 'last_name',
        type: 'varchar',
        length: '50'
      },
      {
        name: 'email',
        type: 'varchar',
        length: '50',
        isNullable: false
      },
      {
        name: 'phone',
        type: 'varchar',
        length: '50',
        isNullable: false
      },
      {
        name: 'last_login',
        type: 'timestamp',
        isNullable: true
      },
      {
        name: 'date_register',
        type: 'timestamp',
        isNullable: false
      },
      {
        name: 'checkword_time',
        type: 'timestamp',
        isNullable: true
      },
      {
        name: 'confirm_code',
        type: 'varchar',
        length: '8',
        isNullable: true
      },
      {
        name: 'time_zone',
        type: 'varchar',
        length: '50',
        isNullable: true
      },
      {
        name: 'group_id',
        type: 'int',
        // length: '11',
        isNullable: false
      },
      {
        name: 'refresh_token',
        type: 'varchar',
        length: '500',
        isNullable: true
      }
    ]
  });
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.createTable(this.userTable);

    await queryRunner.createIndex(
      'b_user',
      new TableIndex({
        name: 'ix_b_user_email',
        columnNames: ['email']
      })
    );

    await queryRunner.createIndex(
      'b_user',
      new TableIndex({
        name: 'ix_b_user_unique',
        columnNames: ['email'],
        isUnique: true
      })
    );
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.dropTable('b_user');
    await queryRunner.dropIndex('b_user', 'ix_b_user_email');
    await queryRunner.dropIndex('b_user', 'ix_b_user_unique');
  }
}

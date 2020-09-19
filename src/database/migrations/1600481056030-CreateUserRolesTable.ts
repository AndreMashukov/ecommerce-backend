import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey
} from 'typeorm';

export class CreateUserRolesTable1600481056030 implements MigrationInterface {
  public userRolesTable = new Table({
    name: 'b_user_group',
    columns: [
      {
        name: 'id',
        type: 'int',
        isPrimary: true,
        isNullable: false,
        isGenerated: true,
        generationStrategy: 'increment'
      },
      {
        name: 'name',
        type: 'varchar',
        length: '255',
        isNullable: false
      }
    ]
  });

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(this.userRolesTable);
    await queryRunner.createForeignKey('b_user', this.tableForeignKey);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('b_user', this.tableForeignKey);
    await queryRunner.dropTable('b_user_group');
  }
}

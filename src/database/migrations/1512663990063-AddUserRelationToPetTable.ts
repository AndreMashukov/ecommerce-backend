import { MigrationInterface, QueryRunner, TableForeignKey } from 'typeorm';

export class AddUserRelationToPetTable1512663990063
  implements MigrationInterface {
  private tableForeignKey = new TableForeignKey({
    name: 'fk_user_pet',
    columnNames: ['user_id'],
    referencedColumnNames: ['id'],
    referencedTableName: 'user',
    onDelete: 'CASCADE'
  });
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.createForeignKey('pet', this.tableForeignKey);
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.dropForeignKey('pet', this.tableForeignKey);
  }
}

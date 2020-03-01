import { MigrationInterface, QueryRunner, TableForeignKey } from 'typeorm';

export class AddBlockRelationToSection1583042676400 implements MigrationInterface {
  private tableForeignKey = new TableForeignKey({
    name: 'fk_iblock_section_iblock',
    columnNames: ['iblock_id'],
    referencedColumnNames: ['id'],
    referencedTableName: 'b_iblock',
    onDelete: 'CASCADE',
  });

  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.createForeignKey('b_iblock_section', this.tableForeignKey);
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.dropForeignKey('b_iblock_section', this.tableForeignKey);
  }
}

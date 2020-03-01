import { MigrationInterface, QueryRunner, TableForeignKey } from 'typeorm';

export class AddBlockElementRelations1583049585722 implements MigrationInterface {
  private tableForeignKeyForIBlock = new TableForeignKey({
    name: 'fk_iblock_element_iblock',
    columnNames: ['iblock_id'],
    referencedColumnNames: ['id'],
    referencedTableName: 'b_iblock',
    onDelete: 'CASCADE',
  });

  private tableForeignKeyForIBlockSection = new TableForeignKey({
    name: 'fk_iblock_element_iblock_section',
    columnNames: ['iblock_section_id'],
    referencedColumnNames: ['id'],
    referencedTableName: 'b_iblock_section',
    onDelete: 'CASCADE',
  });

  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.createForeignKey('b_iblock_element', this.tableForeignKeyForIBlock);
    await queryRunner.createForeignKey('b_iblock_element', this.tableForeignKeyForIBlockSection);
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.dropForeignKey('b_iblock_element', this.tableForeignKeyForIBlock);
    await queryRunner.dropForeignKey('b_iblock_element', this.tableForeignKeyForIBlockSection);
  }
}

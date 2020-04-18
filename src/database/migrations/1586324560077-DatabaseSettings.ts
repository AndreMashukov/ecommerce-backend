import { MigrationInterface, QueryRunner, TableForeignKey, TableIndex } from 'typeorm';

export class DatabaseSettings1586324560077 implements MigrationInterface {
  private tableForeignKey = new TableForeignKey({
    name: 'fk_iblock_section_iblock',
    columnNames: ['iblock_id'],
    referencedColumnNames: ['id'],
    referencedTableName: 'b_iblock',
    onDelete: 'CASCADE',
  });

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

  private foreignKeyForElement = new TableForeignKey({
    name: 'fk_iblock_element_property_iblock_element',
    columnNames: ['iblock_element_id'],
    referencedColumnNames: ['id'],
    referencedTableName: 'b_iblock_element',
    onDelete: 'CASCADE',
  });

  private foreignKeyForProperty = new TableForeignKey({
    name: 'fk_iblock_element_property_iblock_property',
    columnNames: ['iblock_property_id'],
    referencedColumnNames: ['id'],
    referencedTableName: 'b_iblock_property',
    onDelete: 'CASCADE',
  });

  private foreignKeyForBasket = new TableForeignKey({
    name: 'fk_sale_basket_sales_fuser',
    columnNames: ['fuser_id'],
    referencedColumnNames: ['id'],
    referencedTableName: 'b_sale_fuser',
    onDelete: 'CASCADE',
  });

  private tableForeignKeyForIBlockProperty = new TableForeignKey({
    name: 'fk_iblock_property_iblock',
    columnNames: ['iblock_id'],
    referencedColumnNames: ['id'],
    referencedTableName: 'b_iblock',
    onDelete: 'CASCADE',
  });

  // private foreignKeyForSectionCategory1 = new TableForeignKey({
  //   name: 'fk_iblock_section_category_1',
  //   columnNames: ['iblock_id', 'iblock_section_id'],
  //   referencedColumnNames: ['iblock_id', 'id'],
  //   referencedTableName: 'b_iblock_section',
  //   onDelete: 'CASCADE',
  // });

  private foreignKeyForSectionCategory2 = new TableForeignKey({
    name: 'fk_iblock_section_category_2',
    columnNames: ['category_id'],
    referencedColumnNames: ['id'],
    referencedTableName: 'b_iblock_category',
    onDelete: 'CASCADE',
  });

  public async up(queryRunner: QueryRunner): Promise<any> {
    // await queryRunner.query(`
    //   ALTER DATABASE bitrix
    //     CHARACTER SET cp1251
    //     COLLATE cp1251_general_ci
    // `);

    // await queryRunner.query(`
    //   SET SESSION time_zone = "+3:00";
    // `);
    // await queryRunner.query(`ALTER TABLE b_user MODIFY id INT AUTO_INCREMENT;`);
    // await queryRunner.query(`ALTER TABLE b_iblock MODIFY id INT AUTO_INCREMENT;`);
    // await queryRunner.query(`ALTER TABLE b_iblock_element MODIFY id INT AUTO_INCREMENT;`);
    // await queryRunner.query(`ALTER TABLE b_iblock_element_property MODIFY id INT AUTO_INCREMENT;`);
    // await queryRunner.query(`ALTER TABLE b_iblock_property MODIFY id INT AUTO_INCREMENT;`);
    // await queryRunner.query(`ALTER TABLE b_iblock_section MODIFY id INT AUTO_INCREMENT;`);
    // await queryRunner.query(`ALTER TABLE b_iblock_section_category MODIFY id INT AUTO_INCREMENT;`);
    // await queryRunner.query(`ALTER TABLE b_iblock_category MODIFY id INT AUTO_INCREMENT;`);
    // await queryRunner.query(`ALTER TABLE b_sale_fuser MODIFY id INT AUTO_INCREMENT;`);
    // await queryRunner.query(`ALTER TABLE b_sale_basket MODIFY id INT AUTO_INCREMENT;`);

    await queryRunner.query(`SELECT 1`);
    await queryRunner.createForeignKey('b_iblock_section', this.tableForeignKey);
    await queryRunner.createForeignKey('b_iblock_element', this.tableForeignKeyForIBlock);
    await queryRunner.createForeignKey('b_iblock_element', this.tableForeignKeyForIBlockSection);
    await queryRunner.createForeignKey('b_iblock_property', this.tableForeignKeyForIBlockProperty);
    await queryRunner.createForeignKey('b_iblock_element_property', this.foreignKeyForElement);
    await queryRunner.createForeignKey('b_iblock_element_property', this.foreignKeyForProperty);
    await queryRunner.createForeignKey('b_sale_basket', this.foreignKeyForBasket);
    // await queryRunner.createForeignKey('b_iblock_section_category', this.foreignKeyForSectionCategory1);
    await queryRunner.createForeignKey('b_iblock_section_category', this.foreignKeyForSectionCategory2);

    await queryRunner.createIndex('b_iblock_section_category', new TableIndex({
      name: 'ix_iblock_property_iblock_unique',
      columnNames: ['iblock_id', 'iblock_section_id', 'category_id'],
      isUnique: true,
    }));
  }

  public async down(queryRunner: QueryRunner): Promise<any> {

    await queryRunner.query(`SELECT 1`);
    await queryRunner.dropForeignKey('b_iblock_section', this.tableForeignKey);
    await queryRunner.dropForeignKey('b_iblock_element', this.tableForeignKeyForIBlock);
    await queryRunner.dropForeignKey('b_iblock_element', this.tableForeignKeyForIBlockSection);
    await queryRunner.dropForeignKey('b_iblock_property', this.tableForeignKeyForIBlockProperty);
    await queryRunner.dropForeignKey('b_iblock_element_property', this.foreignKeyForElement);
    await queryRunner.dropForeignKey('b_iblock_element_property', this.foreignKeyForProperty);
    await queryRunner.dropForeignKey('b_sale_basket', this.foreignKeyForBasket);
  }
}

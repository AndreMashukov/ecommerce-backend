import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateViews1586672603867 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(`
      CREATE OR REPLACE VIEW bitrix.view_iblock_section AS
      select *, (select code from bitrix.b_iblock_section where iblock_id = t1.iblock_id and id = t1.iblock_section_id) as parent_code
      from bitrix.b_iblock_section t1
    `);
    await queryRunner.query(`
      CREATE OR REPLACE VIEW bitrix.view_iblock_element_property
      AS
      SELECT ep.id, ep.iblock_property_id, ep.iblock_element_id,
        ep.value, p.name
      FROM bitrix.b_iblock_element_property ep
      LEFT JOIN  bitrix.b_iblock_property p
      ON (ep.iblock_property_id = p.id)
      LEFT JOIN bitrix.b_iblock_element e
      ON (ep.iblock_element_id = e.id)
      AND (e.iblock_id = p.iblock_id)
    `);
    await queryRunner.query(`
      CREATE OR REPLACE VIEW bitrix.view_sale_basket as
      select *, (select name
        from bitrix.b_iblock_element
          where iblock_id = t1.iblock_id
          and id = t1.product_id) as name
      from bitrix.b_sale_basket t1
    `);
    await queryRunner.query(`SELECT 1`);
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.dropView('view_iblock_section');
    await queryRunner.dropView('view_iblock_element_property');
    await queryRunner.dropView('view_sale_basket');
    await queryRunner.query(`SELECT 1`);
  }
}

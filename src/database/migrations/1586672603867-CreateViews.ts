import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateViews1586672603867 implements MigrationInterface {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(`
      CREATE VIEW view_iblock_section AS
      select *,
      (select code from b_iblock_section
        where iblock_id = t1.iblock_id
              and id = t1.iblock_section_id) as parent_code,
          (select category_id from b_iblock_section_category
        where iblock_id = t1.iblock_id
              and iblock_section_id = t1.id) as category_id,
          (select name from b_iblock_category b1
        inner join b_iblock_section_category b2
              on (b1.id = b2.category_id)
        where b2.iblock_id = t1.iblock_id
              and b2.iblock_section_id = t1.id) as category_name
        from b_iblock_section t1
    `);
    await queryRunner.query(`
      CREATE VIEW view_iblock_element_property
      AS
      SELECT ep.id, ep.iblock_property_id, ep.iblock_element_id,
        ep.value, p.name
      FROM b_iblock_element_property ep
      LEFT JOIN b_iblock_property p
      ON (ep.iblock_property_id = p.id)
      LEFT JOIN b_iblock_element e
      ON (ep.iblock_element_id = e.id)
      AND (e.iblock_id = p.iblock_id)
    `);
    await queryRunner.query(`
      CREATE VIEW view_sale_basket as
      select *,
      (select name
      from b_iblock_element
        where iblock_id = t1.iblock_id
        and id = t1.product_id) as name,
        (select value
        from view_iblock_element_property
        where iblock_element_id = t1.product_id
        and iblock_property_id = 18) as package_type,
      (select value
        from view_iblock_element_property
        where iblock_element_id = t1.product_id
        and iblock_property_id = 16) as sku_code
      from b_sale_basket t1
    `);
    // await queryRunner.query(`SELECT 1`);
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.dropView('view_iblock_section');
    await queryRunner.dropView('view_iblock_element_property');
    await queryRunner.dropView('view_sale_basket');
    // await queryRunner.query(`SELECT 1`);
  }
}

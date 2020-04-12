import { MigrationInterface, QueryRunner } from 'typeorm';

export class InsertIBlockProperty1583053427526 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(`
    INSERT INTO b_iblock_property (ID, TIMESTAMP_X, IBLOCK_ID, NAME, ACTIVE, SORT, CODE, DEFAULT_VALUE, PROPERTY_TYPE, ROW_COUNT, COL_COUNT, LIST_TYPE, MULTIPLE, XML_ID, FILE_TYPE, MULTIPLE_CNT, TMP_ID, LINK_IBLOCK_ID, WITH_DESCRIPTION, SEARCHABLE, FILTRABLE, IS_REQUIRED, VERSION, USER_TYPE, USER_TYPE_SETTINGS, HINT) VALUES
    (13, '2011-12-20 09:43:22', 4, 'Спецпредложение', 'Y', 200, 'SPECIALOFFER', '', 'L', 1, 30, 'C', 'Y', NULL, '', 5, NULL, 0, 'N', 'Y', 'Y', 'N', 1, NULL, NULL, NULL),
    (14, '2011-12-20 09:43:22', 4, 'Новинка', 'Y', 210, 'NEWPRODUCT', '', 'L', 1, 30, 'C', 'Y', NULL, '', 5, NULL, 0, 'N', 'Y', 'Y', 'N', 1, NULL, NULL, NULL),
    (15, '2011-12-20 09:43:22', 4, 'Лидер продаж', 'Y', 220, 'SALELEADER', '', 'L', 1, 30, 'C', 'Y', NULL, '', 5, NULL, 0, 'N', 'Y', 'Y', 'N', 1, NULL, NULL, NULL),
    (16, '2011-12-20 09:43:22', 4, 'Артикул', 'Y', 230, 'PROP1', '', 'S', 1, 30, 'L', 'N', NULL, '', 5, NULL, 0, 'N', 'Y', 'Y', 'N', 1, NULL, NULL, NULL),
    (17, '2011-12-20 09:43:22', 4, 'Объем', 'Y', 240, 'PROP2', '', 'S', 1, 30, 'L', 'N', NULL, '', 5, NULL, 0, 'N', 'Y', 'Y', 'N', 1, NULL, NULL, NULL),
    (18, '2011-12-20 09:43:22', 4, 'Упаковка', 'Y', 250, 'PROP3', '', 'S', 1, 30, 'L', 'N', NULL, '', 5, NULL, 0, 'N', 'Y', 'Y', 'N', 1, NULL, NULL, NULL),
    (19, '2011-12-20 09:43:22', 4, 'С этим товаром рекомендуем', 'Y', 990, 'RECOMMEND', '', 'E', 1, 30, 'L', 'Y', NULL, '', 1, NULL, 4, 'Y', 'N', 'N', 'N', 1, NULL, NULL, NULL),
    (20, '2011-12-20 09:43:22', 4, 'Картинки', 'Y', 1000, 'MORE_PHOTO', '', 'F', 1, 30, 'L', 'Y', NULL, 'jpg,gif,bmp,png,jpeg', 1, NULL, 0, 'Y', 'N', 'N', 'N', 1, NULL, NULL, NULL),
    (21, '2011-12-20 09:43:22', 4, 'Минимальная цена', 'Y', 1100, 'MINIMUM_PRICE', '', 'N', 1, 30, 'L', 'N', NULL, '', 1, NULL, 0, 'N', 'N', 'N', 'N', 1, NULL, NULL, NULL),
    (22, '2011-12-20 09:43:22', 4, 'Максимальная цена', 'Y', 1200, 'MAXIMUM_PRICE', '', 'N', 1, 30, 'L', 'N', NULL, '', 1, NULL, 0, 'N', 'N', 'N', 'N', 1, NULL, NULL, NULL);
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.clearTable('b_iblock_property');
  }
}

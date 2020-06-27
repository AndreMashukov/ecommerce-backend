import { MigrationInterface, QueryRunner } from 'typeorm';

export class InsertIBlockTable1583041768565 implements MigrationInterface {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(`
    INSERT INTO b_iblock (ID, TIMESTAMP_X, IBLOCK_TYPE_ID, LID, CODE, NAME, ACTIVE, SORT, LIST_PAGE_URL, DETAIL_PAGE_URL, SECTION_PAGE_URL, PICTURE, DESCRIPTION, DESCRIPTION_TYPE, RSS_TTL, RSS_ACTIVE, RSS_FILE_ACTIVE, RSS_FILE_LIMIT, RSS_FILE_DAYS, RSS_YANDEX_ACTIVE, XML_ID, TMP_ID, INDEX_ELEMENT, INDEX_SECTION, WORKFLOW, BIZPROC, SECTION_CHOOSER, LIST_MODE, VERSION, LAST_CONV_ELEMENT, SOCNET_GROUP_ID, EDIT_FILE_BEFORE, EDIT_FILE_AFTER, SECTIONS_NAME, SECTION_NAME, ELEMENTS_NAME, ELEMENT_NAME, RIGHTS_MODE) VALUES
    (1, '2011-07-30 10:24:04', 'news', 's1', 'news', 'Новости', 'Y', 500, '#SITE_DIR#/news/', '#SITE_DIR#/news/#ELEMENT_CODE#/', NULL, NULL, NULL, 'text', 24, 'Y', 'N', NULL, NULL, 'N', 'furniture_news_s1', NULL, 'Y', 'N', 'N', 'N', NULL, NULL, 1, 0, NULL, NULL, NULL, 'Разделы', 'Раздел', 'Новости', 'Новость', NULL),
    (2, '2011-07-30 10:24:04', 'services', 's1', 'faq', 'Помощь покупателю', 'Y', 500, '#SITE_DIR#/about/faq/', '#SITE_DIR#/about/faq/##ID#', '#SITE_DIR#/about/faq/', NULL, NULL, 'text', 24, 'Y', 'N', NULL, NULL, 'N', 'faq_s1', NULL, 'Y', 'Y', 'N', 'N', NULL, NULL, 1, 0, NULL, NULL, NULL, 'Разделы', 'Раздел', 'Вопросы', 'Вопрос', NULL),
    (4, '2011-12-20 10:05:06', 'catalog', 's1', 'mirra', 'Косметика MIRRA', 'Y', 500, '#SITE_DIR#/catalog/#IBLOCK_CODE#/', '#SITE_DIR#/catalog/#IBLOCK_CODE#/#SECTION_CODE#/#ELEMENT_CODE#/', '#SITE_DIR#/catalog/#IBLOCK_CODE#/#SECTION_CODE#/', 145, 'Каталог Мирра', 'text', 24, 'Y', 'N', NULL, NULL, 'N', NULL, NULL, 'Y', 'Y', 'N', 'N', 'L', '', 1, 0, NULL, '', '', 'Разделы', 'Раздел', 'Товары', 'Товар', 'S');
    `);
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.clearTable('b_iblock');
  }
}

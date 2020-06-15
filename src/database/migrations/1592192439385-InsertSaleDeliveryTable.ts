import { MigrationInterface, QueryRunner } from 'typeorm';

export class InsertSaleDeliveryTable1592192439385
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(`
    INSERT INTO b_sale_delivery (ID, NAME, LID, PERIOD_FROM, PERIOD_TO, PERIOD_TYPE, WEIGHT_FROM, WEIGHT_TO, ORDER_PRICE_FROM, ORDER_PRICE_TO, ORDER_CURRENCY, ACTIVE, PRICE, CURRENCY, SORT, DESCRIPTION, REGIONS) VALUES
    (1, 'Доставка курьером', 's1', 1, 2, 'D', 0, 0, 0.00, 999.99, 'RUB', 'Y', 200.00, 'RUB', 100, 'Без выходных в удобное для Вас время', '{"values": ["10", "20"]}'),
    (2, 'Почта России', 's1', 8, 19, 'D', 0, 0, 0.00, 999.99, 'RUB', 'Y', 400.00, 'RUB', 200, 'Доставка возможна ТОЛЬКО после 100% предоплаты.', '{"values": ["30"]}'),
    (3, 'Бесплатная доставка курьером', 's1', 1, 2, 'D', 0, 0, 1000.00, 0.00, 'RUB', 'Y', 0.00, 'RUB', 300, 'Без выходных в удобное для Вас время', '{"values": ["10", "20"]}'),
    (4, 'Почта России (Бесплатно!)', 's1', 8, 19, 'D', 0, 0, 3000.00, 0.00, 'RUB', 'Y', 0.00, 'RUB', 400, 'Доставка возможна ТОЛЬКО после 100% предоплаты.', '{"values": ["30"]}');
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.clearTable('b_sale_delivery');
  }
}

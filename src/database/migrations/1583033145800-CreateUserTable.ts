import { MigrationInterface, QueryRunner, Table, TableIndex } from 'typeorm';

export class CreateUserTable1583033145800 implements MigrationInterface {
  public userTable = new Table({
    name: 'b_user',
    columns: [
      {
        name: 'id',
        type: 'varchar',
        length: '255',
        isPrimary: true,
        isNullable: false
      },
      {
        name: 'timestamp_x',
        type: 'timestamp',
        isNullable: false
      },
      {
        name: 'password',
        type: 'varchar',
        length: '255',
        isNullable: false
      },
      {
        name: 'checkword',
        type: 'varchar',
        length: '50',
        isNullable: true
      },
      {
        name: 'active',
        type: 'char',
        length: '1',
        isNullable: false
        // default: 'y',
      },
      {
        name: 'name',
        type: 'varchar',
        length: '50'
      },
      {
        name: 'last_name',
        type: 'varchar',
        length: '50'
      },
      {
        name: 'email',
        type: 'varchar',
        length: '50',
        isNullable: false
      },
      {
        name: 'phone',
        type: 'varchar',
        length: '50',
        isNullable: false
      },
      {
        name: 'last_login',
        type: 'datetime',
        isNullable: true
      },
      {
        name: 'date_register',
        type: 'datetime',
        isNullable: false
      },
      {
        name: 'checkword_time',
        type: 'datetime',
        isNullable: true
      },
      {
        name: 'confirm_code',
        type: 'varchar',
        length: '8',
        isNullable: true
      },
      {
        name: 'time_zone',
        type: 'varchar',
        length: '50',
        isNullable: true
      },
      {
        name: 'group_id',
        type: 'int',
        length: '11',
        isNullable: false
      },
      {
        name: 'refresh_token',
        type: 'varchar',
        length: '500',
        isNullable: true
      }
    ]
  });
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.createTable(this.userTable);

    await queryRunner.createIndex(
      'b_user',
      new TableIndex({
        name: 'ix_b_user_email',
        columnNames: ['email']
      })
    );

    await queryRunner.createIndex(
      'b_user',
      new TableIndex({
        name: 'ix_b_user_unique',
        columnNames: ['email'],
        isUnique: true
      })
    );

    //   await queryRunner.query(`create table if not exists b_user (
    //     id int(18) not null auto_increment,
    //     timestamp_x timestamp not null default current_timestamp on update current_timestamp,
    //     password varchar(50) not null,
    //     checkword varchar(50) default null,
    //     active char(1) not null default 'y',
    //     name varchar(50) default null,
    //     last_name varchar(50) default null,
    //     email varchar(255) not null,
    //     last_login datetime default null,
    //     date_register datetime not null,
    //     stored_hash varchar(32) default null,
    //     external_auth_id varchar(255) default null,
    //     checkword_time datetime default null,
    //     confirm_code varchar(8) default null,
    //     login_attempts int(18) default null,
    //     last_activity_date datetime default null,
    //     auto_time_zone char(1) default null,
    //     time_zone varchar(50) default null,
    //     primary key (id),
    //     key ix_b_user_email (email),
    //     key ix_b_user_activity_date (last_activity_date),
    //   ) default charset=cp1251 auto_increment=6897 ;`);
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.dropTable('b_user');
    await queryRunner.dropIndex('b_user', 'ix_b_user_email');
    await queryRunner.dropIndex('b_user', 'ix_b_user_unique');
  }
}

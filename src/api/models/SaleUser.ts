import * as bcrypt from 'bcrypt';
import { Exclude } from 'class-transformer';
import { IsNotEmpty } from 'class-validator';
import { BeforeInsert, Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('b_user')
export class SaleUser {
  public static hashPassword(password: string): Promise<string> {
    return new Promise((resolve, reject) => {
      bcrypt.hash(password, 10, (err, hash) => {
        if (err) {
          return reject(err);
        }
        resolve(hash);
      });
    });
  }

  public static comparePassword(user: SaleUser, password: string): Promise<boolean> {
    return new Promise((resolve, reject) => {
      bcrypt.compare(password, user.password, (err, res) => {
        resolve(res === true);
      });
    });
  }

  @PrimaryColumn('uuid')
  public id: string;

  @IsNotEmpty()
  @Column({ name: 'name' })
  public firstName: string;

  @IsNotEmpty()
  @Column({ name: 'last_name' })
  public lastName: string;

  @IsNotEmpty()
  @Column()
  public email: string;

  @IsNotEmpty()
  @Column()
  public active: string;

  @IsNotEmpty()
  @Column({name: 'timestamp_x'})
  public timestamp: string;

  @IsNotEmpty()
  @Column({name: 'date_register'})
  public dateRegister: string;

  @IsNotEmpty()
  @Column({ name: 'group_id' })
  public groupId: number;

  @IsNotEmpty()
  @Column()
  @Exclude()
  public password: string;

  @IsNotEmpty()
  @Column({name: 'refresh_token'})
  public refreshToken: string;

  public toString(): string {
    return `${this.firstName} ${this.lastName} (${this.email})`;
  }

  @BeforeInsert()
  public async hashPassword(): Promise<void> {
    this.password = await SaleUser.hashPassword(this.password);
  }
}

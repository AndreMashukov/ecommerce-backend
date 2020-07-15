import { IsNotEmpty } from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'b_file' })
export class File {
  @PrimaryGeneratedColumn()
  public id: number;

  @IsNotEmpty()
  @Column({ name: 'file_name' })
  public fileName: string;

  @IsNotEmpty()
  @Column()
  public subdir: string;
}

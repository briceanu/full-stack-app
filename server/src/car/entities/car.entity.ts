import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Car {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 255 })
  brand: string;
  // the length represents the maxLength
  // @Column({ type: 'varchar', length: 255, unique: true })
  // brand: string;

  @Column({ type: 'varchar', length: 255 })
  color: string;

  @Column({ type: 'varchar', length: 255 })
  status: string;

  @Column({ type: 'varchar', length: 255 })
  type: string;

  @Column({ type: 'int' })
  year: number;

  @Column({ type: 'text' })
  description: string;
}

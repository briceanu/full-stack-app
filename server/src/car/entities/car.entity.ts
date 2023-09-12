import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Car {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 255, unique: true })
  brand: string;

  @Column({ type: 'varchar', length: 255 })
  color: string;

  @Column({ type: 'int' })
  year: number;

  @Column({ type: 'text' })
  description: string;
}

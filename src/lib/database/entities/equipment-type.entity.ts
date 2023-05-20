import { Entity, Column } from 'typeorm';
import BaseEntity from './base.entity';

@Entity('equipment_types')
export class EquipmentTypeEntity extends BaseEntity {
  @Column({ name: 'model_number' })
  modelNumber: string;

  @Column({ name: 'model_name' })
  modelName: string;

  @Column()
  description: string;

  @Column()
  length: number;

  @Column()
  width: number;

  @Column()
  height: number;

  @Column()
  weight: number;
}

import { Entity, Column } from 'typeorm';
import BaseEntity from './base.entity';

@Entity('equipment_types')
export class EquipmentTypeEntity extends BaseEntity {
  model_number: string;

  @Column()
  model_name: string;

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

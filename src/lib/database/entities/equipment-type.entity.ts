import { Entity, Column, JoinColumn, OneToOne } from 'typeorm';
import BaseEntity from './base.entity';
import { UserEntity } from './user.entity';

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

  @OneToOne((type) => UserEntity)
  @JoinColumn({ name: 'created_by_user_id' })
  createdBy: UserEntity;

  @OneToOne((type) => UserEntity)
  @JoinColumn({ name: 'updated_by_user_id' })
  updatedBy: UserEntity;
}

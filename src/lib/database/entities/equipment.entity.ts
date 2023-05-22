import { Column, Entity, JoinColumn, OneToMany, OneToOne } from 'typeorm';

import BaseEntity from './base.entity';
import {
  BinEntity,
  EquipmentTypeEntity,
  MovedEquipmentEntity,
  StoreEntity,
  UserEntity,
} from '.';

@Entity('equipments')
export class EquipmentEntity extends BaseEntity {
  @Column({ name: 'serial_number' })
  serialNumber: string;

  @Column({ name: 'purchase_date', type: 'date' })
  purchaseDate: Date;

  @OneToOne((type) => EquipmentTypeEntity)
  @JoinColumn({ name: 'equipment_type_id' })
  equipmentType: EquipmentTypeEntity;

  @OneToOne((type) => BinEntity)
  @JoinColumn({ name: 'bin_id' })
  bin: BinEntity;

  @OneToOne((type) => StoreEntity)
  @JoinColumn({ name: 'store_id' })
  store: StoreEntity;

  @OneToMany(
    () => MovedEquipmentEntity,
    (movedEquipment) => movedEquipment.equipment,
  )
  equipmentMovements: MovedEquipmentEntity[];

  @OneToOne((type) => UserEntity)
  @JoinColumn({ name: 'created_by_user_id' })
  createdBy: UserEntity;

  @OneToOne((type) => UserEntity)
  @JoinColumn({ name: 'updated_by_user_id' })
  updatedBy: UserEntity;
}

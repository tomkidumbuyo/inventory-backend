import { Column, Entity, JoinColumn, OneToMany, OneToOne } from 'typeorm';
import BaseEntity from './base.entity';
import { EquipmentOutMovementEntity } from './equipment-out-movement.entity';
import { MovedEquipmentEntity } from './moved-equipment.entity';
import { UserEntity } from './user.entity';

export enum EquipmentReturnStateEnum {
  GOOD = 'GOOD',
  POOR = 'POOR',
}

export enum EquipmentMovementInTypeEnum {
  NEW = 'NEW',
  RETURN = 'RETURN',
}

@Entity('equipment_in_movements')
export class EquipmentInMovementEntity extends BaseEntity {
  @OneToOne((type) => UserEntity)
  @JoinColumn({ name: 'returned_by_id' })
  returnedBy: UserEntity;

  @OneToOne((type) => UserEntity)
  @JoinColumn({ name: 'equipment_out_movement_id' })
  equipmentOutMovement: EquipmentOutMovementEntity;

  @OneToOne((type) => UserEntity)
  @JoinColumn({ name: 'released_by' })
  releasedBy: UserEntity;

  @Column({ name: 'collection_time' })
  collectionTime: Date;

  @Column({ name: 'Equipment_return_state' })
  EquipmentReturnState: EquipmentReturnStateEnum;

  @Column({ name: 'equipment_movement_type' })
  EquipmentMovementType: EquipmentMovementInTypeEnum;

  @OneToMany(
    () => MovedEquipmentEntity,
    (movedEquipment) => movedEquipment.inMovement,
  )
  movedEquipment: MovedEquipmentEntity[];

  @OneToOne((type) => UserEntity)
  @JoinColumn({ name: 'created_by_user_id' })
  createdBy: UserEntity;

  @OneToOne((type) => UserEntity)
  @JoinColumn({ name: 'updated_by_user_id' })
  updatedBy: UserEntity;
}

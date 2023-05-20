import { Entity, Column, JoinColumn, OneToOne, OneToMany } from 'typeorm';
import UserEntity from './user.entity';
import BaseEntity from './base.entity';
import { MovedEquipmentEntity } from './moved-equipment.entity';

export enum EquipmentMovementOutTypeEnum {
  INTERNAL_EVENT = 'INTERNAL_EVENT',
  REPAIR = 'REPAIR',
  RENTAL = 'RENTAL',
  NEW_EQUIPMENT = 'NEW_EQUIPMENT',
  MOVE = 'MOVE',
  RETIRE = 'RETIRE',
}

export enum EquipmentMovementStageEnum {
  REQUEST = 'REQUEST',
  APPROVED = 'APPROVED',
  COLLECTED = 'COLLECTED',
}



@Entity('equipment_out_movements')
export class EquipmentOutMovementEntity extends BaseEntity {

  @OneToOne((type) => UserEntity)
  @JoinColumn({ name: 'requested_by' })
  requestedBy: UserEntity;

  @OneToOne((type) => UserEntity)
  @JoinColumn({ name: 'approved_by' })
  approvedBy: UserEntity;

  @OneToOne((type) => UserEntity)
  @JoinColumn({ name: 'collected_by' })
  collectedBy: UserEntity;

  @Column({ name: 'request_time' })
  requestTime: Date;

  @Column({ name: 'approval_time' })
  approvalTime: Date;

  @Column({ name: 'collection_time' })
  collectionTime: Date;

  @Column({ name: 'equipment_movement_stage' })
  equipmentMovementStage: EquipmentMovementStageEnum;

  @Column({ name: 'equipment_movement_type' })
  equipmentMovementType: EquipmentMovementOutTypeEnum;

  @OneToMany(
    () => MovedEquipmentEntity,
    (movedEquipment) => movedEquipment.outMovement,
  )
  movedEquipment: MovedEquipmentEntity[];
}

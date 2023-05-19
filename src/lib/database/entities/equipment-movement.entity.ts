import { Entity, Column, JoinColumn, OneToOne } from 'typeorm';
import UserEntity from './user.entity';
import BaseEntity from './base.entity';

export enum EquipmentMovementTypeEnum {
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
  RETURN = 'RETURN',
  ACCEPTED = 'ACCEPTED',
}

export enum EquipmentReturnStateEnum {
  GOOD = 'GOOD',
  POOR = 'POOR',
}

@Entity('equipment_movements')
export class EquipmentMovementEntity extends BaseEntity {
  @OneToOne((type) => UserEntity)
  @JoinColumn({ name: 'requested_by' })
  requestedBy: UserEntity;

  @OneToOne((type) => UserEntity)
  @JoinColumn({ name: 'returned_by' })
  returnedBy: UserEntity;

  @OneToOne((type) => UserEntity)
  @JoinColumn({ name: 'approved_by' })
  approvedBy: UserEntity;

  @OneToOne((type) => UserEntity)
  @JoinColumn({ name: 'released_by' })
  releasedBy: UserEntity;

  @Column({ name: 'request_time' })
  requestTime: Date;

  @Column({ name: 'approval_time' })
  approvalTime: Date;

  @Column({ name: 'collection_time' })
  collectionTime: Date;

  @Column({ name: 'return_time' })
  returnTime: Date;

  @Column({ name: 'equipment_movement_stage' })
  EquipmentRet: EquipmentMovementStageEnum;

  @Column({ name: 'Equipment_return_state' })
  EquipmentReturnState: EquipmentReturnStateEnum;

  @Column({ name: 'equipment_movement_type' })
  EquipmentMovementType: EquipmentMovementTypeEnum;

  @Column({ name: 'origin_store_id' })
  origin_store: string;

  @Column({ name: 'return_store_id' })
  return_store: string;

  @Column({ name: 'origin_cabinet_id' })
  origin_cabinet: string;

  @Column({ name: 'return_cabinet_id' })
  return_cabinet: string;
}

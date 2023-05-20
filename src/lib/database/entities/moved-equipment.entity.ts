import { Entity, Column, JoinColumn, OneToOne, ManyToOne } from 'typeorm';
import UserEntity from './user.entity';
import BaseEntity from './base.entity';
import StoreEntity from './store.entity';
import { EquipmentOutMovementEntity } from './equipment-out-movement.entity';
import { EquipmentInMovementEntity } from './equipment-in-movement.entity';
import { BinEntity } from './bin.entity';
import { EquipmentEntity } from './equipment.entity';

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

@Entity('moved_equipments')
export class MovedEquipmentEntity extends BaseEntity {

  @ManyToOne(() => EquipmentEntity, (equipment) => equipment.equipmentMovements)
  @JoinColumn({ name: 'equipment_id' })
  equipment: EquipmentEntity;

  @ManyToOne(() => StoreEntity, (store) => store.movedEquipments)
  @JoinColumn({ name: 'store_id' })
  store: StoreEntity;

  @ManyToOne(() => BinEntity, (bin) => bin.movedEquipments)
  @JoinColumn({ name: 'bin_id' })
  bin: BinEntity;

  @ManyToOne(
    () => EquipmentOutMovementEntity,
    (outMovement) => outMovement.movedEquipment,
  )
  @JoinColumn({ name: 'equipment_out_movement' })
  outMovement: EquipmentOutMovementEntity;

  @ManyToOne(
    () => EquipmentInMovementEntity,
    (inMovement) => inMovement.movedEquipment,
  )
  @JoinColumn({ name: 'equipment_in_movement' })
  inMovement: EquipmentInMovementEntity;
}

import { BinEntity } from './bin.entity';
import { EquipmentInMovementEntity } from './equipment-in-movement.entity';
import { EquipmentOutMovementEntity } from './equipment-out-movement.entity';
import { EquipmentTypeEntity } from './equipment-type.entity';
import { EquipmentEntity } from './equipment.entity';
import { EventEntity } from './event.entity';
import { MovedEquipmentEntity } from './moved-equipment.entity';
import { RackEntity } from './rack.entity';
import { ShelfEntity } from './shelf.entity';
import { StoreEntity } from './store.entity';
import { UserEntity } from './user.entity';



const entities = [
  UserEntity,
  EquipmentEntity,
  BinEntity,
  EquipmentInMovementEntity,
  EquipmentOutMovementEntity,
  EquipmentTypeEntity,
  EventEntity,
  MovedEquipmentEntity,
  RackEntity,
  ShelfEntity,
  StoreEntity,
];

export default entities;

export * from './bin.entity';
export * from './equipment-in-movement.entity';
export * from './equipment-out-movement.entity';
export * from './equipment-type.entity';
export * from './equipment.entity';
export * from './event.entity';
export * from './moved-equipment.entity';
export * from './rack.entity';
export * from './shelf.entity';
export * from './store.entity';
export * from './user.entity';

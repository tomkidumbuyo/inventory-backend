import { UserRepository } from './user.repository';
import { StoreRepository } from './store.repository';
import { EquipmentRepository } from './equipment.repository';
import { EquipmentTypeRepository } from './equipment-type.repository';
import { BinRepository } from './bin.repository';
import { RackRepository } from './rack.repository';
import { ShelfRepository } from './shelf.repository';

export const repositories = [
  UserRepository,
  StoreRepository,
  EquipmentRepository,
  EquipmentTypeRepository,
  BinRepository,
  RackRepository,
  ShelfRepository,
];

export * from './user.repository';
export * from './store.repository';
export * from './equipment.repository';
export * from './equipment-type.repository';
export * from './bin.repository';
export * from './shelf.repository';
export * from './shelf.repository';

import {
  EquipmentRepository,
  EquipmentTypeRepository,
  StoreRepository,
  UserRepository,
} from '@database/repositories';

const repositories = [
  UserRepository,
  StoreRepository,
  EquipmentRepository,
  EquipmentTypeRepository,
];

export default repositories;

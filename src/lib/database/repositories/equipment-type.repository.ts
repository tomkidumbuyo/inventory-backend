import { EquipmentTypeEntity } from '@database/entities/equipment-type.entity';
import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { BaseRepository } from './base.repository';

@Injectable()
export class EquipmentTypeRepository extends BaseRepository<EquipmentTypeEntity> {
  constructor(private dataSource: DataSource) {
    super(EquipmentTypeEntity, dataSource.createEntityManager());
  }
}

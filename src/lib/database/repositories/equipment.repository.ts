import { EquipmentEntity } from '@database/entities/equipment.entity';
import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { BaseRepository } from './base.repository';

@Injectable()
export class EquipmentRepository extends BaseRepository<EquipmentEntity> {
  constructor(private dataSource: DataSource) {
    super(EquipmentEntity, dataSource.createEntityManager());
  }
}

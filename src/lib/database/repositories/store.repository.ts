import StoreEntity from '@database/entities/store.entity';
import { Injectable } from '@nestjs/common';
import { BaseRepository } from './base.repository';
import { DataSource } from 'typeorm';

@Injectable()
export class StoreRepository extends BaseRepository<StoreEntity> {
  constructor(private dataSource: DataSource) {
    super(StoreEntity, dataSource.createEntityManager());
  }
}

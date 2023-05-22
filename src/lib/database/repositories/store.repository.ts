import { Injectable } from '@nestjs/common';
import { BaseRepository } from './base.repository';
import { DataSource } from 'typeorm';
import { StoreEntity } from '@database/entities';

@Injectable()
export class StoreRepository extends BaseRepository<StoreEntity> {
  constructor(private dataSource: DataSource) {
    super(StoreEntity, dataSource.createEntityManager());
  }
}

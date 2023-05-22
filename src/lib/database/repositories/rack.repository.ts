import { RackEntity } from '@database/entities';
import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { BaseRepository } from './base.repository';

@Injectable()
export class RackRepository extends BaseRepository<RackEntity> {
  constructor(private dataSource: DataSource) {
    super(RackEntity, dataSource.createEntityManager());
  }
}

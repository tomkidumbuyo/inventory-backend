import { BinEntity } from '@database/entities';
import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { BaseRepository } from './base.repository';

@Injectable()
export class BinRepository extends BaseRepository<BinEntity> {
  constructor(private dataSource: DataSource) {
    super(BinEntity, dataSource.createEntityManager());
  }
}

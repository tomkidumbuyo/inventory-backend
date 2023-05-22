import { ShelfEntity } from '@database/entities';
import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { BaseRepository } from './base.repository';

@Injectable()
export class ShelfRepository extends BaseRepository<ShelfEntity> {
  constructor(private dataSource: DataSource) {
    super(ShelfEntity, dataSource.createEntityManager());
  }
}

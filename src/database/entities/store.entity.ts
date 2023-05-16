import { Entity } from 'typeorm';
import BaseEntity from './base.entity';

@Entity('store')
export default class StoreEntity extends BaseEntity {}

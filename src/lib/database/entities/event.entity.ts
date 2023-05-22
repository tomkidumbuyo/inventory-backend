import { Entity } from 'typeorm';
import BaseEntity from './base.entity';

@Entity('event')
export class EventEntity extends BaseEntity {
}
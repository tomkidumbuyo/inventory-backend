import { Entity } from 'typeorm';
import BaseEntity from './base.entity';

@Entity('shelf-number')
export default class UserEntity extends BaseEntity {}

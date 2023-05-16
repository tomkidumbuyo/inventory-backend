import { Entity } from 'typeorm';
import BaseEntity from './base.entity';

@Entity('users')
export default class UserEntity extends BaseEntity {}

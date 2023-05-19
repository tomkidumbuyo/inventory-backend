import { Entity, OneToMany, Column, JoinColumn, OneToOne } from 'typeorm';
import { RackEntity } from './rack.entity';
import { ShelfEntity } from './shelf.entity';
import UserEntity from './user.entity';
import BaseEntity from './base.entity';

@Entity('stores') 
export default class StoreEntity extends BaseEntity {
  @Column()
  name: string;

  @OneToOne((type) => UserEntity)
  @JoinColumn({ name: 'user_id' })
  manager: UserEntity;

  @OneToMany(() => RackEntity, (rack) => rack.shelf)
  shelves: ShelfEntity[];
}

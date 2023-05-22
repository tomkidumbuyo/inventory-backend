import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
} from 'typeorm';
import BaseEntity from './base.entity';
import { StoreEntity } from './store.entity';
import { RackEntity } from './rack.entity';
import { UserEntity } from './user.entity';

@Entity('shelves')
export class ShelfEntity extends BaseEntity {
  @Column()
  barcode: string;

  @Column()
  number: string;

  @ManyToOne(() => StoreEntity, (store) => store.shelves)
  @JoinColumn({ name: 'store_id' })
  store: StoreEntity;

  @OneToMany(() => RackEntity, (rack) => rack.shelf)
  racks: RackEntity[];

  @OneToOne((type) => UserEntity)
  @JoinColumn({ name: 'created_by_user_id' })
  createdBy: UserEntity;

  @OneToOne((type) => UserEntity)
  @JoinColumn({ name: 'updated_by_user_id' })
  updatedBy: UserEntity;
}

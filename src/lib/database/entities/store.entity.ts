import { Entity, OneToMany, Column, JoinColumn, OneToOne } from 'typeorm';
import BaseEntity from './base.entity';
import { MovedEquipmentEntity } from './moved-equipment.entity';
import { RackEntity } from './rack.entity';
import { ShelfEntity } from './shelf.entity';
import { UserEntity } from './user.entity';

@Entity('stores')
export class StoreEntity extends BaseEntity {
  @Column()
  name: string;

  @OneToOne((type) => UserEntity)
  @JoinColumn({ name: 'store_manage_user_id' })
  storeManager: UserEntity;

  @OneToMany(() => RackEntity, (rack) => rack.shelf)
  shelves: ShelfEntity[];

  @OneToMany(
    () => MovedEquipmentEntity,
    (movedEquipment) => movedEquipment.store,
  )
  movedEquipments: MovedEquipmentEntity[];


  @OneToOne((type) => UserEntity)
  @JoinColumn({ name: 'created_by_user_id' })
  createdBy: UserEntity;

  @OneToOne((type) => UserEntity)
  @JoinColumn({ name: 'updated_by_user_id' })
  updatedBy: UserEntity;
}

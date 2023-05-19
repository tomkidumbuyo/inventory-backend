import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import BaseEntity from './base.entity';
import { RackEntity } from './rack.entity';
import StoreEntity from './store.entity';

@Entity('shelfs')
export class ShelfEntity extends BaseEntity {
  @Column()
  barcode: string;

  @ManyToOne(() => StoreEntity, (store) => store.shelves)
  @JoinColumn({ name: 'store_id' })
  store: StoreEntity;

  @OneToMany(() => RackEntity, (rack) => rack.shelf)
  racks: RackEntity[];
}

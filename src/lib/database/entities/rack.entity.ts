import { Entity, OneToMany, ManyToOne, Column, JoinColumn } from 'typeorm';
import { BinEntity } from './bin.entity';
import { ShelfEntity } from './shelf.entity';
import BaseEntity from './base.entity';

@Entity('racks')
export class RackEntity extends BaseEntity {
  @Column()
  number: string;

  @ManyToOne(() => ShelfEntity, (shelf) => shelf.racks)
  @JoinColumn({ name: 'shelf_id' })
  shelf: ShelfEntity;

  @OneToMany(() => BinEntity, (bin) => bin.rack)
  bins: BinEntity[];
}

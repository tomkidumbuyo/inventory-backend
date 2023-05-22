import {
  Entity,
  OneToMany,
  ManyToOne,
  Column,
  JoinColumn,
  OneToOne,
} from 'typeorm';
import BaseEntity from './base.entity';
import { BinEntity } from './bin.entity';
import { ShelfEntity } from './shelf.entity';
import { UserEntity } from './user.entity';

@Entity('racks')
export class RackEntity extends BaseEntity {
  @Column()
  number: string;

  @ManyToOne(() => ShelfEntity, (shelf) => shelf.racks)
  @JoinColumn({ name: 'shelf_id' })
  shelf: ShelfEntity;

  @OneToMany(() => BinEntity, (bin) => bin.rack)
  bins: BinEntity[];

  @OneToOne((type) => UserEntity)
  @JoinColumn({ name: 'created_by_user_id' })
  createdBy: UserEntity;

  @OneToOne((type) => UserEntity)
  @JoinColumn({ name: 'updated_by_user_id' })
  updatedBy: UserEntity;
}

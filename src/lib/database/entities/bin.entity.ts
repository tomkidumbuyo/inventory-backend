import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
} from 'typeorm';
import BaseEntity from './base.entity';
import { MovedEquipmentEntity } from './moved-equipment.entity';
import { RackEntity } from './rack.entity';
import { UserEntity } from './user.entity';

@Entity('bins')
export class BinEntity extends BaseEntity {
  @Column()
  barcode: string;

  @Column()
  number: string;

  @ManyToOne(() => RackEntity, (rack) => rack.bins)
  rack: RackEntity;

  @OneToMany(() => MovedEquipmentEntity, (movedEquipment) => movedEquipment.bin)
  movedEquipments: MovedEquipmentEntity[];

  @OneToOne((type) => UserEntity)
  @JoinColumn({ name: 'created_by_user_id' })
  createdBy: UserEntity;

  @OneToOne((type) => UserEntity)
  @JoinColumn({ name: 'updated_by_user_id' })
  updatedBy: UserEntity;
}

import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';
import BaseEntity from './base.entity';
import { RackEntity } from './rack.entity';
import { MovedEquipmentEntity } from './moved-equipment.entity';

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
}

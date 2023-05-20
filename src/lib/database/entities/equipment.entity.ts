import { Column, Entity, JoinColumn, OneToMany, OneToOne } from 'typeorm';
import { BinEntity } from './bin.entity';
import { EquipmentTypeEntity } from './equipment-type.entity';
import BaseEntity from './base.entity';
import { MovedEquipmentEntity } from './moved-equipment.entity';

@Entity('equipments')
export class EquipmentEntity extends BaseEntity {
  @Column()
  serialNumber: number;

  @OneToOne((type) => EquipmentTypeEntity)
  @JoinColumn({ name: 'equipment_type_id' })
  type: EquipmentTypeEntity;

  @OneToOne((type) => BinEntity)
  @JoinColumn({ name: 'bin_id' })
  bin: BinEntity;

  @OneToMany(
    () => MovedEquipmentEntity,
    (movedEquipment) => movedEquipment.equipment,
  )
  equipmentMovements: MovedEquipmentEntity[];
}

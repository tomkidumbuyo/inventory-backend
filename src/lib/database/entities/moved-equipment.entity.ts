import { Entity, JoinColumn, ManyToOne, OneToOne } from 'typeorm';
import BaseEntity from './base.entity';
import { BinEntity } from './bin.entity';
import { EquipmentInMovementEntity } from './equipment-in-movement.entity';
import { EquipmentOutMovementEntity } from './equipment-out-movement.entity';
import { EquipmentEntity } from './equipment.entity';
import { StoreEntity } from './store.entity';
import { UserEntity } from './user.entity';

@Entity('moved_equipments')
export class MovedEquipmentEntity extends BaseEntity {
  @ManyToOne(() => EquipmentEntity, (equipment) => equipment.equipmentMovements)
  @JoinColumn({ name: 'equipment_id' })
  equipment: EquipmentEntity;

  @ManyToOne(() => StoreEntity, (store) => store.movedEquipments)
  @JoinColumn({ name: 'store_id' })
  store: StoreEntity;

  @ManyToOne(() => BinEntity, (bin) => bin.movedEquipments)
  @JoinColumn({ name: 'bin_id' })
  bin: BinEntity;

  @ManyToOne(
    () => EquipmentOutMovementEntity,
    (outMovement) => outMovement.movedEquipment,
  )
  @JoinColumn({ name: 'equipment_out_movement' })
  outMovement: EquipmentOutMovementEntity;

  @ManyToOne(
    () => EquipmentInMovementEntity,
    (inMovement) => inMovement.movedEquipment,
  )
  @JoinColumn({ name: 'equipment_in_movement' })
  inMovement: EquipmentInMovementEntity;

  @OneToOne((type) => UserEntity)
  @JoinColumn({ name: 'created_by_user_id' })
  createdBy: UserEntity;

  @OneToOne((type) => UserEntity)
  @JoinColumn({ name: 'updated_by_user_id' })
  updatedBy: UserEntity;
}

import { Column, Entity, ManyToOne } from 'typeorm';
import BaseEntity from './base.entity';
import { RackEntity } from './rack.entity';

@Entity('bins')
export class BinEntity extends BaseEntity {
  @Column()
  barcode: string;

  @Column()
  number: string;

  @ManyToOne(() => RackEntity, (rack) => rack.bins)
  rack: RackEntity;
}

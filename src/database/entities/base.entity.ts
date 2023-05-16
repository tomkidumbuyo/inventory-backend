import { PrimaryGeneratedColumn } from 'typeorm';

export default abstract class BaseEntity {
  @PrimaryGeneratedColumn('uuid', { name: 'id' })
  id?: string;
}

import { Column, Entity, JoinColumn, OneToOne } from 'typeorm';
import BaseEntity from './base.entity';

export enum UserTypeEnum {
  AGENT = 'AGENT',
  STORE_KEEPER = 'STORE_KEEPER',
  ADMIN = 'ADMIN',
}

@Entity('users')
export class UserEntity extends BaseEntity {
  @Column({ name: 'email' })
  email: string;

  @Column({ name: 'first_name' })
  firstName: string;

  @Column({ name: 'last_name' })
  lastName: string;

  @Column({ name: 'phone_number' })
  phoneNumber: string;

  @Column({ name: 'user_type' })
  userType: UserTypeEnum;

  @Column({ select: false })
  password: string;

  @OneToOne((type) => UserEntity)
  @JoinColumn({ name: 'created_by_user_id' })
  createdBy: UserEntity;

  @OneToOne((type) => UserEntity)
  @JoinColumn({ name: 'updated_by_user_id' })
  updatedBy: UserEntity;
}

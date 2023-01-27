import { Column, CreateDateColumn, Entity, UpdateDateColumn } from 'typeorm';
import BaseEntity from './base.entity';

export enum UserTypeEnum {
  ISSUER = 'ISSUER',
  STORE_KEEPER = 'STORE_KEEPER',
  APPROVER = 'APPROVER',
}

@Entity('users')
export default class UserEntity extends BaseEntity {
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

  @Column({ name: 'password' })
  password: string;

  @CreateDateColumn({ name: 'created_at', nullable: false })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', nullable: false })
  updatedAt: Date;
}

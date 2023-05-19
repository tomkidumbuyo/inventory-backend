import { UserTypeEnum } from '@database/entities/user.entity';

export interface UserInterface {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  userType: UserTypeEnum;
  password: string;
  createdAt: Date;
  updatedAt: Date;
}

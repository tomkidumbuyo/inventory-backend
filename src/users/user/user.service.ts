import { RegisterDto } from '@database/dtos/auth.dto';
import { UserEntity } from '@database/entities';

import { UserRepository } from '@database/repositories';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async findOne(email: string): Promise<UserEntity | undefined> {
    return this.userRepository.findOne({ where: { email } });
  }

  async insert(registerInput: RegisterDto) {
    return this.userRepository.insert({
      ...registerInput,
    });
  }
}

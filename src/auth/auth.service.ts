import { RegisterDto } from '@database/dtos/auth.dto';
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { UserService } from 'src/users/user/user.service';
import * as errors from '@errors';
import { UserRepository } from '@database/repositories';

const SALT_OR_ROUND = 10;

@Injectable()
export class AuthService {
  constructor(
    private usersService: UserService,
    private jwtService: JwtService,
    private userRepository: UserRepository,
  ) {}

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.usersService.findOne(email);
    const userPassword = (
      await this.userRepository.findOne({
        where: { email },
        select: { password: true },
      })
    ).password;
    if (!user) throw new errors.UserDoesNotExist();
    if (await bcrypt.compare(password, userPassword)) {
      const { password, ...result } = user;
      return result;
    }
    throw new errors.UsernameAndPasswordDoNotMatch();
  }

  async login(loginInput: any) {
    const user = await this.validateUser(
      loginInput.username,
      loginInput.password,
    );
    if (user) {
      return {
        user: user,
        access_token: this.jwtService.sign(user),
      };
    }
  }

  async hashPassword(password: string) {
    const hash = await bcrypt.hash(password, SALT_OR_ROUND);
    return hash;
  }

  async register(registerInput: RegisterDto) {
    const hash = await this.hashPassword(registerInput.password);
    return this.usersService.insert({
      ...registerInput,
      password: hash,
    });
  }
}

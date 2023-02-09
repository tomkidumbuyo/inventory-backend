import { RegisterDto } from '@database/dtos/auth.dto';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { UserService } from 'src/users/user/user.service';

const SALT_OR_ROUND = 10;

@Injectable()
export class AuthService {
  constructor(
    private usersService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.usersService.findOne(email);
    if (user && (await bcrypt.compare(password, user.password))) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(loginInput: any) {
    const user = await this.validateUser(
      loginInput.username,
      loginInput.password,
    );
    if (user) {
      const payload = { username: user.username, sub: user.userId };
      return {
        access_token: this.jwtService.sign(payload),
      };
    }
    throw new UnauthorizedException();
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

import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/users/entity/user.entity';
import * as argon2 from 'argon2';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(
    email: string,
    password: string,
  ): Promise<Omit<User, 'password'> | null> {
    const user = await this.usersService.findOneByEmail(email);

    const passwordIsMatched = await argon2.verify(user?.password, password);

    if (user && passwordIsMatched) {
      // eslint-disable-next-line no-unused-vars
      const { password, ...result } = user;

      return result;
    }

    throw new UnauthorizedException('User or password are incorrect');
  }

  async signIn(): Promise<any> {}
}

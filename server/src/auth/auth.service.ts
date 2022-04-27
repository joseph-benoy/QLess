import { ForbiddenException, Injectable } from '@nestjs/common';
import { signUpDto } from './dto';
import * as argon from 'argon2';
import { PrismaService } from 'src/prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwt: JwtService,
    private readonly config: ConfigService,
  ) {}
  async signUp(dto: signUpDto) {
    try {
      //generate password hash
      const passwordHash = await argon.hash(dto.password);
      delete dto.password;
      //save user data
      const user = await this.prisma.user.create({
        data: {
          ...dto,
          password: passwordHash,
        },
      });
      //sign token and return
      return this.signToken(user.id, user.email);
    } catch (e) {
      if (e instanceof PrismaClientKnownRequestError) {
        if (e.code === 'P2002') {
          throw new ForbiddenException('Email already in use');
        }
      }
      throw e;
    }
  }
  async signToken(id: number, email: string) {
    const payload = {
      sub: id,
      email,
    };
    const secret = this.config.get('JWT_SECRET');
    const token = await this.jwt.signAsync(payload, {
      secret,
    });
    return {
      access_token: token,
    };
  }
}

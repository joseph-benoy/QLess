import { ForbiddenException, Injectable } from '@nestjs/common';
import { SignInDto, signUpDto } from './dto';
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
  /**
   *signIn service
   * @param dto sign in Dto
   * @returns access_token
   */
  async signIn(dto: SignInDto) {
    try {
      const user = await this.prisma.user.findUnique({
        where: {
          email: dto.email,
        },
      });
      if (!user) {
        throw new ForbiddenException(`Email doesn't match`);
      }
      const pwMatch = await argon.verify(user.password, dto.password);
      console.log(pwMatch);
      if (!pwMatch) {
        throw new ForbiddenException(`Password doesn't match`);
      }
      return this.signToken(user.id, user.email);
    } catch (error) {
      throw error;
    }
  }
}

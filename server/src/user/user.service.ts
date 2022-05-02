import { Injectable } from '@nestjs/common';
import { user } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { EditUserDto } from './dto/editUser.dto';
import * as argon from 'argon2';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}
  async editUser(userId: number, dto: EditUserDto): Promise<user> {
    const hash = await argon.hash(dto.password);
    delete dto.password;
    const user = await this.prisma.user.update({
      where: {
        id: userId,
      },
      data: {
        ...dto,
        password: hash,
      },
    });
    delete user.password;
    return user;
  }
}

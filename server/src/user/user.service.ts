import { Injectable } from '@nestjs/common';
import { user } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { EditUserDto } from './dto/editUser.dto';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}
  async editUser(userId: number, dto: EditUserDto): Promise<user> {
    const user = await this.prisma.user.update({
      where: {
        id: userId,
      },
      data: {
        ...(dto as any),
      },
    });
    delete user.password;
    return user;
  }
}

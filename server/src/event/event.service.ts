import { Injectable } from '@nestjs/common';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
import { PrismaService } from 'src/prisma/prisma.service';
import { HostDto } from './dto';

@Injectable()
export class EventService {
  constructor(private readonly prisma: PrismaService) {}
  async hostEvent(userId: number, dto: HostDto) {
    try {
      const event = await this.prisma.event.create({
        data: {
          createdBy: userId,
          ...dto,
        },
      });
      return event;
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        throw error;
      }
    }
  }
}

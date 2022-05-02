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
  async allEvents() {
    try {
      const events = await this.prisma.event.findMany();
      return events;
    } catch (error) {
      throw error;
    }
  }
  async eventsByUserId(userId: number) {
    try {
      const events = await this.prisma.event.findMany({
        where: {
          createdBy: userId,
        },
      });
      return events;
    } catch (error) {
      throw error;
    }
  }
  async eventById(userId: number, eventId: number) {
    try {
      const events = await this.prisma.event.findUnique({
        where: {
          id: eventId,
        },
      });
      if (events) {
        const data = {
          ...events,
          bookable: userId !== events.createdBy,
        };
        return data;
      }
      return events;
    } catch (error) {
      throw error;
    }
  }
}

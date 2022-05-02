import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { getUser } from 'src/auth/decorator';
import { JwtGaurd } from 'src/auth/guards';
import { HostDto } from './dto';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { EventService } from './event.service';

@UseGuards(JwtGaurd)
@Controller('event')
export class EventController {
  constructor(private readonly EventService: EventService) {}
  @Post('new')
  hostEvent(@getUser('id') userId: number, @Body() dto: HostDto) {
    return this.EventService.hostEvent(userId, dto);
  }
  @Get('all')
  all() {
    return this.EventService.allEvents();
  }
  @Get('host')
  getEventsById(@getUser('id') userId: number) {
    return this.EventService.eventsById(userId);
  }
}

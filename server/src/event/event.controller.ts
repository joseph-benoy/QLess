import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { getUser } from 'src/auth/decorator';
import { JwtGaurd } from 'src/auth/guards';
import { HostDto } from './dto';
import { EventService } from './event.service';

UseGuards(JwtGaurd);
@Controller('event')
export class EventController {
  constructor(private readonly EventService: EventService) {}
  @Post('new')
  hostEvent(@getUser('id') userId, @Body() dto: HostDto) {
    return this.EventService.hostEvent(userId, dto);
  }
}

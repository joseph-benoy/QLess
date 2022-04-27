import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { UserController } from './user/user.controller';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { EventService } from './event/event.service';
import { EventController } from './event/event.controller';
import { EventModule } from './event/event.module';

@Module({
  imports: [UserModule, AuthModule, EventModule],
  controllers: [AppController, UserController, EventController],
  providers: [EventService],
})
export class AppModule {}

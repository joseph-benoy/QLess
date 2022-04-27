import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { UserController } from './user/user.controller';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { EventService } from './event/event.service';
import { EventController } from './event/event.controller';
import { EventModule } from './event/event.module';
import { PrismaService } from './prisma/prisma.service';
import { PrismaModule } from './prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    UserModule,
    AuthModule,
    EventModule,
    PrismaModule,
    ConfigModule.forRoot({ isGlobal: true }),
  ],
  controllers: [AppController, UserController, EventController],
  providers: [EventService, PrismaService],
})
export class AppModule {}

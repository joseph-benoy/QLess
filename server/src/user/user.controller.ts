import { Body, Controller, Patch, UseGuards } from '@nestjs/common';
import { getUser } from 'src/auth/decorator';
import { JwtGaurd } from 'src/auth/guards';
import { EditUserDto } from './dto/editUser.dto';
import { UserService } from './user.service';

@UseGuards(JwtGaurd)
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Patch()
  editUser(@getUser('id') userId: number, @Body() dto: EditUserDto) {
    return this.userService.editUser(userId, dto);
  }
}

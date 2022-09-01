import { Injectable, Dependencies } from '@nestjs/common';
import { UserService } from '@data/data.service';

@Injectable()
@Dependencies(UserService)
export class AuthService {
  constructor(private usersService: UserService) {}

  async validateUser(username: string, pass: string) {
    const user = await this.usersService.getUserByName(username);
    if (user && user[0].password.toString() === pass) {
      const { password, ...result } = user[0];
      return result;
    }
    return null;
  }
}
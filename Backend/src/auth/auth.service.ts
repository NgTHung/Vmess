import { Injectable, Dependencies } from '@nestjs/common';
import { UserService } from '@data/data.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
@Dependencies(UserService,JwtService)
export class AuthService {
  constructor(private usersService: UserService,private jwtService: JwtService) {

  }

  async validateUser(username: string, pass: string) {
    const user = await this.usersService.getUserByName(username);
    console.log(user)
    if (user.length !== 0 && user[0].password === pass) {
      const { password, ...result } = user[0];
      return result;
    }
    return null;
  }

  async login(user: any) {
    const payload = { username: user.username, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
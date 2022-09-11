import { Injectable, Dependencies } from '@nestjs/common';
import { UserService } from '@data/data.service';
import { JwtService } from '@nestjs/jwt';
import { UserDto } from '@data/data.entity';
import * as bcrypt from "bcryptjs"

@Injectable()
@Dependencies(UserService,JwtService)
export class AuthService {
  constructor(private usersService: UserService,private jwtService: JwtService) {}

  async validateUser(username: string, pass: string) {
    const user = await this.usersService.getUserByName(username);
    if (user.length !== 0 && bcrypt.compareSync(pass,user[0].password)) {
      const { password, ...result } = user[0];
      return result;
    }
    return null;
  }

  async login(user: any) {
    const payload = { username: user.username, sub: user.id };
    return this.jwtService.sign(payload);
  }

  // async register(user: UserDto){
  //   const id=await this.usersService.createUser({username:user.username,password:await bcrypt.hash(user.password,10)}), payload = {username: user.username, sub:id}
  //   return this.jwtService.sign(payload)
  // }

  async checkUserExist(user:UserDto){
    let res = await this.usersService.getUserByName(user.username)
    if(res.length !== 0){
      return false
    }
    return true
  }
}
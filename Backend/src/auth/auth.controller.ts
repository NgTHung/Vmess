import { Controller, Get, Post, UseGuards, Res, Req, Body } from '@nestjs/common';
import { JwtAuthGuard } from '@auth/guard/jwt-auth.guard';
import { LocalAuthGuard } from '@auth/guard/local-auth.guard';
import { AuthService } from '@auth/auth.service';
import { UserDto } from '@data/data.entity';

@Controller("auth")
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Req() req:any,@Res({"passthrough":true}) res:any) {
    let data = req.signedCookies["auth-cookies"];
    if(data){
      return "Already logged in!"
    }
    data = await this.authService.login(req.user)
    res.cookie('auth-cookies',data,{httpOnly: true,signed: true})
    return "Done"
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Req() req:any) {
    return req.user;
  }

  @UseGuards(JwtAuthGuard)
  @Get('logout')
  logout(@Res({"passthrough": true}) res:any){
    res.clearCookie('auth-cookies')
    return 'Done'
  }

  // @Post("register")
  // async Register(@Body() body:UserDto,@Req() req:any,@Res({"passthrough":true}) res:any){
  //   let data = req.signedCookies["auth-cookies"];
  //   if(data){
  //     return "Already logged in!"
  //   }
  //   if(!await this.authService.checkUserExist(body)) return "Error! User existed"
  //   res.cookie("auth-cookies",await this.authService.register(body),{httpOnly:true,signed: true})
  //   return "Done"
  // }
}
import { Controller, Get } from "@nestjs/common";
import {UserService} from "@data/data.service"

@Controller('data')
export default class UserController {
    constructor(
        private readonly userService: UserService // inject
    ){}

    @Get('doSomthing')
    async doSomething() {
        const res = await this.userService.getUser(); 
        return {msg: res}
    }
}
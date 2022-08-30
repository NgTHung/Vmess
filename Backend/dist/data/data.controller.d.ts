import { UserService } from "@data/data.service";
export default class UserController {
    private readonly userService;
    constructor(userService: UserService);
    doSomething(): Promise<{
        msg: import("./data.entity").default[];
    }>;
}

import { UserRepository } from '@data/data.repository';
import User from '@data/data.entity';
export declare class UserService {
    private userRepository;
    constructor(userRepository: UserRepository);
    getUser(): Promise<User[]>;
    getUserById(id: number): Promise<User[]>;
    createUser(employee: User): Promise<User[]>;
}

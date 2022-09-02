import { UserRepository } from '@data/data.repository';
import { UserDto } from '@data/data.entity';
import { types } from 'cassandra-driver';
export declare class UserService {
    private userRepository;
    constructor(userRepository: UserRepository);
    getUser(): Promise<import("@data/data.entity").default[]>;
    getUserByName(username: string): Promise<import("@data/data.entity").default[]>;
    createUser(employee: UserDto): Promise<types.Uuid>;
}

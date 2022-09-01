import { OnModuleInit } from '@nestjs/common';
import { mapping } from 'cassandra-driver';
import User from '@data/data.entity';
import { CassandraService } from '@cass/cassandra.service';
export declare class UserRepository implements OnModuleInit {
    private cassandraService;
    constructor(cassandraService: CassandraService);
    private readonly logger;
    userMapper: mapping.ModelMapper<User>;
    onModuleInit(): Promise<void>;
    getUser(): Promise<User[]>;
    getUserByName(username: string): Promise<User[]>;
    createUser(user: User): Promise<User[]>;
}

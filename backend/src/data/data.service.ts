import { Injectable } from '@nestjs/common';
import { UserRepository } from '@data/data.repository';
import { UserDto } from '@data/data.entity';
import { types } from 'cassandra-driver';

@Injectable()
export class UserService {

    constructor(private userRepository: UserRepository) { }

    async getUser() {
        return this.userRepository.getUser(); // Get all User
    }

    async getUserByName(username: string){
        return this.userRepository.getUserByName(username)
    }

    async createUser(employee: UserDto) {
        let id = types.Uuid.random()
        await this.userRepository.createUser({id: id,username:employee.username,password:employee.password});
        return id
    }
}
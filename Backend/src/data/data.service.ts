import { Injectable } from '@nestjs/common';
import { UserRepository } from '@data/data.repository';
import User from '@data/data.entity';
import { types } from 'cassandra-driver';

@Injectable()
export class UserService {

    constructor(private userRepository: UserRepository) { }

    async getUser() {
        return this.userRepository.getUser(); // Get all User
    }

    async getUserById(id: types.Uuid) {
        return this.userRepository.getUserById(id);
    }

    async getUserByName(username: string){
        return this.userRepository.getUserByName(username)
    }

    async createUser(employee: User) {
        return this.userRepository.createUser(employee);
    }
}